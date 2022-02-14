// let a = 1;

// let b = 2;

// [a,b] = [b,a]

// console.log(a,b)



// problem2
// // SyntaxError
// const name
// name = 'masai'
// console.log(name)


// problem 3

// The Object.create() method creates a new object,
//  using an existing object as the prototype of the newly created object.


// problem 4
// const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();



// problem 5

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   Dog.prototype.bark = function() {
//     console.log(`Woof I am ${this.name}`);
//   };
  
//   const pet = new Dog('Mara');
  
//   pet.bark();
  
//   delete Dog.prototype.bark;
  
//   pet.bark();