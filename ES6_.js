//  EcmaScript
//  ECMA is an organization that defines tha Javascript syntax standards.
//  ES6 was introduced with enhanced syntax like arrow functions, string literal, Enhanced object literal, rest operator, spread operator etc 


//Spread Operator

// let arr = [1,2,3];
// let arr2 = arr;

// arr2.push(4);

// //both will print [ 1, 2, 3, 4 ]
// console.log(arr);
// console.log(arr2);

// let obj1 = {name:'kinza', id:2}
// let obj2 = obj1;
// obj2.name = 'ali';

// // both will print { name: 'ali', id: 2 }
// console.log(obj1)
// console.log(obj2)
//reference is assigned.

//We have to copy the arr or obj not its reference, so we will use the spread operator.

//Solution for arrays

// let arr = [1,2,3];
// let arr2 = [...arr]; //assigned by value

// arr2.push(4);

// console.log(arr); //[ 1, 2, 3 ]
// console.log(arr2); // [ 1, 2, 3, 4 ]

// //solution for objects
// let obj1 = {name:'kinza',id:1};
// let obj2 = {...obj1}
// obj2['city'] = 'shp';

// console.log(obj1); //{ name: 'kinza', id: 1 }
// console.log(obj2); //{ name: 'kinza', id: 1, city: 'shp' }


//***************************** ***************************************************************************************

//Enhanced object literal
//we can create variables and construct object, don't need to define the property names, variable name is property name itself


// let name = "kinza"
// let age = "22"
// let id = 3;

// let person = {name,age,id};
// console.log(person.name) //kinza


//***************************** ***************************************************************************************

// Computed property or object enhancement.
// In which the value of varibale is computed and declared as key in object

// let x = "name"
// let y = "age"
// let z = "id";

// let person = {[x]:"kinza",[y]:21,[z]:1}
// console.log(person.age) //kinza

//***************************** ***************************************************************************************

//Rest opertor ...

// function sum(...data){
//     s = 0;
//     data.forEach(elem => {
//         s+=elem
        
//     } 
//     )

// console.log(s);
// }
// sum(1,2,3,4); //10


// function add(...data){
//     a=0;
//     // for of for arrays
//     for(elem of data){
//         a+=elem;
//     }
//     console.log(a);
// }
// add(1,2,3,4); //10


//***************************** ***************************************************************************************
//arguments is array like object //it is enumerable

// function sum(){
//     for(let arg in arguments){
//         console.log(arguments[arg])
//     }
// }

// sum(1,2,3,4,44)

//Rest operator is iteratable

//***************************** ***************************************************************************************

//Object destructuring
// When we have a lot of nested properties in object, we need a chain of dot operators to access the specific value, so

// let obj = {name:"kinza", age: 21, address:{city:"shp",house:{number:10}}}
// console.log(obj.address.house.number); //chain

// //Destructure the object.
// const {name,age,address:{city,house:{number}}} = obj;
// console.log(number); // easy to access


//***************************** ***************************************************************************************

//array destructuring
// When we have a lot of nested arrays in an Array, we need a chain of [] to access the specific value, so

// let arr = [1,2,3,[4,5,[6,7,[8,9,[10]]]]];

// //access 10
// console.log(arr[3][2][2][2][0]); // difficulty

// //Destructure the array
// const[one,two,three,[four,five,[six,seven,[eight,nine,[ten]]]]] = arr;
// console.log(ten); //10


//***************************** ***************************************************************************************

//Modules in js

//  * Independent component that provides specific functionality, that can later be imported to use in the code anywhere
//  * They help us to achieve modularity
//  * We use import and export keywords to deal with modules
//  * 
//  * Steps:
//  * 1. Create a module i.e function, class, object etc in file
//  * 2. Use export keyword to make it useable in other files
//  * 
//  * 3. Create another file, 
//  * import the module with filename that contains module
 

//Two types of export = default and named

//this is named
// module.exports=function sum(a,b){return a+b}

//this is default
// module.exports=()=>{
//     return 5+3;
// }


//***************************** ***************************************************************************************

//Class

// class Person{
//     //constructor
//     constructor(name,age){
//         this.pName = name;
//         this.pAge = age;
//         let pHobby;
//     }

