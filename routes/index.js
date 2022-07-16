const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');


router.get('/',homeController.home);
router.use('/employee',require('./employee'));
router.use('/student',require('./student'));

module.exports=router;