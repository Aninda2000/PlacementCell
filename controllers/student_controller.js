const student=require('../models/student');
const interviews=require('../models/interview');
const { Parser } = require('json2csv');

module.exports.createStudent=function(req,res){
    student.create(req.body);
    return res.redirect('back');
}
module.exports.placementPage= async function(req,res){
    let students=await student.find({});
    interviews.find({},function(err,interviews){
        if(err){
            console.log(err);
            return;
        }
        return res.render('placementCell',{
            interviews:interviews,
            students : students,
            isAuthenticate:true,
            email: req.cookies.user_Id
        });
    });
}

module.exports.createInterview=function(req,res){

    interviews.create(req.body);
    return res.redirect('back');
}

module.exports.download=async function(req,res){
    interviews.find({}, async function(err, docs){
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
            //find the student
            let st=await student.findOne({s_name:i.s_name});
            temp["College Name"]=st.s_college;
            temp["Dsa Score"] =st.dsa_score;
            temp["Web Score"] =st.web_score;
            temp["React Score"]=st.react_score;
            temp["Batch"]=st.s_batchName;
            allInterview.push(temp);
        }
        const csvheader=["Company Name","Student Name","Status","Date","College Name","Dsa Score","Web Score","React Score","Batch"];
        const parser=new Parser({csvheader});
        const csv=parser.parse(allInterview);

        res.attachment("placementCellData.csv");
        res.status(200).send(csv);
    });
}