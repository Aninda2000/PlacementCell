const student=require('../models/student');

module.exports.createStudent=function(req,res){
    student.create(req.body);
    return res.redirect('back');
}
module.exports.placementPage= function(req,res){
    return res.send('<h1> placement page </h1>');
}