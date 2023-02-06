const express = require('express')
const dataService=require('./service/dataService')

const app = express()

app.use(express.json())


app.listen(3000,()=>{
    console.log('listening to port 3000'); //port number
})

app.post('/employeereg',(req,res)=>{
    console.log(req.body);
    dataService.employeereg(req.body.jobtittle,req.body.contactnumber,req.body.skills,req.body.workexperience,req.body.description)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/image',(req,res)=>{
    console.log(req.body);
    dataService.image(req.body.contactnumber,req.body.image,req.body.hourlyrate)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/address',(req,res)=>{
    console.log(req.body);
    dataService.address(req.body.contactnumber,req.body.address)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})