// задача 1
let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log(sum);

// задача 2
let secOfMin = 60;
let minOfHour = 60;
let hoursOfFDay = 24;
let dayOfYear = 365;
let myAge = 28;
let myAgeInSeconds = myAge * secOfMin * minOfHour * hoursOfFDay * dayOfYear;
console.log(myAgeInSeconds);

// задача 3
let count = 42;
console.log('' + count);
console.log(String(count));
console.log(count.toString());
console.log(`${count}`);

let userName = '42';
console.log(+userName);
console.log(Number(userName));
console.log(parseInt(userName));

// задача 4
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(`${a}${b} ${c}`);
console.log(String(a) + String(b) + ' ' + c);

// задача 5
let wordOne = 'доступ';
let wordTwo = 'морпех';
let wordThree = 'наледь';
let wordFour = 'попрек';
let wordFive = 'рубило';
let lengthWords = wordOne.length + wordTwo.length + wordThree.length + wordFour.length + wordFive.length;
console.log(lengthWords);

// задача 6
let one = true;
let two = 20;
let three = 'Привет';
console.log(`Variable: ${one} , have type: ${typeof one}`);
console.log(`Variable: ${two} , have type: ${typeof two}`);
console.log(`Variable: ${three} , have type: ${typeof three}`);

// задача 7
let nameUser = prompt('Введите ваше имя:');
let age = prompt('Введите ваш возраст:');
console.log(nameUser + ', ' + age);

// задача 8
let d = 4;
let e = 3;
console.log(d);
console.log(e);

d = d + e;
e = d - e;
d = d - e;
console.log(d);
console.log(e);

// задача 9
let codeWord1 = 'обернись';
let codeWord2 = 'неужели';
let codeWord3 = 'огурцы';
let codeWord4 = 'липкие';
let codeWord5 = '?!';
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);