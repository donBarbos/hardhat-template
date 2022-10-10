import { Signer } from "@ethersproject/abstract-signer"
import { task } from "hardhat/config"

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts: Signer[] = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
