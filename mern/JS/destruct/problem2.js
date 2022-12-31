const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //undefined or reference error
console.log(otherName); //Elon or nothing if first console.log is reference error

