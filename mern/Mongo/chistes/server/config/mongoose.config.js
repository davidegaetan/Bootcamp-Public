const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/jokes_app", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})	
.then(() => console.log("Connected to database"))
.catch(err => console.log("Failed to connect to database", err));