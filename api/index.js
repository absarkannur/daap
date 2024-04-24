
const EthereumTx    = require('ethereumjs-tx').Transaction
const { Web3 }      = require('web3');

const API = "https://sepolia.infura.io/v3/bc0a732409104882a72cd10ea90f0d2b";

let web3 = new Web3( API );

const tempAddress = "0x9fF270cA85ED100141da4AB475e112D6bF4587A7";

web3.eth.getBalance( tempAddress ).then(( bal ) => {

    console.log( web3.utils.fromWei( bal, 'ether' ) );

}).catch(( err ) => {
    console.log( err );
})

// web3.eth.getTransactionCount( fromAccount ).then((txCount) => {
    
//     // Build Transactions
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         to: toAccount,
//         value:  web3.utils.toHex( web3.utils.toWei( 10, 'ether' ) ),
//     }

//     // Sign the transactions
//     const tx = new EthereumTx( txObject );
//     tx.sign( private_key_1 );

//     const serializedTx = tx.serialize();
//     const raw = '0x' + serializedTx.toString('hex');

//     // Broadcast the Transactions
//     web3.eth.sendSignedTransaction( raw ).then(( hash ) => {

//         console.log( hash );

//     }).catch((error) => {
//         console.log( error );
//     });

// }).catch(( err ) => {
//     console.log( err );
// });