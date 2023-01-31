const mongoose = require("mongoose")

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/pim", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connected to database"))
.catch(err=>console.log("Couldn't connect to database",err));