const jwt = require('jsonwebtoken');
const JWT_SECRET="BahulTyagi"
const fetchuser=(req, res, next)=>{
    //get the user from jwt token and add id to req object
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try{
    const data=jwt.verify(token, JWT_SECRET);
    req.student=data.student;
    next();
    }catch(error){
        console.log(error.message)
    }
}

module.exports=fetchuser;