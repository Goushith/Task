const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/EveryHome',()=>{
    console.log('connected to MongoDB')
})


const Employee = mongoose.model('Employee',{
    jobtittle:String,
    contactnumber:Number,
    skills:[],
    workexperience:String,
    description:String,
    image:[],
    hourlyrate:String,
    address:String
    
})






module.exports ={

    Employee
}
    
