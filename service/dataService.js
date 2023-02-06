const db= require('./db')

const employeereg =(jobtittle,contactnumber,skills,workexperience,description)=>{
    return db.Employee.findOne({contactnumber})
    .then(employee=>{
        if(employee){
            
            return{
                status:false,
                statusCode:400,
                 message:'user already registered'
            }
        }else{
            const newEmployee = new db.Employee({
                jobtittle:     jobtittle,
                contactnumber: contactnumber,
                skills:        skills,
                workexperience:workexperience,
                description:   description
            })

            newEmployee.save();
            return{
              status:'True',
                statusCode:200,
                message:'Register Succesfull'
            }

        }
    })
}


const image=(contactnumber,image,hourlyrate)=>{
    return db.Employee.findOne({contactnumber})
    .then(images=>{
        if(images){
            // console.log(images);
            images.image.push(image)
            
            images.hourlyrate=hourlyrate
            images.save()
            return{
                status:false,
                statusCode:400,
                 message:'user already registered'
            }
        }
    })

}



const address=(contactnumber,address,)=>{
    return db.Employee.findOne({contactnumber})
    .then(addresss=>{
        if(addresss){
            // console.log(images);
            addresss.address=address
            addresss.save()

            return{
                status:false,
                statusCode:400,
                 message:'user already registered'
            }
        }
    })

}



module.exports={
    employeereg,
    image,
    address
}