//#1 //Restoring HD Wallet by Existing Mnemonic// 
// const ethers = require('ethers');

// function restoreHDWallet(mnemonic){
//     return ethers.utils.HDNode.fromMnemonic(mnemonic)
// }

// let mnemonic = 
//     'upset fuel enhance depart portion hope core animal innocent will athlete snack'
//     console.log(restoreHDWallet(mnemonic))

//#2 //ethers.Wallet instance actually uses HDNode.fromMnemonic, derives once, 
//and from the new HD node, it takes the private key to build the wallet.//
// const ethers = require('ethers');

// function restoreHDWallet(mnemonic) {
//     return ethers.Wallet.fromMnemonic(mnemonic)
// }

// let mnemonic = 
//     'upset fuel enhance depart portion hope core animal innocent will athlete snack'
// console.log(restoreHDWallet(mnemonic));

//#3 New Random HD Wallet // Generates random mnemonics

// const ethers = require('ethers');

// function generateRandomHDWallet() {
//     return ethers.Wallet.createRandom()
// }

// const wallet = generateRandomHDWallet();
// console.log(generateRandomHDWallet());
// console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);

//#4 Save HD Wallet as JSON//
// const ethers = require('ethers');

// async function createAndSaveWalletAsJSON(password) {
//     const wallet = await ethers.Wallet.createRandom().encrypt(password)
//     console.log(JSON.parse(wallet));
// }

// createAndSaveWalletAsJSON('Kingsland University');

//#5 Load HD Wallet from JSON -
// Decrypt and load an HD node from a JSON wallet using a password//

// const ethers = require('ethers');

// async function decryptWallet(json, password) {
//     return ethers.Wallet.fromEncryptedJson(json, password)
// }

// async function createAndSaveWalletAsJSON(password) {
//     const wallet = await ethers.Wallet.createRandom()
//     console.log('Wallet before encryption ===')
//     console.log(wallet)
//     return wallet.encrypt(password)
// }

// ;(async () => {
//     const password = 'Kingsland University';
//     //Encryption
//     let json = await createAndSaveWalletAsJSON(password)

//     //Decryption
//     let walletDecrypted = await decryptWallet(json, password)
//     console.log('Wallet after decryption ===')
//     console.log(walletDecrypted)
// })()

//#6 Derive Keys from HD Wallet //////////////////////////////////
//Derive Keys and addresses from HD Wallet by Ethereum's derivation path//

const ethers = require('ethers');

function deriveFiveWalletsFromHdNode(mnemonic, derivationPath) {
    let wallets = []

    for(let index = 0; index < 5; index ++) {
        let hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic).derivePath(
            derivationPath + index,
        )
        console.log('Derivation path', hdNode.path)
        console.log('Address', hdNode.address)
        console.log('Private key', hdNode.privateKey)
        console.log('==========')
        let wallet = new ethers.Wallet(hdNode.privateKey)
        wallets.push(wallet)
    }
    return wallets;
}

let mnemonic = 
'upset fuel enhance depart portion hope core animal innocent will athlete snack'
let derivationPath = "m/44'/60'/0'/0/"

deriveFiveWalletsFromHdNode(mnemonic, derivationPath)
