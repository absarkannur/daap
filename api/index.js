
const express = require('express');
const { Web3 } = require('web3');
const app = express();

const API = "HTTP://127.0.0.1:7545";

app.get( "/", ( req, res )  => {
    
    let web3 = new Web3( API );
    let address = "0xA997a4FDBcC41FBA10B188504F51EF4DC7628BC5";

    web3.eth.getBalance( address ).then(( balance ) => {
        
        let amount = web3.utils.fromWei( balance, 'ether' );
        res.send( "Balance : " + amount );

    });


});

app.listen( 8080 );