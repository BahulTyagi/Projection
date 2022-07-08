const express=require('express')
const router=express.Router()

const Student=require('../models/Student')



// create a student using: POST "/api/auth". doesnt require login
router.post('/', (req, res) => {
  console.log(req.body)
  const student=Student(req.body)
  student.save()
  res.send("hello")
})

module.exports=router;