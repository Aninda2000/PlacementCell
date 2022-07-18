const students= require('../models/student');



module.exports.home=function(req,res){
    students.find({},function(err,students){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            students:students,
            isAuthenticate:true,
            email: req.cookies.user_Id
        });
    });
    
}