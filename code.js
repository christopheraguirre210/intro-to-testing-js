// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input !== 'string' || input.length === 0){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(num){
    return parseFloat(num) === 'number' || parseFloat(num) === 5;
}

function isEven(number) {
    return number % 2 === 0;
}

function isVowel(value) {
    return (value == "A" || value == "a"
        || value == "E" || value == "e"
        || value == "I" || value == "i"
        || value == "O" || value == "o"
        || value == "U" || value == "u");
}

function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}