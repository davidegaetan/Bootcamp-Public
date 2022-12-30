dojo = "san jose";
console.log(dojo);
learn();
function learn() {
dojo = "seattle";
console.log(dojo);
var dojo = "burbank";
console.log(dojo);
}
console.log(dojo);

//after hoisting
/*
function learn() {
var dojo;
dojo = "seattle";
console.log(dojo);
dojo = "burbank";
console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
*/