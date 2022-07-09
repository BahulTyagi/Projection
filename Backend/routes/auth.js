const express=require('express')
const router=express.Router()

const { body, validationResult } = require('express-validator');
const Student=require('../models/Student')

// create a student using: POST "/api/auth". doesnt require login
router.post('/', 
[
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
  body('name').isLength({min: 3})
], 
(req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    Student.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(student=>res.send(student)).catch(err=>{
      console.log(err);
      res.json({error: "Please enter a valid email"})
    })
})

module.exports=router;