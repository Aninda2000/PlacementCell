const student=require('../models/student');
const interviews=require('../models/interview');

module.exports.createStudent=function(req,res){
    student.create(req.body);
    return res.redirect('back');
}
module.exports.placementPage= function(req,res){
    interviews.find({},function(err,interviews){
        if(err){
            console.log(err);
            return;
        }
        return res.render('placementCell',{
            interviews:interviews
        });
    });
}

module.exports.createInterview=function(req,res){
    interviews.create(req.body);
    return res.redirect('back');
}