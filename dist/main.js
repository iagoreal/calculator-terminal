"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var Operation;
(function (Operation) {
    Operation["plus"] = "+";
    Operation["minus"] = "-";
    Operation["multiply"] = "x";
    Operation["divided"] = "/";
})(Operation || (Operation = {}));
class Calculator {
    equals(operation, a, b) {
        switch (operation) {
            case Operation.plus:
                return this.addition(a, b);
            case Operation.minus:
                return this.subtraction(a, b);
            case Operation.multiply:
                return this.multiplication(a, b);
            case Operation.divided:
                return this.division(a, b);
        }
    }
    addition(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }
    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        if (a || b > 1) {
            return console.log("invalid operation");
        }
        return a / b;
    }
}
const calculator = new Calculator();
function askOperation() {
    const choseOperation = readline_sync_1.default.question('Chose a mat operation');
    if (!isOperation(choseOperation)) {
        throw new Error("Invalid Operation");
    }
    return choseOperation;
}
function isOperation(operation) {
    return Object.values(Operation).includes(operation);
}
function askNumber(orderNumber) {
    const input = readline_sync_1.default.question(`Enter number ${orderNumber}: `);
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error("Please, enter a valid number.");
    }
    return number;
}
function askContinue() {
    const response = readline_sync_1.default.question('Do you want to perform another operation? (y/n): ').toLowerCase();
    return response === 'y';
}
try {
    let continueLoop = true;
    while (continueLoop) {
        const operation = askOperation();
        const number1 = askNumber('1');
        const number2 = askNumber('2');
        const result = calculator.equals(operation, number1, number2);
        console.log(`The result of ${operation} operation is: ${result}`);
        continueLoop = askContinue();
    }
    console.log("Closing program");
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=main.js.map