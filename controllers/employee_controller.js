const employee=require('../models/employee');

module.exports.signIn= function(req,res){
    return res.render('employee_sign-in');

}
module.exports.signUp= function(req,res){
    return res.render('employee_sign-up');
}

module.exports.create=function(req,res){
    employee.find({email:req.body.email},function(err,docs){
        if(err){console.log("error while creating employee",err);return;}
        if(docs.length>0){
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

