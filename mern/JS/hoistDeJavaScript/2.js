var needle = 'haystack';
test();
function test(){
var needle = 'magnet';
console.log(needle);
}

//after hoisting
/*
var needle;
function test(){
var needle;
needle = 'magnet';
console.log(needle);
}
needle = 'haystack';
test();
*/