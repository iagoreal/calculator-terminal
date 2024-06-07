import readlineSync from "readline-sync"


enum Operation {
    plus = '+',
    minus = '-',
    multiply = 'x',
    divided = "/"
}


class Calculator{ 
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
    
    private addition (a: number, b:number): number{
        return a + b;
    }
    
    private subtraction (a: number, b:number): number{
        return a - b;
    }

    private multiplication (a: number, b:number): number{
        return a * b;
    }

    private division (a: number, b:number): any{
        if (a || b > 1){
            return console.log("invalid operation");
            }
        return a / b;
    }
}

const calculator = new Calculator();

function askOperation(): Operation{
    const choseOperation = readlineSync.question('Chose a mat operation')
    
    if (!isOperation(choseOperation)) {
        throw new Error("Invalid Operation");
    }
    return choseOperation as Operation;
}

function isOperation(operation: any): operation is Operation {
    return Object.values(Operation).includes(operation);
  }

function askNumber(orderNumber:string): number {
    const input = readlineSync.question(`Enter number ${orderNumber}: `);
    const number = parseFloat(input);

    if (isNaN(number)) {
        throw new Error("Please, enter a valid number.");    
    }
    return number;
}

function askContinue(): boolean {
    const response = readlineSync.question('Do you want to perform another operation? (y/n): ').toLowerCase();
    return response === 'y';
}

try {

let continueLoop = true
while (continueLoop) {
    const operation = askOperation();   
    const number1 = askNumber('1')
    const number2 = askNumber('2')

    const result = calculator.equals(operation, number1, number2);
    console.log(`The result of ${operation} operation is: ${result}`);

    continueLoop = askContinue();

    }
    console.log("Closing program");
     
}
    catch (error) {
        console.error(error)
}
