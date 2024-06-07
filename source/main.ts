import readlineSync from "readline-sync";

enum Operation {
    plus = '+',
    minus = '-',
    multiply = 'x',
    divided = "/"
}

class Calculator { 
    equals(operation: Operation, a: number, b: number): any {
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
    
    private addition(a: number, b: number): number {
        return a + b;
    }
    
    private subtraction(a: number, b: number): number {
        return a - b;
    }

    private multiplication(a: number, b: number): number {
        return a * b;
    }

    private division(a: number, b: number): any {
        if (a == 0 || b == 0) {
            throw new Error("Invalid operation");
        }
        return a / b;
    }
}

const calculator = new Calculator();    

function askOperation(): Operation | null {
    const choseOperation = readlineSync.question(`Choose a math operation (Ex: +, -, x or /): `);
    
    if (!isOperation(choseOperation)) {
        return null;
    }
    return choseOperation as Operation;
}

function isOperation(operation: any): operation is Operation {
    return Object.values(Operation).includes(operation);
}

function askNumber(orderNumber: string): number | null{
    const input = readlineSync.question(`Enter the ${orderNumber}º term: `);
    const number = parseFloat(input);

    if (isNaN(number)) {
        return null
    }
    return number;
}

function askContinue(): boolean {
    const response = readlineSync.question('Do you want to perform another operation? (y/n): ').toLowerCase();
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
        } catch (error) {
            console.log("not exist division by 0");
        }

        continueLoop = askContinue();
        console.clear();
    }
    console.log("Closing program");
    console.clear(); 
} catch (error) {
    console.error(error);
}