//     //setter
//     setHobby(hobby){
//         this.pHobby= hobby;
//     }

//     get getHobby(){
//         return hobby;
//     }

//     viewPerson(){
//         console.log("Name is "+this.pName+" age is "+this.pAge+" hobby is "+this.pHobby);
//     }

// }

// let person1 = new Person("kinza",12);
// person1.setHobby("sleeping")

// person1.viewPerson()


// class Aperson extends Person{

//     constructor(){
//         //if no super, you will get error
//         super();
//         console.log(this.pName);
//     }

//     setHobby(x){
//         this.pHobby = x;
//     }
// }

// let p1 = new Aperson();
// console.log(p1);
// p1.setHobby("nothing");
// console.log(p1.pHobby)

//***************************** ***************************************************************************************

//Imediately invoked function expression

//((x)=>{console.log(x)})('kinza')

//***************************** ***************************************************************************************
// var is function scoped and let is block scoped

// console.log(x);
// var x = "hi"
// console.log(x);


// for(let i =0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

//***************************** ***************************************************************************************
// //multi lined string
// let multiLined = `Hello,
//                     I am checking MultiLined`;
// console.log(multiLined)

// //string literal

// let name = "kinza";
// console.log(`Hello my name is ${name}`)

//***************************** ***************************************************************************************
//default parameter
// ((name, age=21)=>{
// console.log(name+" "+age);
// })("kinza")

//***************************** ***************************************************************************************
//Loops
// //For array
// let numbers = [1,2,3,44];
// for(let num of numbers){
//     console.log(num);
// }

// //For objects
// let person = {name:'kinza',age:21}
// for(let p in person){
//     console.log(person[p])
// }

//for each
// let array = [1,2,3,44];
// let person = {name:'kinza',age:21}

// array.forEach(element => {
//     console.log(element);
// });

//Error Foreach is not a function
// person.forEach(element => {
//     console.log(element);
// });


//***************************** ***************************************************************************************
//Maps

// let apples = {name:"apple"}
// let oranges = {name:"orange"}

// let fruits = new Map();

// fruits.set(apples,500);
// fruits.set(oranges,400);

// fruits.forEach((value,key)=>{
//     console.log(key);
// })

//***************************** ***************************************************************************************
//Keys 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//   console.log(x);
// }

//***************************** ***************************************************************************************
//Entries
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//  console.log(x);
// }

//***************************** ***************************************************************************************
//closure property: child func preserves the variables of parent function
function parent(){
    let count = 1;
    return function child(){
        return ++count;
    }
}

let chld = parent();
console.log(chld())
console.log(chld())
console.log(chld())
//***************************** ***************************************************************************************
//Filter
// let array = [1,2,3,4,5,6,7,8]

// // get even numbers
// array.filter(function(itm,ind,arr){
//     if(itm%2==0){
//         console.log(itm)
//     }
// })

// array.filter(function(itm,ind,arr){
//     console.log(itm*itm)
// })

//***************************** ***************************************************************************************
// //map
// let array = [1,2,3,4,5,6,7,8]

// // get even numbers
// let check =array.map(function(itm,ind,arr){
//     return itm*itm;
// })
// console.log(check) //[
//                       1,  4,  9, 16,
//                     25, 36, 49, 64
//                     ]
//filter will not return arry like this, it will return actual array


//reduce

//***************************** ***************************************************************************************
//generator
// function* gen(){
//     yield 'what is your name?'
//     let name = "kinza"
//     yield 'what is your age?'
//     yield name;
//  }
// 1
//  let mygen = gen();
//  console.log(mygen.next())

//  console.log(mygen.next())

//  console.log(mygen.next())

// use in pagination

//***************************** ***************************************************************************************
// stringify
// let person = {name:'kinza',age:21}
// let jFormat = JSON.stringify(person);
// console.log(jFormat); //{"name":"kinza","age":21}
// //parse
// let jObject = JSON.parse(jFormat);
// console.log(jObject) //{ name: 'kinza', age: 21 }

//***************************** ***************************************************************************************

//Fill
// let arr=Array(10).fill(1).map((elem,i)=>{return elem+i;})
// console.log(arr)

// fill(value)
// fill(value, start)
// fill(value, start, end)