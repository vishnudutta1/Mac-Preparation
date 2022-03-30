// question 1

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();

//   question 2


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }


//   question 3


// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());


//   question 4

// var a = +true;
// var b = !'Lydia';

// console.log(a,b)


//   question 5

// const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };

//   console.log(mouse[bird.size])
 
//   console.log( mouse[bird["size"]])


//   question 6

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// //   question 7

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);


// //   question 8


// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//     }
//   }
  
//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange'));


// //   question 9

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);


// explanation:It logs the object, because we just created
//  an empty object on the global object! When we mistyped 
//  greeting as greetign, the JS interpreter actually saw 
//  this as global.greetign = {} (or window.greetign = {}
//      in a browser).

// In order to avoid this, we can use "use strict". 
// This makes sure that you have declared a variable
//  before setting it equal to anything.

//   question 10

// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';

//   console.log( bark.animal )


// //   question 11

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());

// question 12

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);

// explanation : For sarah, we didn't use the new keyword.
//  When using new, this refers to the new empty object we
//   create. However, if you don't add new, this refers to 
//    the global object!
// We said that this.firstName equals "Sarah" 
// and this.lastName equals "Smith". What we actually did,
//  is defining global.firstName = 'Sarah' and 
//  global.lastName = 'Smith'. sarah itself is left undefined,
//   since we don't return a value from the Person function.

// question 13

// 4. All object have prototypes.
// A: true
// B: false

// explanation :all objects have prototypes, except for the
//  base object. The base object is the object created by
//   the user, or an object that is created using the new
//    keyword. The base object has access to some methods
//     and properties, such as .toString. This is the reason
//      why you can use built-in JavaScript methods! All of
// such methods are available on the prototype. 
// Although JavaScript can't find it directly on your
//  object, it goes down the prototype chain and 
//  finds it there, which makes it accessible for you.

// question 14

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


// // question 15

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }

//   getPersonInfo()
  




// // question 16

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }


  
//   const person = 'Lydia';
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`;

// explanation :If you use tagged template literals,
//  the value of the first argument is always an array of 
//  the string values. The remaining arguments get the
//   values of the passed expressions!

// question 17

// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });

//   explanation :When testing equality, primitives are 
//   compared by their value, while objects are compared by 
//   their reference. JavaScript checks if the objects have 
//   a reference to the same location in memory.

//   The two objects that we are comparing don't have that: 
//   the object we passed as a parameter refers to a 
//   different location in memory than the object we used 
//   in order to check equality.
  
//   This is why both { age: 18 } === { age: 18 } and 
//   { age: 18 } == { age: 18 } return false.
  
  
// question 18

// const carOne = {
//     color: 'blue',
//     status: {
//       running: true,
//       passengers: 4,
//       wiperFluid: 'empty'
//     },
//     age: 5,
//     miles: 50000,
//     value: '8000'
//   }
  
//   const carTwo = {
//     color: 'green',
//     status: {
//       running: 'yes',
//       passengers: 2,
//       fuelTank: 'empty'
//     },
//     value: 9000
//   }
  
//   const combinedCar = {
//   ...carOne,
//   ...carTwo
//   }
  
//   console.log(combinedCar);



// // question 19

// let arr = [1,2,3,4,5];
// let arr2 = [4,6,7,8];

// console.log(...arr,...arr2)


// question 20


// function getAge(...args) {
//     console.log(typeof args);
//   }
  
//   getAge(21);

// question 20


// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }
  
//   getAge();

// explanation:
// With "use strict", you can make sure that you don't 
// accidentally declare global variables. We never declared 
// the variable age, and since we use "use strict", it will
//  throw a reference error. If we didn't use "use strict",
//   it would have worked, since the property age would
//    have gotten added to the global object.



// question 21


// const sum = eval('10*10+5');
// console.log(sum)

// explanation :eval evaluates codes that's passed as a 
// string. If it's an expression, like in this case, it 
// evaluates the expression. The expression is 10 * 10 + 5.
//  This returns the number 105.



// question 22

// How long is cool_secret accessible?

// sessionStorage.setItem('cool_secret', 123);

// explanation : The data stored in sessionStorage is 
// removed after closing the tab.

// If you used localStorage, the data would've been there 
// forever, unless for example localStorage.clear() is 
// invoked.


// // question 23

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);



// question 24

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

//question 25

// console.log(NaN===NaN)

//question 26

// var arr = ['1','2','3']



// console.log(str.indexOf(1))


// //question 27


// let randomValue = { name: "Lydia" }
// randomValue = 23

// if (!typeof randomValue === "string") {
// 	console.log("It's not a string!")
// } else {
// 	console.log("Yay it's a string!")
// }

//console.log(!"")

//console.log(!0)

// console.log(!0)

// console.log(!1)



// console.log(!5)

// console.log(!8)


 //question 28

// var count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach(num => {
// 	if (!num){
//         count += 1

        
//     } 
    
// })

// console.log(count)


 //question 29

// const person = {
//     name: "Lydia Hallie",
//     age: 21
//   }
  
//   console.log(Object.keys(person) )

 //question 30

// let a;
// a=10;
// console.log(a)

// const a = 0
// a=10;
// console.log(a)

