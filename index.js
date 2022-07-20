const express= require('express');
const app=express();
const port= process.env.PORT || 8000;
//database connection
const db= require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser= require('cookie-parser');



//use the body
app.use(express.urlencoded({extended:true}));

//use the cookieparser
app.use(cookieParser());

//setup for layouts
app.use(expressLayouts);
//extract all styles and scripts from layouts
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

//setup for view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.use("/",require('./routes/index'));



app.listen(port,function(err){
    if(err){
        console.log("Error in running the server in the port :",port);
    }
    console.log("server is running on the port", port);
});
