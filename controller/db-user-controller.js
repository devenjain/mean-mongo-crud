const UserModel = require('../model/db-user-model')

exports.signup = function(req,resp){
    
    let user = new UserModel({
        firstName : req.body.firstName,
        email : req.body.email,
        password : req.body.password
    })

    user.save(function(err,data){
        if(err){
            resp.json({data : err, msg : "Something went wrong", status :-1})
        }else{
            resp.json({data : data, msg : "signup done", status : 1})
        }
    })
}

exports.getAllUsers = function(req,res){

    UserModel.find(function(err,data){
        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }else{
            res.json({data : data, msg : "All users Retrived", status : 200})
        }
    })
}

exports.deleteUser = function(req,res){

    console.log("Body id : ",req.params)

    UserModel.deleteOne({_id: req.params.userId},function(err,data){

        if(err){
            res.json({data : err, msg : "Something went wrong", status :-1})
        }else{

            console.log(data.deletedCount);
            
            if(data.deletedCount == 0){
                res.json({data : req.params, msg : "Invalid UserId!", status : -1})
            }
            else{
                res.json({data : data, msg : "User Deleted", status : 200})
            }
            
        }
    })
}

exports.getUserById = function(req,res){

    UserModel.findOne({_id:req.params.userId}, function(err,data){
        if(err){
            res.json({ data: err, msg: "SMWE", status: -1 })
        }else{

            if(data){
                res.json({data : data, msg : "Success", status:200})
            }else{
                res.json({ data: req.params, msg: "Invalid userId!", status: -1 })
            }

        }
    })
}

exports.updateUser = function(req,res){

    UserModel.findByIdAndUpdate({_id:req.body.userId}, {firstName:req.body.firstName},function(err,data){

        if(err){
            res.json({ data: err, msg: "SMWE", status: -1 })
        }else{

            if(data){
                res.json({ data : data, msg : "user Updated..." , status : 200})
            }else{
                res.json({ data: req.params, msg: "Invalid userid", status: -1 })
            }
        }
    })
}