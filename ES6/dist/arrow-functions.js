'use strict';

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var log = function log() {
    return console.log('Logging');
};

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

var getPerson = function getPerson() {
    return { name: 'John' };
};

//(() => console.log('IIFE'))();

// console.log(add(2, 7));
// console.log(square(4));
// console.log(giveMeAnswer());
// log();
// console.log(multiply(3, 7));
// console.log(getPerson());


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

// console.log(sum);
// console.log(squared);


var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello, my name is ' + _this.name);
            console.log('"this" is ', _this);
        }, 2000);
    }
};

person.greet();

// Со стрелочными функциями нельзя использовать следующие функции:
// new
var Task = function Task() {
    return console.log('Creating a task');
};

var task = new Task();

// other
Task.bind();
Task.call();
Task.apply();