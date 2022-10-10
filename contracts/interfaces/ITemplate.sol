// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/**
 * @title ITemplate
 * @author donBarbos
 * @notice Example interface
 */
interface ITemplate {
  /**
   * @param creator Address of creator
   * @param firstName First name of person
   * @param lastName Last name of person
   * @param startAt Timestamp of creation
   * @param stopped Account status (Still going / Ended) at start: `false`
   */
  struct Account {
    address payable creator;
    string firstName;
    string lastName;
    uint startAt;
    bool active;
  }

  event AccountCreated(uint index, address creator, uint startAt);
  event AccountStopped(uint index, address creator, uint stopTime);

  receive() external payable;

  fallback() external payable;

  function createAccount(
    string memory _firstName,
    string memory _lastName
  ) external returns (uint);

  function stopAccount(uint index) external returns (bool);

  function getStatusOfAccount(uint index) external view returns (bool);

  function getLifetimeOfAccount(uint index) external view returns (uint);
}
