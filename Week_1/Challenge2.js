/*
Write a function redundant that takes in a string 'str' and returns a function that returns 'str'. 

Note: Your function should return a 'function', not a string. 
*/

function returnFunc(str) {
    return () => {return str};
}