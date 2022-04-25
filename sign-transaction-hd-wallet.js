//#7 Sign a Transaction//
//From the derived wallets, take the second wallet and sign a transaction//

const ethers = require('ethers');

async function signTransaction(wallet, toAddress, value) {
    let transaction = {
        nonce: 0,
        gasLimit: 21000,
        gasPrice: ethers.BigNumber.from('0x1'),
        to: toAddress,
        value: ethers.utils.parseEther(value),
        data: '0x',
    }
    const signedTransaction = await wallet.signTransaction(transaction);
    console.log("Signed Transaction:")
    console.log(signedTransaction)
    return signedTransaction;
}

signTransaction();