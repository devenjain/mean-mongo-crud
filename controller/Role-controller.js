const RoleModel = require("../model/role-model")

exports.addRole = function(req,res){

    let role = new RoleModel(req.body)

    role.save(function(err,data){

        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }
        else{
            res.json({data : data, msg : "Role added", status:200})
        }
    })
}

exports.getAllRole = function(req,res){

    RoleModel.find(function(err,data){

        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }
        else{
            res.json({data : data, msg : "Data Fetched", status:200})
        }
    })
}