const express = require('express');

const app = express();


app.get('/', (req,res)=> {
    res.json({message: 'Hello from docker'});
})

app.listen(9000, () => console.log("server Running at PORT 9000"));


