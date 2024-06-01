// In your route.js file

import express from 'express';
import { userSignUp, userLogIn,userLogout,userForget,userResetpassword,userEvent,userNotice,getNotice,deleteNotice,editNotice,updateNotice,createQuestion,examLogin,getPaper,addResult,getScore,accessStudent,sarchResult,contactUser,getMail,replyUser} from "../controller/user-controller.js"

const router = express.Router();

// Signup, login, and logout routes
router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/logout', userLogout);
router.post('/forget',userForget);
router.post('/resetpassword',userResetpassword);
router.post('/event',userEvent);
router.post('/notice',userNotice);
router.post('/deletenotice',deleteNotice);
router.post('/editnotice',editNotice);
router.post('/updatenotice',updateNotice);
router.post('/updatenotice',updateNotice);
router.post('/createquestion',createQuestion);
router.post('/examlogin',examLogin);
router.post('/getpaper',getPaper);
router.post('/result',addResult);
router.post('/sarchresult',sarchResult);
router.post('/accessstudent',accessStudent);



router.get('/getresult',getScore);
router.get("/getnotice",getNotice)
router.get("/getmail",getMail)


router.post('/contact',contactUser);
router.post('/contactreply',replyUser);



export default router;
