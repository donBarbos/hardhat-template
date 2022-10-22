<h1 align="center">
  <em>Hardhat template for Solidity using Typescript</em>
</h1>

<p align="center">
  <a href="https://github.com/donBarbos/hardhat-template/actions/workflows/lint.yml"><img alt="Lint Status" src="https://github.com/donBarbos/hardhat-template/actions/workflows/lint.yml/badge.svg"></a>
  <a href="https://github.com/donBarbos/hardhat-template/actions/workflows/tests.yml"><img alt="Tests Status" src="https://github.com/donBarbos/hardhat-template/actions/workflows/tests.yml/badge.svg"></a>
  <a href="https://github.com/donBarbos/hardhat-template/actions/workflows/build.yml"><img alt="Build Status" src="https://github.com/donBarbos/hardhat-template/actions/workflows/build.yml/badge.svg"></a>
  <a href="https://github.com/donBarbos/hardhat-template/blob/main/LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

## 🚀 Getting Started

> Click the [Use this template](https://github.com/donBarbos/hardhat-template/generate) button at the top of the page to create a new repository with this repo as the initial state.

0. Setup Husky to format code on commit

   ```shell
   yarn prepare
   ```

1. Install dependencies

   ```shell
   yarn install
   ```

2. Rename from `.env.example` to `.env`, then set variables

3. And now you can compile, deploy and verify your contract

   ```shell
   yarn deploy
   yarn verify --network $NETWORK "0x0000000000000000000000000000000000000000"  # 0x00... is contract address
   ```

### Commands

- `yarn compile` - compile smart contract
- `yarn deploy --network $NETWORK_NAME` - deploy to `$NETWORK_NAME` your contract
- `yarn virefy --network $NETWORK_NAME` - verify code of your contract on `$NETWORK_NAME` using block explorer API key
- `yarn accounts --network $NETWORK_NAME` - you can see all available addresses to use
- `yarn size` - show size of contracts
- `yarn typechain` - generate types for your smart contract
- `yarn test` - run tests
- `yarn prepare` - husky install
- `yarn lint` - run all lints
- `yarn clean` - remove generated folders

### Github Actions

Note though that to make this work, you must use your PRIVATE_KEY from wallet as GitHub secrets.\
Tip: use the secret key of an unnecessary wallet

## 👷 Contributing

First off, thanks for taking the time to contribute! Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks!

1. `Fork` this repository
2. Create a `branch`
3. `Commit` your changes
4. `Push` your `commits` to the `branch`
5. Submit a `pull request`

## 📝 License

Distributed under the MIT license. See `LICENSE` for more information.

## 📢 Contact

[donbarbos](https://github.com/donBarbos): donbarbos@proton.me
