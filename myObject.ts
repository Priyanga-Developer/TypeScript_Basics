
const User={
    name:"priya",
    email:"priya@gmail.com",
    isActive:true
}
//1st method
function createUser({name:string, isPaid:boolean}) {   
}

//2nd method returning object

function createCourse():{name:string, price:number} {
    return {name:"reactjs",price:399}
}
createCourse()
//odd behaviour in objects -it doesnot allow new property as arguments
// createUser({name:"priya",isPaid:false,email:"priya"})
//Solution

let newUser={name:"priya", isPaid:true, email:"priya@gmail.com"}
createUser(newUser)

///Using Type ==it’s common to want to use the same type more than once and refer to it by a single name.
type User={
    name:string,
    email:string,
    isActive:boolean
}
function objectCreate(user:User):User{
  return { name :"", email:"",isActive: true}
}
objectCreate({name:"priya",email:"priyya@gmail.com",isActive:true})
type newUser={
    name:string
    email:string
    isActive:boolean
    readonly _id:number
    createProfile?:string //optional data
}
type CardNumber={
    cardNum:number
}
type CardDate={
    cardDate:number
}
type CardDetails=CardNumber&CardDate&{
    CVV:number
}

let userCreate:newUser={
    name:"priyanga",
    email:"ffdfdfdf",
    isActive:true,
    _id:2335544,
}
let card:CardDetails={
    cardNum:1235,
    cardDate:45445,
    CVV:56765
}

// userCreate._id=466786 shows error bcoz its a read only property


export {}