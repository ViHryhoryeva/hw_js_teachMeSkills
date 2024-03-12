// задача 1
function getSum() {
    let limitCount = Number(prompt('Введите последнее число в сумме чисел:'));
    let sum = 0;
    for (let i = 0; i <= limitCount; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum());

// задача 2
// S = Р(1 + i*n)
let credit;
function getCredit(sumCredit) {
    credit = sumCredit * (1 + 0.17 * 5);
    return credit - sumCredit;
}
console.log(getCredit(50000));

// задача 3
function trimString(str, valueFrom, valueTo) {
    str = prompt('Введите фразу:');
    valueFrom = prompt('Введите значение ОТ:');
    valueTo = prompt('Введите значение ПО:');
    let result = str.slice(valueFrom, valueTo);
    return result;
}
console.log(trimString());

// задача 4
let num = Number(prompt('Введите число для вычисления суммы чисел:'));
function getSumNumbers(number) {
    let sum = 0;
    num = number;
    let x = '' + number;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;   
}
console.log(getSumNumbers(num));

// задача 5
function getSum2(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum2(-1, 6));

// задача 6
function foo() {
    console.log('foo');
}
function boo() {
    console.log('boo');
}
function fooBoo(bool, foo, boo) {
    bool === true ? foo() : boo();
}
fooBoo(false, foo, boo);

// задача 7
function isTriangle(a, b, c) {
    if ((a + b >= c) && (a + c >= b) && (b + c >= a)) {
        return true;
    } else {
        return false;
    }
}
console.log(isTriangle(4, 5, 10));

// задача 8
function breakChocolate(n, m) {
 if ( n === m === 1 || n <= 0 || m <= 0) {
    return 0;
 } else {
    return (n - 1) + (m - 1);
 } 
}
console.log(breakChocolate(2, 1));