const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')
// app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/apps',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'app.html'))
})

app.get('/careers',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'careers.html'))
})

app.get('/press',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'press.html'))
})

app.get('/opensource',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'opensource.html'))
})

app.listen(PORT,()=>{
    console.log(`App is booming at port ${PORT}`)
})