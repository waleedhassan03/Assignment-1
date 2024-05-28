//1.......................... Miles-to-Kilometers Converter (Operators)......................................
//• Create a variable named miles and assign a numeric value representing distance in miles.
//• Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
//• Store the converted distance in kilometers in a variable named kilometers.
//• Use console.log to print a message in the following format: 
//The distance of 130 miles is equal to 209.2142 kms
const miles = 130;
const conversionFactor = 1.60934;
const kilometers = miles * conversionFactor;
console.log(`This distance of 130 miles is equal to ${kilometers} kms`);
//2.....................................Evaluating a number game............................................
//• Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less than the dynamic number value.
//creating dynamic value with Math.random between 1 & 5
import inquirer from "inquirer";
let dynamicNum = Math.floor(Math.random() * 5 + 1);
let question = await inquirer.prompt([
    {
        name: "num",
        type: "input",
        message: "Enter your number between 1 and 5 : "
    }
]);
if (dynamicNum > question.num) {
    console.log(`dynamic number ${dynamicNum} is greater than your number ${question.num}`);
}
else if (dynamicNum < question.num) {
    console.log(`dynamic number ${dynamicNum} is less than your number ${question.num}`);
}
else {
    console.log(`dynamic number ${dynamicNum} is equal to your number ${question.num}`);
}
//............................................. Friend checker game............................................
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default response.
// let myFriends = ["Hamza Alvi", "Ameen Alam", "Zia Khan", "Waleed hassan", "Imran khan"];
let findFriends = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter a name: "
    }
]);
let enteredName = findFriends.name;
//switch statement will check each name from the friends lists and if matched it will print it as a known friend
switch (enteredName) {
    case "Hamza Alvi":
    case "Ameen Alam":
    case "Zia Khan":
    case "Waleed Hassan":
    case "Imran khan":
        console.log(`Hello! My dear friend ${enteredName}`);
        break;
    default: //if friend's name not matched from switch statement and myfriend array than the  default will run and print the message in the console
        console.log("Sorry! He is not in your known friends");
}
// 4..........................................Functions.................................................
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.
let num1 = 10;
let num2 = 20;
function addition(a, b) {
    return a + b;
}
//Call a function with these variables as arguments and output the result using console.log.
console.log("Calling function with variables: ", addition(num1, num2));
//Create a second call to the function with two more numbers as arguments.
let num3 = 30;
let num4 = 40;
console.log("Calling function with new variables: ", addition(num3, num4));
// 5.................................Calculator project using function.....................................
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.
let value1 = 20;
let value2 = 50;
let operatorVal = "+";
//function with two variables and operator as parameters
function Calculator(a, b, myopr) {
    if (myopr === "+") {
        return a + b;
    }
    else if (myopr === "-") {
        return a - b;
    }
    else {
        console.log("Invalid operator");
    }
}
console.log("Calling function with variables and operators: ", Calculator(value1, value2, operatorVal));
// Update the operator value
operatorVal = "-";
//call the function again with the updated arguments.
console.log("calling the function again with updated operator: ", Calculator(value1, value2, operatorVal));
// 6........................................Anonymous functions...........................................
// • Assign a function expression to a variable, with one parameter that outputs the provided argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.
//Anonymous Function: we use Anonymous function by using variable . Its the syntax of anonymous function
let anonymousFunction = function (mymessage) {
    console.log(mymessage);
};
//calling the function
anonymousFunction("This is Anonymous Function");
// Normal Function 
function normalFunction(myMessage) {
    console.log(myMessage);
}
//calling the function
normalFunction("This is Normal Function");
