const express=require('express');
const app=express();
const path=require('path')
const port= 80;

//serving static files
app.use('/static', express.static('staticfolder'))


//setting the template engine as pug
app.set('view engine' ,'pug')

//Set the views directory
app.set('views', path.join(__dirname,'views'))

//pug template endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo', { title :' HEY SHOUKAT ', message:'thanks for pug template'})
});

app.get('/',function(req,res){
    res.status(200).send('workinggno')
})
app.listen(port ,()=>{
    console.log('the application has started running on port 80')
});