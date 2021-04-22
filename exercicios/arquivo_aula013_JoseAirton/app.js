const express = require('express');

const app = express();

var indexFile = require('./views/index.html')


app.get('/', (req, res) =>{
    res.sendFile(__dirname + 'views/index.html',);
})

app.listen(1357, () => {
    console.log('Server is running...')
})
