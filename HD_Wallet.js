const ethers = require('ethers');

function restoreHDWallet(mnemonic){
    return ethers.utils.HDNode.fromMnemonic(mnemonic)
}

let mnemonic = 
    'upset fuel enhance depart portion hope core animal innocent will athlete snack'
    console.log(restoreHDWallet(mnemonic))
    