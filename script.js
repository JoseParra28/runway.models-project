// 'use strict';

// const numb1 = 23;
// const numb2 = 15;
// 2

// if (23 < 15){
//     const str = '23 is bigger'
//     console.log("i did it!")
// } else {
//     console.log('yo')
// }
//  const age = 18;
//  age >= 18 ? console.log('i can drink wine'):
//  console.log('I like to drink ${');

//  let hasDriversLicence = false;
//  const passTest = true;

//  function logger(){
//     console.log('My nam is Jose');
//  }
//  logger ();
//  logger();
//  logger();

//  function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
//  }

//  const appleJuice = fruitProcessor (5, 1);
//  console.log (appleJuice)

//  function tartRecipe(flour, butter, sugar, apples){
//  const recipe = `${flour}g of flour ${butter}g butter ${sugar}g sugar and ${apples} apples`;
//  return recipe;
//  }
//  const ingredients = tartRecipe (200,300,150,5);
//  console.log(ingredients) 

//  function exersices(lunges, bicepcurl, burphies){
//  const exersiceProgram = `${lunges} lunges within 2 minutes ${bicepcurl} bicepcurls within 1.50 mins ${burphies} burphies for 3 minutes`;
//  return exersiceProgram;
// }
//  const toDo = exersices(400,550,3000);
//  console.log(toDo)

// function cal1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = cal1(1991);
// console.log(age1)

// const cal2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const cal3 = birthYear => 2037 - birthYear;
// const age3 = cal3 (1991);
// console.log(age3);

// const retirement = birthYear => {
//      const age = 2037 - birthYear;
//      const retirementYear = 65 - age;
//      const fname = `Jose retires in ${retirementYear} years`;
//      return retirementYear && fname;
//     }
// console.log (retirement(1991));
function greet(name,lastName){
    console.dir('hello' + name)
};
greet('john');

const friend1 = 'michael';
const friend2 = 'jose';
const friend3 = 'peter';

const friends = ['michel', 'jose', 'peter']
console.log(friends[0])
console.log(friends[2])
console.log(friends.length - 1);

friends[1] = 'jay'
console.log(friends)

const firstName = 'jose';
const jose = [firstName, 'parra' , 2022 - 1993, 'coder', friends];
console.log(jose)