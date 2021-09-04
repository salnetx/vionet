const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/comingsoon',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'comingsoon.html'))
})


app.listen(PORT,()=>{
    console.log(`App is booming at port ${PORT}`)
})