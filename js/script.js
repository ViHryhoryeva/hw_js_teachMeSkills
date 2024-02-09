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