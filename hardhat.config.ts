import "@nomicfoundation/hardhat-chai-matchers"
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-solhint"
import "@openzeppelin/hardhat-upgrades"
import { config as dotenvConfig } from "dotenv"
import "hardhat-contract-sizer"
import "hardhat-dependency-compiler"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/config"
import { resolve } from "path"
import "solidity-coverage"

import "./scripts/accounts.ts"

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env"
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) })

const PRIVATE_KEY: string = process.env.PRIVATE_KEY || ""
const apiKeys = {
  mainnet: process.env.MAINNET_API_KEY || "",
  goerli: process.env.GOERLI_API_KEY || "",
  optimism: process.env.OPTIMISM_API_KEY || "",
  polygon: process.env.POLYGON_API_KEY || "",
  arbitrum: process.env.ARBITRUM_API_KEY || "",
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    mainnet: {
      chainId: 1,
      url: "https://eth-mainnet.g.alchemy.com/v2/" + apiKeys.mainnet,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      chainId: 5,
      url: "https://eth-goerli.alchemyapi.io/v2/" + apiKeys.goerli,
      accounts: [PRIVATE_KEY],
    },
    optimism: {
      chainId: 10,
      url: "https://opt-mainnet.g.alchemy.com/v2/" + apiKeys.optimism,
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed1.binance.org",
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      chainId: 137,
      url: "https://polygon-mainnet.g.alchemy.com/v2/" + apiKeys.polygon,
      accounts: [PRIVATE_KEY],
    },
    hardhat: {},
    arbitrum: {
      chainId: 42161,
      url: "https://arb-mainnet.g.alchemy.com/v2/" + apiKeys.arbitrum,
      accounts: [PRIVATE_KEY],
    },
    avalanche: {
      chainId: 43114,
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      goerli: process.env.ETHERSCAN_API_KEY || "",
      bsc: process.env.BSCSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      avalanche: process.env.SNOWTRACE_API_KEY || "",
    },
  },
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
}

export default config
