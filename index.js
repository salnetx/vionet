const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(PORT,()=>{
    console.log(`App is booming at port ${PORT}`)
})