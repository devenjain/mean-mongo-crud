const EmployeeModel = require('../model/employee-model')

exports.addEmployee = function(req,res){
    
    let employee = new EmployeeModel(req.body)

    employee.save(function(err,data){

        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }else{
            res.json({data : data, msg : "Employee Added", status : 1})
        }

    })
}

exports.getEmployee = function(req,res){

    EmployeeModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }else{
            res.json({data : data, msg : "All Employees Retrived", status : 200})
        }
    })

}
