"use strict";
//Union
Object.defineProperty(exports, "__esModule", { value: true });
var name = "priya";
name = 23;
//Union in Functions
function DbId(id) {
    console.log("jhddbhd ".concat(id));
    // id.toLowerCase() causes error 
}
DbId(2);
DbId("2");
//correct way of writing union
function DbId2(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
DbId2(123);
//union in array
var array1 = [1, "2", 2, 5];
console.log(array1);
var obj1 = { name: "priya", id: 123 };
obj1 = { username: "dhbhdb", id: 26563 };
