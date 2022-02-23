const mongoose = require('mongoose')
const schema = mongoose.Schema

const EmployeeSchema = new schema({
    
    firstName : String,
    email : String,
    password : String,
    role : {
        type : schema.Types.ObjectId,
        ref : "role"
    }
})

const EmployeeModel = mongoose.model("employee",EmployeeSchema)

module.exports = EmployeeModel  