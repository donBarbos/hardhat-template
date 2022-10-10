import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs"
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Template", () => {
  async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner, addr1, addr2] = await ethers.getSigners()

    const SmartContract = await ethers.getContractFactory("Template", owner)
    const contract = await SmartContract.deploy()
    await contract.deployed()

    console.log("contract address: ", contract.address)
    return { contract, owner, addr1, addr2 }
  }

  describe("Deployment", () => {
    it("Should be deployed", async () => {
      const { contract } = await loadFixture(deploy)

      expect(contract.address).to.be.properAddress
    })
  })

  describe("Calls", () => {
    describe("Functions", () => {
      const firstName = "Vitalik"
      const lastName = "Buterin"

      it("Should invoke the createAccount function", async () => {
        const { contract, addr1 } = await loadFixture(deploy)
        const tx = await contract.connect(addr1).createAccount(firstName, lastName)

        await expect(tx).not.to.be.reverted
      })

      it("Should invoke the stopAccount function", async () => {
        const { contract, addr1, addr2 } = await loadFixture(deploy)
        await contract.connect(addr1).createAccount(firstName, lastName)
        const tx = await contract.connect(addr2).stopAccount(0)

        await expect(tx).not.to.be.reverted
      })

      it("Should invoke the getStatusOfAccount function", async () => {
        const { contract, addr1, addr2 } = await loadFixture(deploy)
        await contract.connect(addr1).createAccount(firstName, lastName)
        const tx = await contract.connect(addr2).getStatusOfAccount(0)

        await expect(tx).not.to.be.reverted
      })

      it("Should invoke the getLifetimeOfAccount function", async () => {
        const { contract, addr1, addr2 } = await loadFixture(deploy)
        await contract.connect(addr1).createAccount(firstName, lastName)
        const tx = await contract.connect(addr2).getLifetimeOfAccount(0)

        await expect(tx).not.to.be.reverted
      })
    })

    describe("Events", () => {
      const firstName = "Hal"
      const lastName = "Finney"

      it("Should emit an event on createAccount", async () => {
        const { contract, addr1 } = await loadFixture(deploy)
        const tx = contract.connect(addr1).createAccount(firstName, lastName)

        await expect(tx).to.emit(contract, "AccountCreated").withArgs(0, addr1.address, anyValue)
      })

      it("Should emit an event on stopAccount", async () => {
        const { contract, addr1, addr2 } = await loadFixture(deploy)
        await contract.connect(addr1).createAccount(firstName, lastName)
        const tx = await contract.connect(addr2).stopAccount(0)

        await expect(tx).to.emit(contract, "AccountStopped").withArgs(0, addr2.address, anyValue)
      })
    })

    describe("Other functions", () => {
      it("Should invoke the receive function", async () => {
        const { contract, addr1 } = await loadFixture(deploy)
        const tx = addr1.sendTransaction({
          to: contract.address,
          data: "0x",
          gasLimit: 210000,
        })

        await expect(tx).to.be.revertedWith("incorrect call!")
      })

      it("Should invoke the fallback function", async () => {
        const { contract, addr1 } = await loadFixture(deploy)
        const tx = addr1.sendTransaction({
          to: contract.address,
          data: "0x1234",
          gasLimit: 210000,
        })

        await expect(tx).to.be.revertedWith("incorrect call!")
      })
    })
  })
})
