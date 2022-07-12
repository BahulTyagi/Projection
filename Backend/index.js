const connectToMongo = require("./db");
const express = require('express')
const cors=require("cors");   //cors error ke liye , npm i cors kiya

const app = express()
const port = 5000

app.use(express.json())  // a middleware to see req.body in conosle
                         // console.log(req.body)

app.use(cors());

// saare routes yaha hai
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectToMongo();