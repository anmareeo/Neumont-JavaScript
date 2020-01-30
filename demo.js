


// function is a keyword, and in order to use it in our application repetitively, we need to give it a name. After the function name, there should always be parentheses. Inside the curly braces is the body of the function. The code that tells wheat the function needs to do
console.log("This is before the function definition...")


function sayYourName() {
    console.log('sayYourName has spoken.')
}

console.log("This is after the function definition...")
// function is a reserved word that tells the interpreter to set up some memory. The name helps us call it. the () allows us to send info into a function for use in the function body, which is what is in the curly brackets. Nothing happens to a function until it actually gets called. The first and last console logs show in the console, but not the one inside the function. We are just prepping the function first.
// Functions primarily provide us a way to solve issue when it comes to repetition in our code. We can wrap repetitive code inside of a function and then recall that function and execute that code each time we need it without having to write the code multiple times.

// to call the function, see below. the parentheses tell it to execute the function that has this name, and then executes it. It runs everything inside the {}. We can keep executing the code as many times as we want.
sayYourName();
sayYourName();
sayYourName();



function sayYourName() {
    console.log('Statement 1 excecuted.');
    console.log('Statement 2 excecuted.');
    console.log('Statement 3 excecuted.');
    console.log('Statement 4 excecuted.');
}


// When we executed the function, the console log was run. we can have as many statements as we want inside the body.
// Here is what printed in the console:


// demo.js:24 Statement 1 excecuted.
// demo.js:25 Statement 2 excecuted.
// demo.js:26 Statement 3 excecuted.
// demo.js:27 Statement 4 excecuted.
// demo.js:24 Statement 1 excecuted.
// demo.js:25 Statement 2 excecuted.
// demo.js:26 Statement 3 excecuted.
// demo.js:27 Statement 4 excecuted.
// demo.js:24 Statement 1 excecuted.
// demo.js:25 Statement 2 excecuted.
// demo.js:26 Statement 3 excecuted.
// demo.js:27 Statement 4 excecuted.

// notice that it repeated them in order three times because we called the functions three times above the functions. inside a function, statements are executed in order, functions encapsulate repetetive code that we can call over and over again to help us get things done.


// ARGUMENTS - the data that we have defined a function needs in order to execute. The values sent into the function before it is returned to the caller.

// We need to decide if the function needs something in order to perform the task we need it to do. that is where the parens come in. the way the function is below, it does not need anything in the parens. the only task it has is to console log a string of text that we statically created. It's also not a useful function. It does not do anything cool. It's just an example to show basic syntax.

console.log("This is before the function definition...")


function sayYourName() {
    console.log('Statement 1 is executed.')
}

console.log("This is after the function definition...")

sayYourName();

// the console showed:  Statement 1 is executed.

// now we want the function to bring up the name of the person calling the functionm so we need to pass a parement into the parens. We will create a new variable called yourName

function sayName(yourName) {
    console.log('Hello ' + yourName + ', how are you feeling?')
}


sayName();
// Here is what the console showed:
// demo.js:71 Hello undefined, how are you feeling?
// note that it says undefined instead of yourName. that is because yourName acts as a variable inside this function

// We can fix it by passing in a string --a name when we call the function, like so:

function sayAName(aName) {
    console.log('Hello ' + aName + ', how are you feeling?')
}


sayAName('Anmaree');

// this is what is consoled
// demo.js:83 Hello Anmaree, how are you feeling?
// so we can put in a string  as a value of the variable that we call aName. the variable aName is used as a place holder, because we may not know yet what the name is. 

// here is another way to do it. See below i have created a new variable using let.And then when we call the sayName function, we put in our new variable,and it should console the same thing.

function sayName(Name) {
    console.log('Hello ' + Name + ', how are you feeling?')
    console.log('Hello ' + Name + ', you are awesome.')
}

let myName = 'Anmaree'
sayName(myName);

// This is what showed up in the console. 
// demo.js:96 Hello Anmaree, how are you feeling? Then we added that second sentence, and this showed up in the console.

// demo.js:97 Hello Anmaree, you are awesome.
// so notice how the variable of myName at the end overode the variable passed in at the top. it's a place holder. We could also create a variable called name and it would just do the same thing.

// let's build a function that has repeatable behavior that we can use over and over again to accomplish a task. We can have that do the task for us.

// Use commas to create three separate VREyeParameters. Nothing will happen here until we call the function. See below.

function funkyAddition(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree
    console.log(sum)
}
funkyAddition()
// Here is what the console brought up, because we did not define the variables, so when we tried to add a bunch of undefineds, the computer knows the + means math, so it tells us it's not a number. See below.
// demo.js:115 NaN

// Now lets provide values and see what happens.

function funkyAdd(nOne, nTwo, nThree) {
    let sum = nOne + nTwo + nThree
    console.log(sum)
}
funkyAdd(3, 6, 9)
// This is what shows up in the console now.
// demo.js:125 18