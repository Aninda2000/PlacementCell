const express=require('express');
const router=express.Router();
const employeeController=require('../controllers/employee_controller');

router.get('/sign-in',employeeController.signIn);
router.get('/sign-up',employeeController.signUp);

module.exports=router;