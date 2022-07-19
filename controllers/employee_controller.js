const employee=require('../models/employee');


module.exports.signIn= function(req,res){
    return res.render('employee_sign-in',{
        isAuthenticate:false
    });

}
module.exports.signUp= function(req,res){
    return res.render('employee_sign-up',{
        isAuthenticate:false
    });
}

module.exports.create=function(req,res){
    employee.findOne({email:req.body.email},function(err,docs){
        if(err){console.log("error while creating employee",err);return ;}
        if(docs){
            return res.redirect('../employee/sign-in');
        }

        //checking password and confirm password equal or not
        if(req.body.password!=req.body.confirmPassword){
            console.log("checking password");
            return res.redirect('back');
        }
        employee.create(req.body);
        return res.redirect('../employee/sign-in');
        
    });
    
}

module.exports.createSession =function(req,res){
    
    employee.findOne({email:req.body.email},function(err,employee){
        if(err){
            console.log("error in signing up"); 
            return res.redirect('back');
        }
        if(!employee){           
            return res.redirect('back');
        }
        if(req.body.password!=employee.password){           
            return res.redirect('back');
        }
        res.cookie("user_Id" ,employee.email);
        return res.redirect('../');
    });
}

module.exports.destroySession= function(req,res){
    res.clearCookie("user_Id");
    return res.redirect('../employee/sign-in');
}

