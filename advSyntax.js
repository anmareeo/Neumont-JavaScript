
// Named functions are the most common kind of function. We use the function keyword to store the function parameters and  in prep to be invoked later on when we need the code. It wraps code that we might re-use or copy. Functions are just a package of code for code re-use.
// so we give the function a name which we can then recall and execute when MSMediaKeyNeededEvent. Then we have the parameter list where we take in data that our function needs to operate or data that we will be using to create some kind of result we needs. And then we have our function body. Inside the function body is the statement/what we want the function to do. in the case below we want to add the nS/s . That line below between the curly brackets is the statement ( let add = Ns1 + Ns2 + Ns3 ). Then we want to return the results with the keyword return, which tells the engine that once we are done executing all the statements in order then we can return the sum to the ChannelSplitterNode.

function addNs (Ns1, Ns2, Ns3) {
 let add = Ns1 + Ns2 + Ns3 
 return add;
}
let total = addNs(1,2,3)
console.log(total)

// Console log shows:
// advSyntax.js:10 6


// ANONYMOUS FUNCTIONS
// a function that does not have a name

// function () {

// }
// There is not much use for this. Where we end up seeing these is in a function expression in Java script.
// We will see them when we are defining methods on objects, but also on a function expression.

// instead we are taking a variable
let myFunction = function(yourName){
    return "Hello, your name is " + yourName;
}
let sayIt =myFunction("Anmaree");
console.log (sayIt);

// console shows
// advSyntax.js:30 Hello, your name is Anmaree