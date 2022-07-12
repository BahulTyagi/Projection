const express=require('express')
const router=express.Router()
const { body, validationResult } = require('express-validator');
const Student=require('../models/Student')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')

const JWT_SECRET="BahulTyagi"


//Route 1
// create a student using: POST "/api/auth/createuser". doesnt require login
router.post('/createuser', 
[
  body('password', 'password must have min 5 characters').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('name').isLength({min: 3})
], 
async (req, res) => {
  // if there are errrors, return bad request and the errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{

    //check whether a student with this email already exist
    let student=await Student.findOne({email: req.body.email});
    if(student){
      return res.status(400).json({error: "a user with this email already exits broo"})
    }

    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password, salt)
    student = await Student.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });

const data={
  student:{ 
    id: student.id
    }
}

    const authToken=jwt.sign(data, JWT_SECRET)
    res.json({authToken})

  }catch(error){
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
})

// Route 2: Login
// Authenticate a student using: POST "/api/auth/login". doesnt require login
router.post('/login', 
[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'password cant be empty').exists(),
], 
async (req, res) => {

  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password }=req.body;

  try{
    let student= await Student.findOne({ email });
    if(!student)
    {
      success=false;
      return res.status(400).json({error: "Incorrect email or password"})
    }

    const passwordCompare=await bcrypt.compare(password, student.password);
    if(!passwordCompare)
    {
      success=false;
      return res.status(400).json({error: "Incorrect email or password"}) 
    }

    const data={
      student:{
        id: student.id
      }
    }
    const authToken=jwt.sign(data, JWT_SECRET);
    success=true;
    res.json({success, authToken})
  }
  catch(error){
    console.error(error.message);
    res.status(500).send(" Error Occured");
  }
})

//Route 3: 
// fetching student details from mongodb using : POST "/api/auth/getuser" , login required

router.get('/getuser', fetchuser, async(req, res)=>{
  try {
    studentId=req.student.id;
    const student=await Student.find({id:studentId}).select("-password")
    res.json({student});
  } catch (error) {
    console.error(error.message);
      res.status(500).send(" Error Occured");
  }

})


module.exports=router;