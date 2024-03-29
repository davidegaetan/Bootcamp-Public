const express = require("express");
const cors = require("cors")
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/pim.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllRoutes = require("./server/routes/pim.routes");
AllRoutes(app);

app.listen(8000, () => console.log("The server is listening on port 8000"));
