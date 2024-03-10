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