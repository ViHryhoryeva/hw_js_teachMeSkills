// задача 1
let userInfo = {
    name: 'Vika',
    age: 28,
}
console.log(userInfo);
delete userInfo.name
delete userInfo.age
console.log(userInfo);

// задача 2
let weather = {
    cloudy: 'Да',
    sunny: true,
    temperature: 15,
}
console.log(weather);

function isKeyInObject(key) {
    if (key !== undefined) {
        return true;
    } else {
        return false;
    }
}
isKeyInObject(weather);
console.log(isKeyInObject(weather.cloudy));

// задача 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}
console.log(student);
for (key in student) {
    console.log('Ключ объекта "student":' + ' ' + key);
}
for (key in student) {
    console.log('Значение ключа объекта "student":' + ' ' + student[key])
}

// задача 4
const colors = {
    'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// задача 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}
let averageSalary = (salaries.andrey + salaries.sveta + salaries.anton + salaries.igor + salaries.alexandra) / 5;
console.log(averageSalary);

// задача 6
function validator() {
    let login = prompt('Введите ваш логин:');
    let password = prompt('Введите ваш пароль:');
    let obj = {};
    obj.login = login;
    obj.password = password;
    console.log(obj);
    let login2 = prompt('Введите ваш логин:');
    let password2 = prompt('Введите ваш пароль:');
    if (login === login2 && password === password2) {
        alert('Добро пожаловать!');
    } else {
        alert('Данные не верны!');
    }    
}
validator();

// задача 7
let objGoalsDigit = {
    count1: 2,
    count2: 5,
}

function convertGoalsDigitToGoalsNew(objGoalsDigit) {
    let objGoalsNew = {
        count1: '',
        count2: '',
    }
    objGoalsNew.count1 = getCountGoalsWords(objGoalsDigit.count1);
    objGoalsNew.count2 = getCountGoalsWords(objGoalsDigit.count2);
    return objGoalsNew;
}

function getCountGoalsWords(key) {
    switch (key) {
        case 0:
            return 'ноль';
        case 1:
            return 'один';
        case 2:
            return 'два';
        case 3:
            return 'три';
        case 4:
            return 'четыре';
        case 5:
            return 'пять';
        case 6:
            return 'шесть';
        case 7:
            return 'семь';
        case 8:
            return 'восемь';
        case 9:
            return 'девять';
        default:
            break;
    }
}
    
let objGoalsNew = convertGoalsDigitToGoalsNew(objGoalsDigit);
console.log(`${objGoalsNew.count1} : ${objGoalsNew.count2}`);

// задача 8
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
function comparingObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for ( let key of  keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        const isObjects =  isObject(value1) && isObject(value2);

        if ((isObjects && !comparingObjects(value1, value2)) || (!isObjects && value1 !== value2)) {
            return false;
        }
    }
    return true;
}

let isObject = function(object) {
    return object != null && typeof object === "object";
  }

console.log(JSON.stringify(student1) === JSON.stringify(student2));
console.log(comparingObjects(student1, student2));

// задача 9
let animals = {
    cat: {
    name: 'Енчик',
    age: 3,
    },

    dog: {
    name: 'Орео',
    age: 2,
    }
}

function getBird() {
    animals.bird?.name;
}

console.log(getBird());
console.log(animals);