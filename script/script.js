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