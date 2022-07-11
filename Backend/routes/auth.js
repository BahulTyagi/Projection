const express=require('express')
const router=express.Router()
const { body, validationResult } = require('express-validator');
const Student=require('../models/Student')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET="BahulTyagi"

// create a student using: POST "/api/auth/createuser". doesnt require login
router.post('/createuser', 
[
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
  body('name').isLength({min: 3})
], 
async (req, res) => {
  // if there are errrors, return bad request and the errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
})

module.exports=router;