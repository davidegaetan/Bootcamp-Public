const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.fname = faker.name.firstName();
        this.lname = faker.name.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req,res)=>{
    const user = new User;
    res.json(user)

})

app.get("/api/companies/new", (req,res)=>{
    const company = new Company;
    res.json(company)

})

app.get("/api/user/company", (req,res)=>{
    const company = new Company;
    const user = new User;
    const userCompany = []
    userCompany.push(user)
    userCompany.push(company)
    res.json(userCompany)

})


const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
