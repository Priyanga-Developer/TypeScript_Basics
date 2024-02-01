"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "priya",
    email: "priya@gmail.com",
    isActive: true
};
//1st method
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//2nd method returning object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
createCourse();
//odd behaviour in objects -it doesnot allow new property as arguments
// createUser({name:"priya",isPaid:false,email:"priya"})
//Solution
var newUser = { name: "priya", isPaid: true, email: "priya@gmail.com" };
createUser(newUser);
function objectCreate(user) {
    return { name: "", email: "", isActive: true };
}
objectCreate({ name: "priya", email: "priyya@gmail.com", isActive: true });
var userCreate = {
    name: "priyanga",
    email: "ffdfdfdf",
    isActive: true,
    _id: 2335544,
};
var card = {
    cardNum: 1235,
    cardDate: 45445,
    CVV: 56765
};
