// Практика
// Задача 1
function welcome(nameUser) {
    nameUser = prompt('Введите ваше имя:');
    console.log('Привет, ' + nameUser + '!');
}
welcome();

// задача 2
// внешние(глобальные) переменные:
let x = 2;
let y = 5;
let z = 7;
function getSum1() {
    sum = x + y + z;
    console.log(sum);
}
getSum1();

// локальные переменные:
function getSum2() {
    let x = 4;
    let y = 8;
    let z = 35;
    sum = x + y + z;
    console.log(sum);
}
getSum2();

// аргументы:
function getSum3(x, y, z) {
    sum = x + y + z;
    console.log(sum);
}
getSum3(1, 2, 3);

// результат возвращает
function getSum4(x, y, z) {
    sum = x + y + z;
    return sum;
}
console.log(getSum4(10, 2, 5));

// задача 3
function isEven() {
    let n = Number(prompt('Введите число:'));
    console.log(n);
    if (isNaN(n)) {
        console.log('Ошибка, введено не число!');
    } else if (n % 2 === 0) {
        return true;
    } else if (n % 2 !== 0) {
        return false;
    }
}
console.log(isEven());