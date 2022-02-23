const mongoose = require("mongoose")
const schema = mongoose.Schema

const RoleSchema = new schema({
    roleName : {
        type : String,
        require : true,
        maxlength : 12
    }
})

const RoleModel = mongoose.model("role",RoleSchema)

module.exports = RoleModel