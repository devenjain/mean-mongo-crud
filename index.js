const express = require('express')
const userController = require('./controller/db-user-controller')
const apiRoutes = require('./api-routes')
const mongoose = require('mongoose')
var swaggerUi = require('swagger-ui-express')
var fs = require('fs')
// var jsyaml = require('js-yaml');
// var spec = fs.readFileSync('swagger.yml', 'utf8');
// var swaggerDocument = jsyaml.safeLoad(spec);

const app = express()
const port = process.env.PORT || 3000

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "MongoDb API",
//         version: "0.1.0",
//         description:
//           "This is a simple CRUD API application made with Express and documented with Swagger",
//         },
//       },
//     apis: ["./routes/index.js"],
//   };
  
//   const specs = swaggerJsdoc(options);
//   app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
//   );
  

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",apiRoutes)

const uri = "mongodb+srv://deven:deven@cluster0.qo1hy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("dbConnected");
    }
})

app.listen(port,function(){
    console.log("Server Started...");
})