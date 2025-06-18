/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/


const banner = (exerciseNumber) => {
    console.log("================================================");
    console.log("============== " +  "Exercise number" + exerciseNumber + " ================");
    console.log("================================================");
}

banner(1);



const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


const maxOfNumbers = function(num1, num2){
    const max = num1 > num2 ? num1 : num2;
    return max;
  }
  
console.log('Exercise 1b Result:', maxOfNumbers(3, 9));
  
  
  
banner(2);


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}


console.log('Exercise 2 Result:', isAdult(21));




const isAdult2 = function(age) {
    const result = age >= 18 ? 'Adult' : 'Minor';
    return result;
  }
  
  console.log('Exercise 2b Result:', isAdult(11));
  





console.log("");


banner(3);

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel = (char) => {
//added this in case user inputs "A" or "E" or "I" or "O" or "U"
    char = char.toLowerCase();
    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}


console.log('Exercise 3 Result:', isCharAVowel("a"));

banner(4);
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return (`${name}@${domain}`);
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

banner(5);

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
    return (`Good ${timeOfDay}, ${name}!`);
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

banner(6);
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

banner(7);
/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount * tipPercentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

banner(8);
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale) => {
    if (scale === "C") {
        return (temperature * 9/5) + 32;
    } else {
        return (temperature - 32) * 5/9;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

console.log("");
banner(9);
/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        return num1 / num2;
    }
    else {
        return "please enter a valid operation: add, substract, multiply or divide";
    }
}   

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));



const basicCalculator2 = function(num1, num2, op) {
    if (op.toLowerCase() === 'add') {
      return num1 + num2;
    } else if (op.toLowerCase() === 'subtract') {
      return num1 - num2;
    } else if (op.toLowerCase() === 'divide') {
      return num1 / num2;
    } else if (op.toLowerCase() === 'multiply') {
      return num1 * num2;
    }
  }
  
  console.log('Exercise 9b Result:', basicCalculator(10, 5, "subtract"));
  


  banner(10);


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
    if (score <= 60) {
        return "F";
    } else if (score <= 70) {
        return "D";
    } else if (score <= 80) {
        return "C";
    } else if (score <= 90) {
        return "B";
    } else if (score <= 100) {
        return "A";
    }else {
        return "please enter a valid score between 0 and 100";
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


banner(11);


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) => {
    return (firstName.slice(0, 3) + lastName.slice(0, 3) + (firstName.length + lastName.length));
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


banner(12);



/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));


