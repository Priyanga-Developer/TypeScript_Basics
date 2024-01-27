
let name :string="Priya" //string
let val:number=123455 //number does not have int or float in runtime ,in general it is number
let val2=2343564 //can be declared without annotation since typescript has the power to identify its type
console.log(name,val,val2)

// let hero; // any type -should be avoided.
let hero:string;
function hellowrold(){
    return "Hello world"
}

//array and map  --> no need to specify type
hero=hellowrold()
const array=["priya","sruthi","visali"]
array.map((arr)=>{
    return arr
})
array.map((arr):string=>{ //meaning it return string
    return arr
})


//function

//1.
 function addTwo(num:number) {
     return num*2
 }
 addTwo(2)
 //2.
 function addTwo2(num:number):number {
    return num*2 // show error if it is string
}
addTwo2(2)

 //3.
const newFunction=(num:number):number=>{
  return num
}
newFunction(2)

 //4. Multiple parameters
 function profile(name:string,email:string,isLoading:boolean){
    return name+email+isLoading 
}
profile("dhdh","dhd@gmail.com",true)
 //5. Multiple parameters with one default
 function profile2(name:string,email:string,isLoading:boolean=true){
    return name+email+isLoading 
}
profile2("dhdh","dhd@gmail.com")
 //6. cannot specify any return type
 function profile3(val:number){
    if(val>2){
        return true
    }
    return false
}
profile3(3)


//VOID and Never

function consoleError(errMsg:string):void{ //does not return any value
    console.log(errMsg)
}
consoleError("this is the error")

function handleError(errMsg:string):never{ //does not return any value,throws an error /terminates the function
   throw new Error(errMsg)
}
handleError("this is the error")














export {}