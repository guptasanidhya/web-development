//Logging output
/*alert('hello world');
console.log("hello World");
console.error("This is an error");
console.warn("This is a warning");*/


//Variable Var let and constant
/*
let age = 30;
//let can be re-assigned,
//const cannot
age=31;
*/

//Data tpyes -String,number ,boolean, null, undefined/
/*
const name='Sanidhya'
const Age='31'
const rating =5.0;
const isCool=true;
const x = null;
const y=undefined;
let z;//undefined
//Check type
console.log(typeof z);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
*/

//STRINGS
//Concatenation
/*
let name='sanidhya'
let age=21
console.log('My name is '+name+' and i am '+age);
//Template literal better
console.log(`my name is ${name} and I am ${age}`);

//String methods & properties
const s = 'hello world';
let val;
//get length
val=s.length
console.log(val);
//change case
val=s.toUpperCase();
console.log(val);
val=s.toLowerCase();
console.log(val);
//Get sub string
val=s.substring(0,5);
val=s.substring(5,11);
console.log(val);
//split into array
val=s.split('');
console.log(val);
*/

//ARRAYs -Store multiple values in a variable
/*
const numbers = [1,2,3,4,5];
const fruits=['apples','oranges', 'pears', 'grapes'];
console.log(numbers,fruits);
//Get one value -arrays start at 0
console.log(fruits[1]);
//Add value
fruits[4]="blueberries"
//add value using push
fruits.push('strawberries');
//Add to beginning
fruits.unshift('mangos');
console.log(fruits)
fruits.pop();
console.log(fruits)
//check if array
console.log(Array.isArray(fruits));
// //Get index
console.log(fruits.indexOf('oranges'));
*/



//OBJECT LITERALS
/*
const person={
    firstName: 'Sanidhya',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'Rnt hostel',
        city:'indore',
        state:'MP'
    }
}

//Get single value
console.log(person.name);
//Get array value
console.log(person.hobbies[1]);
//Get embedded object
console.log(person.address.city);
//add property
person.email='abc@gmail.com';
console.log(person)*/
//Array of Objects
/*
const todos=[
    {
        id:1,
        text:'Take out Trash',
        isComplete: false
    },
    {
        id:2,
        text:'Eat Fish',
        isComplete: true
    },
    {
        id:3,
        text:'Eat food',
        isComplete: false
    }
];
//console.log(todos)
//get specific object value
//console.log(todos[1].text);

//Format in JSON
//console.log(JSON.stringify(todos));
*/

// LOOPS
/*
// For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While
  let i = 0
  while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
  }
  
  // Loop Through Arrays
  // For Loop
  for(let i = 0; i < todos.length; i++){
    console.log(` Todo ${i + 1}: ${todos[i].text}`);
  }
  // For...of Loop
  for(let todo of todos){
      console.log(todo.text);
  }
*/



  //HIGH ORDER ARRAY METHODS
 
/*
  //forEach()- loops through array
  todos.forEach(function(todo,i,myTodos){
      console.log(`${i+1}: ${todo.text}`);
    //   console.log(myTodos);
  });
  // map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);

  // filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });
 
  console.log(todo1)

const todocompleted = todos.filter(function(todo){
    return todo.isComplete===true;
}).map(function(todo){
    return todo.text;
});
console.log(todocompleted)
*/


//Functions
/*
function greet (greeting='hello',name){
    if(!name){
        // console.log(greeting);\\
        return greeting;
    }else {
       // console.log(`${greeting} ${name}`);
       return `${greeting} ${name}`;
    }

    }

console.log(greet("sanidhya"));
*/
// ARROW FUNCTIONS
// const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
// console.log(greet('Hi'));


//oops
//constructor function
/*
function Person(firstName,lastname,dob){
    //set obejct properties
    this.firstName=firstName;
    this.lastname=lastname;
    this.dob=new Date(dob);
    //set to actual date object using date constructor
// this.getBirthYear = function(){
//     return this.dob.getFullYear();
//    }
//   this.getFullName = function() {
//      return `${this.firstName} ${this.lastname}`
//   }
  // Get Birth Year

  //jaruri nhi ki bar baar user me aaye so prototype kardia 
  //Prototypes allow you to easily define methods to all instances of a
   //particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once,
//   but every instance of the object has access to it.
}
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastname}`
  }
// Instantiate an object from the class
const person1 = new Person('Sanidhya', 'Gupta', '7-8-80');
const person2 = new Person('nitin', 'dwivedi', '8-2-90');

console.log(person2);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

//built in constructors
const name=new String('mohini');
console.log(typeof name);
//Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'
*/



// ES6 CLASSES
/*
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
getBirthYear(){
    return this.dob.getFullYear();
}

getFullName(){
    return `${this.firstName} ${this.lastName}`
}

}
const person1 = new Person('Sanidhya', 'Gupta', '7-8-80');
const person2 = new Person('nitin', 'dwivedi', '8-2-90');
console.log(person1.getFullName());
*/

// ELEMENT SELECTORS

// Single Element Selectors
/*
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
//Multiple element selectors
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));
*/

// const items=document.querySelectorAll('.item');
// items.forEach((item) => console.log(item))

//Manipulating the DOM

/*
const ul = document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent='hello';
ul.children[1].innerText='Shanu';
ul.lastElementChild.innerHTML='<h1>Hello</h1>';
*/

// const btn = document.querySelector('.btn');
// btn.style.background='red';
// const ul = document.querySelector('.items');

//EVENTS

//MOUSE Event
/*
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').style.background = '#ccc';
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  */

//Keyboard Event

/*
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});
*/

//USER FORM SCRIPT
//PUT DOM VARIABLES INTO SCRIPT
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value===''){
        //alert('please enter all fields');
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
          // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
    }else {
        // Create new list item with user
    const li = document.createElement('li');
//add text node with input values

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
}
}