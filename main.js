
// Single line comment 

// multi-line comments */ ending with */

// Reserved Words
// there are words within the program that have a specific meaning. it is not made up by the developer. var tells the computer that it needs reserve some memory and an address in the computer so that the programmer can create a variable. The variable will be stored in that space or that bucket.Reserved. 
// Let is similar to var and so is const. Const can't change once data is stuffed into it. 

// BRACKETS
// var myToys = ['truck', 'doll', 'top']. The square brackets will tell the computer that we will be using an array

// functions will use ( ) and { }
// parentheses imply there will be a parameter there. the curly braces contain what will get executed when we call the function.

// ; will tell JS to executed

// PUNCTUATION
// '' - 'this is a string'
// "this is a double string"


// variables are containers that store the data that we will be using and manipulating and altering as our program executes. There are 3 different words to use to create variables. We want to create meaningful variables because we want to make it easy to know or remember what is stored in the data. For example. Use the variable myName= Anmaree. when the computer runs into var, the computer knows it needs to reserve a block of memory with an identifier (number,letter, string). We will get a memory address that gets tied to the human readable name that will then reference that memory location. The computer address would be complex, so we can just use a human readable term that we decide on to represent that memory location. With the assignment operator (=) the computer knows to assign what is after that to that variable.



// THere are different ways of defining variables. camelCase is easy to use. first letter is not capitalized. Another way is snake_case. The _ is the separator instead of the capital letter.
// There is also PascalCase, which capitalizes all first letter of every word be capitalized.

// When we are writing a program, we don't know what the memory address will be allocated, so the variable gives us a name for something we don't yet know. And sometimes we may not yet even know the assigned data yet.

// Data Types -are the various ways in which we store data. Different data is manipulated and modified in different ways that have different functions and Capabilities. 

// JS has a very limited number of datatypes
// String - let firstName = 'Anmaree' we just declared a string variable of a string data type. It's string literal, and JS will refer to as such. 


// DATA TYPE COERCION 
// in other languages we might have to identify string at the start and then it will only allow strings to be held in there. This is so programmers can't put the wrong type of variable and therefore catch some runtime errors. 

// Other school of thought is that the program should be smart enough to know what type of data type it is. Because JS is Dynamic we can change string variables numbers So ther is flexibility but consequences.  
let firstName = 'Bob'
console.log (firstName)
firstName = firstName.toUpperCase();
console.log(firstName)

// Type conversions - the programmer does not specifiy whether a data type will be transferred to another.

let firstN = "Fred"
let lastN = "Flintstone"

let FullName = (firstN) + " " + (lastN)
console.log (FullName)


// BASIC ASSIGNMENT OPERATORS
// equals sign - it is the primary instruction set to tell the computer to take whatever is on the right side and assign it to the left side. Equals sign tells computer to get ready to stuff some info into that CredentialsContainer.

// COMPOUND ASSIGNMENT OPERATORS 
// the addition assignment operator is the plus equals =+
// This can operate on strings as well as numbers 




