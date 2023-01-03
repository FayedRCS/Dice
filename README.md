# Dice 
## Write a dice Script that rolls a dice between 1-6 randomly

Can do this in Javascript: In javascript it may look like this:
    //user input:
    const min = parseInt(promt("enter the first value: "));
    const max = parseInt(promt("enter the second value: "));
    
    //generating the random number using math.random 
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    
    //displaying the randomly generated number
    console.log(' Random number between ${min} and ${max} is ${rand}');
    
