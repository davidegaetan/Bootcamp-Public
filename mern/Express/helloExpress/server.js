const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json( users[req.params.id] );
});

app.post("/api/users", (req,res) => {
  console.log(req.body,"req.body");
  users.push(req.body);
  res.json({status: "ok"});
});

app.put("/api/users/:id", (req,res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json({status: "ok"})
});

app.delete("/api/users/:id",(req,res)=>{
  const id = req.params.id;
  users.splice(id,1)
  res.json({status: "ok"})
})

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/hi", (req, res) => {
  res.send("hi");
});

app.get("/api/nodemon", (req, res) => {
  res.send("nodemon test");
});

app.get("/api/son", (req, res) => {
  res.json({ message: "Hello World" });
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
