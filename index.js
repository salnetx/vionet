const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.resolve(__dirname) + '/api/templates');
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(PORT,()=>{
    console.log(`App is booming at port ${PORT}`)
})