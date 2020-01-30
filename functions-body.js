// Function Body - everything contained within the curly Braces 
// We can execute multiple statements or lines of code that are terminated by a semicolon. We can execute multiplie statements within the function body, as many as we want, and we know those statements execute within the function in the order that we have them laid out .

function funAddition(One, Two, Three) {
    let sum = One + Two + Three
    console.log(sum)
}
funAddition(3, 6, 9)

// In this example, with have the addition of all three of these numbers and then we store it inside of the sum, which is a variable inside the function. and then we do a console.log, which then sends the value held within sum, that memory, that bucket. And then that value is then pulled out of the bucket and logged to our console.

// inside our function body, we can create as many variables as we need to in order to do the work that is required for the function. 
// A function body creates its own Scope . Meaning that within a certain block of Code variables live and die within that scope . So if we did a console .log (sum) before and after the function, we would get an error. See below.


// console.log(sum) 
// Console output
// functions-body.js:16 Uncaught ReferenceError: sum is not defined
//     at functions-body.js:16

// function funAddition(One, Two, Three) {
//     let sum = One + Two + Three
//     console.log(sum)
// }
// funAddition(3, 6, 9)
// console.log(sum)
// Console output:
// functions-body.js:26 Uncaught ReferenceError: sum is not defined
//     at functions-body.js:26

// sum is only defined within the function, or within the scope
// The same will happen if we create another variable inside the function:

function funAddition(One, Two, Three) {
    let sum = One + Two + Three
    let sumDoubled = sum * 2
    console.log(sum)
    console.log(sumDoubled)
}
funAddition(3, 6, 9)
// console.log(sumDoubled)
// console shows:

// functions-body.js:37 18
// functions-body.js:38 36
//  which is correct because we console.logged  both (sum) and (sumDoubled)inside the function, but here is what happens when we console.log(sumDoubled) outside the function.

// Console showed:
// functions-body.js:41 Uncaught ReferenceError: sumDoubled is not defined
//     at functions-body.js:41

// all the variables and anything you do in the function body is specific to the function as it executes.
// That is not to say that variables created outside of the function are actually created inside of the global scope or inside the scope of this script being executed or inside of a browser window.

// because the variable below is at the same level in the same scope as this function, we can get to it inside of our function body. Anthing defined outside the function at the same level, we can still see it inside the function body, but anythig created inside the function can only be accessed inside the function body.

// let canSeeInsideFunction = 2;

// function Addition(nbr1, nbr2, nbr3) {
//     let sum = nbr1 + nbr2 + nbr3
//     let sumDouble = sum * canSeeInsideFunction
//     console.log(sum)
//     console.log(sumDouble)
// }
// Addition(3, 6, 9)

// // Console showed:
// // functions-body.js:62 18
// // functions-body.js:63 36
// // So our let variable outside the function worked inside the function.


// // Function Returns: the values that are returned as a result of a function doing what it does.

// // Purpose of a function. A function itself should be a block of code that focuses on just one thing, and does it well. on thing that needs to be accomplished within our application. It can be hard to determine what "one thing" means. But don't over-complicate functions. Make sure that anything that you are doing in that function relates to accomplishing one task and that each of the tasks that are within that function couldn't be broken into functions of there own that couldn't be broken out into functions of their own with code that could be used in other locations within your application.
// // avoid repetition.

// // JS expects that function returns something to the caller. Printing to the console is pretty pointless. So we are going to change the function above and do something to make the function return something.

// // let canSeeInsideFunction = 2;

// function Addition(nbr1, nbr2, nbr3) {
//     let sum = nbr1 + nbr2 + nbr3
//     // let sumDouble = sum * canSeeInsideFunction
//     // console.log(sum)
//     // console.log(sumDouble)
// }
// console.log(Addition(3, 6, 9));
// // note above that we have put the calling of our function inside a console log. Since JS always want to return something to the caller (console.log function is the caller in this case), JS will return something for us. Here is what we get in the console. 
// // functions-body.js:88 undefined 
// // here is another example

// function Addition(nbr1, nbr2, nbr3) {
//     let sum = nbr1 + nbr2 + nbr3
// }

// let results = Addition(3, 6, 9);
// console.log(results);
// This is what shows in the console
// functions-body.js:98 undefined

// that happens because when Addition is called, we're passing in the values--it's performing its task, but we are not returning anything to the caller.

// so now let's return something using the keyword return. That way JS won't have to return something undefined.

function Addition(nbr1, nbr2, nbr3) {
    let sum = nbr1 + nbr2 + nbr3
    return sum;
}

let results = Addition(3, 6, 9);
console.log(results);

// console showed:
// functions-body.js:112 18
// now note that we can call this as many times as we want and change the values within the parens
// let results = Addition(1, 5, 2);
// console.log(results);
// let results = Addition(3, 6, 8);
// console.log(results);
// let results = Addition(1, 2, 3);
// console.log(results);

// console shows:

// functions-body.js:117 Uncaught SyntaxError: Identifier 'results' has already been declared

// This is because our Addition method (function) is designed to do one thing,to add  these numbers and return the value to us let sum = nbr1 + nbr2 + nbr3.
// Because we have already define the results variable using let. So we can just use tht results bucket and override the values until we get to the last one . So a function can be used many times with different inputs and providing different outputs and those outputs can be used in other ways to accomplish something.
   

results = Addition(1, 5, 2);
console.log(results);
results = Addition(3, 6, 8);
console.log(results);
results = Addition(1, 2, 3);
console.log(results);

// console now shows:
// functions-body.js:131 8
// functions-body.js:133 17
// functions-body.js:135 6