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
const ethers = require('ethers');

function restoreHDWallet(mnemonic) {
    return ethers.Wallet.fromMnemonic(mnemonic)
}

let mnemonic = 
    'upset fuel enhance depart portion hope core animal innocent will athlete snack'
console.log(restoreHDWallet(mnemonic));

