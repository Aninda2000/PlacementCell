const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student_controller');

router.post('/create',studentController.createStudent);
router.get('/placement',studentController.placementPage);

router.post('/create-interview',studentController.createInterview);

module.exports=router;