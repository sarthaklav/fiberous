const express = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.send('Hellow from fiberous server first route...');
})

app.listen(3030, ()=>{
    console.log('fiberous server started on port no 3030..')
})