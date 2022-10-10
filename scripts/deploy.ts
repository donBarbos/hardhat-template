import { ethers, run } from "hardhat"

async function main() {
  /* check compile status */
  await run("compile")

  const [deployer] = await ethers.getSigners()
  console.log("\x1b[33m%s\x1b[0m", "Deploying contract with the account:", deployer.address)
  console.log("\x1b[33m%s\x1b[0m", "Account balance:", (await deployer.getBalance()).toString())

  const Auction = await ethers.getContractFactory("DutchAuction")
  const auction = await Auction.deploy()

  await auction.deployed()

  console.log("\x1b[33m%s\x1b[0m", "Contract address:", auction.address)
  console.log("\x1b[34m%s\x1b[0m", "Contracts deployed!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
