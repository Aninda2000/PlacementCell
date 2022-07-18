const express=require('express');
const router=express.Router();
const employeeController=require('../controllers/employee_controller');


router.get('/sign-in', employeeController.signIn);
router.get('/sign-up', employeeController.signUp);
router.post('/create',employeeController.create);

router.post('/create-session',employeeController.createSession);

router.get('/log-out',employeeController.destroySession);

module.exports=router;