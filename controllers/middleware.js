const employee=require('../models/employee');

module.exports.isAuthenticate= function(req,res,next){
    if(!req.cookies.user_Id){
        return res.redirect('../employee/sign-in');
    }
    employee.findOne({email:req.cookies.user_Id},function(err,emp){
        if(err){
            console.log("error while Authenticating");
            return res.redirect('back');
        }
        if(!emp){
            return res.redirect('back');
        }else{
            next();
        }
    });
}