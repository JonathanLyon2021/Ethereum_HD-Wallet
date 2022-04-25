//#3 New Random HD Wallet // Generates random mnemonics

const ethers = require("ethers");

function generateRandomHDWallet() {
	return ethers.Wallet.createRandom();
}

const wallet = generateRandomHDWallet();
console.log(generateRandomHDWallet());
console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
