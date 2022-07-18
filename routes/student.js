const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student_controller');
const Authentication=require('../controllers/middleware');

router.post('/create', studentController.createStudent);
router.get('/placement', Authentication.isAuthenticate, studentController.placementPage);

router.post('/create-interview',studentController.createInterview);

router.get('/download',studentController.download);

module.exports=router;