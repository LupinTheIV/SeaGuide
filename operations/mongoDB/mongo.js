const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose
  .connect("mongodb+srv://santiagomontenegrow:MondongoLupin@clusterl.3oyijuu.mongodb.net/SeaGuide")
  .then(() => console.log("Conexión exitosa"))
  .catch((error) => console.log(error)); //Conexión al puerto
    app.listen(27017, () => {
  console.log("mongodb connected");
});
const loginSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("user", loginSchema)
