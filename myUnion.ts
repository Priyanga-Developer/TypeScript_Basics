//Union

let name: string | number = "priya"
name=23
//Union in Functions
function DbId(id:number|string) {
    console.log(`jhddbhd ${id}`); 
    // id.toLowerCase() causes error 
}
DbId(2)
DbId("2")

//correct way of writing union

function DbId2(id:number|string) {
    if(typeof id ==="string"){
        id.toLowerCase()
    }
    
}
DbId2(123)

//union in array

let array1:(number|string)[]=[1,"2",2,5]
console.log(array1);

//union in objects

type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}
let obj1:User|Admin={name:"priya",id:123}
obj1={username:"dhbhdb",id:26563}



















export {}