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

function isEven(num) {

}

