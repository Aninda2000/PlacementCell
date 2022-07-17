const student=require('../models/student');
const interviews=require('../models/interview');
const { Parser } = require('json2csv');

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

module.exports.download=function(req,res){
    interviews.find({},function(err, docs){
        if(err){
            console.log("error while downloading", err);
            return;
        }
        const allInterview=[];
        for(let i of docs){
            let temp={};
            temp["Company Name"]=i.c_name;
            temp["Student Name"]=i.s_name;
            temp["Status"]=i.status;
            temp["Date"]=i.date;
            allInterview.push(temp);
        }
        const csvheader=["Company Name","Student Name","Status","Date"];
        const parser=new Parser({csvheader});
        const csv=parser.parse(allInterview);

        res.attachment("placementCellData.csv");
        res.status(200).send(csv);
    });
}