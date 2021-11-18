const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.resolve(__dirname) + '/api/templates');
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/addrup',(req,res)=>{
    res.render('addrup')
})
app.get('/apps',(req,res)=>{
    res.render('navBar')
})

app.get('/opensource',(req,res)=>{
    res.render('navBar')
})

app.get('/press',(req,res)=>{
    res.render('navBar')
})

app.get('/careers',(req,res)=>{
    res.render('career')
})



app.listen(PORT,()=>{
    console.log(`App is booming at port ${PORT}`)
})