const express= require('express');
const app=express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');


//setup for layouts
app.use(expressLayouts);

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
