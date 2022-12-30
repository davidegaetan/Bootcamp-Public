mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//after hoisting
/*
var mean;
mean = function () {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

this gets a type error
*/