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

function isVowel(x) {

    var result;

    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U"
            x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}