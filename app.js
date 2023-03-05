const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const port = 80;
//EXPRESS SPECIFIC STUFF


app.use('/static', express.static('static')) //FOR SERVING STATIC FILE
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine','pug') // set the template engine as pug
app.set('views',path.join(__dirname,'views')) // Set the views directory

// end points
app.get('/',(req,res)=>{
    const params ={ }
        res.status(200).render('index.pug',params);
    
})
// start server
   
app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`);
});



