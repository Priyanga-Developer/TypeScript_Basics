"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Priya"; //string
var val = 123455; //number does not have int or float in runtime ,in general it is number
var val2 = 2343564; //can be declared without annotation since typescript has the power to identify its type
console.log(name, val, val2);
// let hero; // any type -should be avoided.
var hero;
function hellowrold() {
    return "Hello world";
}
//array and map  --> no need to specify type
hero = hellowrold();
var array = ["priya", "sruthi", "visali"];
array.map(function (arr) {
    return arr;
});
array.map(function (arr) {
    return arr;
});
//function
//1.
function addTwo(num) {
    return num * 2;
}
addTwo(2);
//2.
function addTwo2(num) {
    return num * 2; // show error if it is string
}
addTwo2(2);
//3.
var newFunction = function (num) {
    return num;
};
newFunction(2);
//4. Multiple parameters
function profile(name, email, isLoading) {
    return name + email + isLoading;
}
profile("dhdh", "dhd@gmail.com", true);
//5. Multiple parameters with one default
function profile2(name, email, isLoading) {
    if (isLoading === void 0) { isLoading = true; }
    return name + email + isLoading;
}
profile2("dhdh", "dhd@gmail.com");
//6. cannot specify any return type
function profile3(val) {
    if (val > 2) {
        return true;
    }
    return false;
}
profile3(3);
//VOID and Never
function consoleError(errMsg) {
    console.log(errMsg);
}
consoleError("this is the error");
function handleError(errMsg) {
    throw new Error(errMsg);
}
handleError("this is the error");
