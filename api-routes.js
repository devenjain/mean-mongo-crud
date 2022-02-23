const router = require("express").Router()

var userController = require("./controller/db-user-controller")
var roleController = require("./controller/Role-controller")
var employeeController = require("./controller/employee-controller")

router.post("/signup",userController.signup)
router.get("/users",userController.getAllUsers)
router.delete("/users/:userId",userController.deleteUser)
router.get("/users/:userId",userController.getUserById)
router.put("users",userController.updateUser)

router.post("/roles",roleController.addRole)
router.get("/roles",roleController.getAllRole)

router.post("/employee",employeeController.addEmployee)
router.get("/employees",employeeController.getEmployee)

module.exports = router