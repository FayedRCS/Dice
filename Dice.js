const prompt = require("prompt-sync")({sigint:true});
//user input:
const min = parseInt(prompt("enter the first value: "));
const max = parseInt(prompt("enter the second value: "));

//generating the random number using math.random 
const rand = Math.floor(Math.random() * (max - min + 1) + min);

//displaying the randomly generated number
console.log(` Random number between ${min} and ${max} is ${rand} `);




