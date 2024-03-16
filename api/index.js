

const express = require('express');
const app = express();

app.get( '/', ( req, res ) => {
    res.send( "DAAP" );
});

app.listen(8080);