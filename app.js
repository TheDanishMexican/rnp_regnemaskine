"use strict";

const arr = stringToArray('1 2 3 + - *');

function stringToArray(string) {
    const arr = string.split(' ');

    return convertStringToNumber(arr);
}

function whichType(arr) {
    arr.forEach(element => {
        console.log(`element: ${element} is type: ${typeof element}`);
    });
}

function convertStringToNumber(arr) {
    const newArr = [];

    arr.forEach(element => {
        if (isNaN(Number(element))) {
            newArr.push(element);
        } else {
            newArr.push(Number(element));
        }
    });

    return newArr;
}

function doStuff(arr) {
    const calcStack = [];

    while (arr.length > 0) {
        let element = arr.pop();
        if (typeof element === 'number') {
            calcStack.push(element);
        } else {
            switch (element) {
                case '+':
                    const a = calcStack.pop();
                    const b = calcStack.pop();
                    const result = a + b;
                    calcStack.push(result);
                    break;
                case '-':

                    break;
                case '*':

                    break;

                default:
                    break;
            } arr.pop();
        }
    }
    return calcStack;
}