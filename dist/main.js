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
        if (a == 0 || b == 0) {
            throw new Error("Invalid operation");
        }
        return a / b;
    }
}
const calculator = new Calculator();
function askOperation() {
    const choseOperation = readline_sync_1.default.question(`Choose a math operation (Ex: +, -, x or /): `);
    if (!isOperation(choseOperation)) {
        return null;
    }
    return choseOperation;
}
function isOperation(operation) {
    return Object.values(Operation).includes(operation);
}
function askNumber(orderNumber) {
    const input = readline_sync_1.default.question(`Enter the ${orderNumber}º term: `);
    const number = parseFloat(input);
    if (isNaN(number)) {
        return null;
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
        if (operation === null) {
            console.log("Invalid operation. Please try again.");
            continue;
        }
        const number1 = askNumber('1');
        const number2 = askNumber('2');
        if (number1 === null || number2 === null) {
            console.log("Invalid number. Please try again.");
            continue;
        }
        try {
            const result = calculator.equals(operation, number1, number2);
            console.log(`The result of ${operation} operation is: ${result}`);
        }
        catch (error) {
            console.log("not exist division by 0");
        }
        continueLoop = askContinue();
        console.clear();
    }
    console.log("Closing program");
    console.clear();
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=main.js.map