// Практика

// задача 1
let x = 2;
let y = 4;
let z = 3;

console.log(x + y + z);
console.log(z - x);
console.log(x * y);
console.log(z ** y);
console.log(y % x);

// задача 2
let someString = prompt('Напишите что нибудь') ?? 'Default string';
console.log(someString);

// задача 3
console.log('' + 1 + 0); //10
console.log('' - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / '3'); //2
console.log('2' * '3'); //6
console.log(4 + 5 + 'px'); //9px
console.log('$' + 4 + 5); //$45
console.log('4' - 2); //2
console.log('4px' - 2); //NaN
console.log(' -9 ' + 5); //-95
console.log(' -9 ' - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(' \t \n' - 2); //-2

// задача 4
let n = prompt('Введите любое число:');
if (isNaN(n)) {
    alert('Ошибка, введено не число');
} else if (n % 2 === 0) {
    console.log('Число n четное');
} else if (n % 2 !== 0) {
    console.log('Число n нечетное')
}

// задача 5
let a = 15;
let b = -8;
let c = 25;

if (a > b) {
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
} 

// задача 6
let i = 0;
while (i < 10) {
    let pow = i ** 2;
    console.log(pow);
    i++;
}

// задача 7
let num = 20;
let sum = 0;

for (let i = 0; i <= num; i++) {
    if (i % 5 === 0) {
        console.log('Пропуск:' + i)
        continue;
    } else {
        sum = sum + i;
    }
    if (sum > 15) {
        console.log('Выход: ' + i);
        break;
    }
}
console.log(sum);

// задача 8
let number = Number(prompt('Введите число:'));

do {
    if (number > 100) {
        console.log(number);
    } else {
        number = Number(prompt('Введите число > 100'));
    }
} while (number <= 100 && number);
console.log(number);