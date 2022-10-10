// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./interfaces/ITemplate.sol";

// @autor donBarbos
// @notice This contract is made for template
contract Template is ITemplate {
  Account[] public accounts;

  receive() external payable{
    revert("incorrect call!");
  }

  fallback() external payable{
    revert("incorrect call!");
  }

  function createAccount(
    string memory _firstName,
    string memory _lastName
  ) external returns(uint) {

    Account memory newAccount = Account({
      creator: payable(msg.sender),
      firstName: _firstName,
      lastName: _lastName,
      startAt: block.timestamp,
      active: true
    });
    accounts.push(newAccount);

    emit AccountCreated(
      accounts.length - 1,
      msg.sender,
      block.timestamp
    );

    return accounts.length - 1;
  }

  function stopAccount(uint index) external returns (bool) {
    Account memory cAccount = accounts[index];
    require(cAccount.active, "account stopped!");
    cAccount.active = false;
    emit AccountStopped(
      index,
      msg.sender,
      block.timestamp
    );
    return true;
  }

  function getStatusOfAccount(uint index) external view returns(bool) {
    Account memory cAccount = accounts[index];
    return cAccount.active;
  }

  function getLifetimeOfAccount(uint index) external view returns(uint) {
    Account memory cAccount = accounts[index];
    require(cAccount.active, "account stopped!");
    require(cAccount.startAt >= block.timestamp, "invalid timestamp!");
    return cAccount.startAt - block.timestamp;
  }
}
