// Практика
// Задача 1

const rgb = (red, green, blue) => {
    red = Number(prompt('Ввевиде число от 0 до 256'));
    green = Number(prompt('Ввевиде число от 0 до 256'));
    blue = Number(prompt('Ввевиде число от 0 до 256'));
    if (red === undefined || green === undefined || blue === undefined) {
        return 0;
    }
    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(rgb());

// Задача 2
// function ask(question, yes, no) {
//     if (confirm(question)) {
//     yes()
//     } else {
//     no()
//     }
// }
// const ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}
ask('Вы согласны?',
    function() { alert('Вы согласились.') },
    function() { alert('Вы отменили выполнение.') }
    )

// Задача 3
const confirmPassword = (password, runSuccess, runError) => {
    let passwordTwo = prompt('Введите свой пароль:');
    if (password === passwordTwo) {
        return runSuccess();
    } else {
        return runError();
    }
}
const runSuccess = () => {
    return alert('Пароль успешно подтвержден');
}
const runError = () => {
    return alert('Пароль не совпадает');
}
confirmPassword('123', runSuccess, runError);

// Задача 4
const numbers = [32, -7, 74, 0, -46, -2, 101, -13];

numbers.forEach(item => {
    if (item > 0) {
        console.log(item);
    }
});

let numbersNew = numbers.map(Math.abs)
console.log(numbersNew);

let zero = numbers.find(item => {
    return item === 0;
});
console.log(zero);


let number = numbers.filter(item => {
    return item < 0; 
})
console.log(number);

let sum = numbers.reduce((a, b) => {
    return a + b;
})
console.log(sum);

// Задача 5
let func = ((x,y) => {
    x = 108;
    y = 45;
    let coords = { x, y };
    console.log(coords);
})();

// Задача 6
const element = {
    name: 'div',
    content: 'Hello world',
    styles: {
    fontSize: '12px',
    backgroundColor: 'gray'
    },
    show: function () {
    this.styles.display = 'block';
    },
    hide: function () {
    this.styles.display = 'none';
    }
}
function HtmlElement(name, content, styles) {
    this.name = name;
    this.content = content;
    this.styles = styles;
}
let example = new HtmlElement('p', 'qweertty', {one: 1, two: 2});
console.log(example);

// Задача 7
const user = { 
    userName: ''
};
function changeUserName(newUserName) {
    this.userName = newUserName;
    console.log(this.userName);
}

changeUserName.call(user, 'Vika');
changeUserName.apply(user, ['Katya']);
let changeUserNameBound = changeUserName.bind(user, 'Maks');
changeUserNameBound();

// ДЗ
// Задача 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(item => {
    console.log(item);
});

fibonacci.forEach(function getItem(item) {
    console.log(item);
});

// Задача 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let count = 0;
const newUsers = users.map(item => {
    count++;
    return `member ${count}: ${item}`;
})
console.log(newUsers);
const newUsers2 = users.map(function newUsersTwo(item) {
    count++;
    return `member ${count}: ${item}`;
})
console.log(newUsers2);

// Задача 3
const numbersThree = [7, -4, 32, -90, 54, 32, -21];
let numbersThreeNew = numbersThree.filter(item => {
    return item > 0;
})
console.log(numbersThreeNew);

let numbersThreeNewFunc = numbersThree.filter(function getPositiveNumbers(item) {
    if (item > 0) {
        return item;
    }
})
console.log(numbersThreeNewFunc);

// Задача 4
const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let sumFibonacci2 = fibonacci.reduce((a, b) => {
    return a + b;
})
console.log(sumFibonacci2);
let sumFibonacci = fibonacci.reduce(function getSumFibonacci(a, b) {
    return a + b;
})
console.log(sumFibonacci);

// Задача 5
const numbersFive = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let evenNumber = numbersFive.find(item => {
    if (item % 2 === 0) {
        return item;
    }
})
console.log(evenNumber);
let evenNumber2 = numbersFive.find(function getEvenNumber(item) {
    if (item % 2 === 0) {
        return item;
    }
})
console.log(evenNumber2);

// Задача 6
function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;

    this.availableCredit = function() {
        switch(rate) {
            case 'A': return salary * 12;
            case 'B': return salary * 9;
            case 'C': return salary * 6;
            case 'D': return 0;
        }
    }
}

let student1 = new Student('Vika', 1400, 'A');
let student2 = new Student('Lena', 900, 'B');
let student3 = new Student('Sergey', 1100, 'C');
let student4 = new Student('Nikita', 1200, 'D');
let student5 = new Student('Aleksey', 2000, 'A');

const students = [student1, student2, student3, student4, student5];

function calcAverageCredit(students) {
    let sumCredit = 0;
    for (let student of students) {
        sumCredit = sumCredit + student.availableCredit();
    }
    return sumCredit / students.length;
}
console.log(calcAverageCredit(students));
console.log(students);

// Задача 7
function getString(str) {
    str = 'This website is for losers LOL!';
    let str2;
    for (let i = 0; i < str.length; i++) {
        str2 = str.replace(/['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']/g, '');
    }
    return str2;
}
console.log(getString());

// Задача 8
const capitalizeFirstLetter = (k) => k.charAt(0).toUpperCase() + k.slice(1);
const accum = (str) => str.split('').map((word, i) => 
capitalizeFirstLetter(Array(i + 2).join(word).toLowerCase())).join('-');
console.log(accum('abcdef'));

// Задача 9
let highAndLow = '1 2 3 4 5 6 7 8 9 -3';
const arr = highAndLow.split(' ');
console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`);

