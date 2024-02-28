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