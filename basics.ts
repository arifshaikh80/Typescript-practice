//Define the datatype so that variable does not accept any other datatype
let num:number=10;
console.log(num);

let name:string='Arif';
console.log(name);

//Defining object in Typescript usinhg type aliasses
//Type alias are versatile can be used for defining any type ,union,intersection and tuples
type car= {
    name:string
    color:string
    year:number
}
let showcar:car={name:'BMW', color:'Black', year:2019}
console.log(`${showcar.name}`);

//Interface alias can extends other interfaces, support declaration merging
//Commonly used for objects, classes and function types
interface Car{
    name:String
    color:string
    year:number
}
let newcar:Car={
    name: 'Lambhorgini',
    color: "Red",
    year: 2023
};

console.log(`${newcar.name}`)

//Functions
function addTwo(num: number){
    return num+3
}
console.log(addTwo(5))

function Name(val:string){
    return `This is my name ${val}`
}
console.log(Name('Arif'))

function signUpUser(name:string,email:string,isPaid:boolean){
}

//This function is returing hello instead of number
//function subTwo(num:number){
//    return "hello";
//}
//To avoid this we declare the return type of output
//Like this
function subTwo(num:number):number{
    return num-2;
}
console.log(subTwo(10))
//Array stores data of similar datatype
let numb:number[]=[1,2,3,4,6]
//Tuple are similar to array but they can store different datatypes
let tuple:[string, number]=["Hello",10]
console.log(tuple);

//Program to calculate factorial in typescript
let mynum:number=5;
let i:number;
let factorial  = 1;

for(i=1;i<=mynum;i++){
    factorial*= i;
}
console.log(factorial)

//Function that can have different datatype as a return value
function getValue(myVal: number){
    if (myVal>5){
        return true;
    }
    return "200 Ok"
}

//Arrow function in TS
const getHello = (s:string):string=>{
    return " "
}

const heros = ["thor", "ironman", "batman"]
heros.map((hero):string=>{
    return `hero is ${hero}`
})

interface User{
    readonly dbId:number
    email:string,
    userId:number
    googleId?:string
    startTrail:()=>string
}
 const arif:User ={dbId:20, email: "a@a.com",userId:1010, startTrail:()=>{return "trail started"}}


export{}
