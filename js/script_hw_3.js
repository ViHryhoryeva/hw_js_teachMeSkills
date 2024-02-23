// задача 1
let one = 'true';
let two = false;
let three = 17;
let four = undefined;
let five = null;
console.log(typeof one, typeof two, typeof three, typeof four, typeof five);

// задача 2
let height = 15;
let width = 20;
if (height > width) {
    console.log(height);
} else if (width > height) {
    console.log(width);
}

// задача 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// задача 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = apple || orange && key && documents && pen;
console.log(shouldGoToWork);

// задача 5
let i = prompt('Введите число');

if (i % 5 == 0) {
    console.log('Fiz');
} else if (i % 3 == 0) {
    console.log('Buz');
} else if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizBuz');
} else {
    console.log('Число не делится на 3 и 5');
}

// задача 6
let j = prompt('Введите ваш возраст:');
if (j > 18) {
    console.log('Попей пивка');
} else if (j < 18) {
    console.log('Пей колу');
} else if (16 <= j <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
}

// задача 7
let direction = prompt('В какую сторону света вы бы хотели б отправиться?');
switch (direction) {
    case 'юг': 
    console.log('На юг пойдешь, счастье найдешь');
    break;
    case 'север': 
    console.log('На север пойдешь, много денег найдешь');
    break;
    case 'запад':
    console.log('На запад пойдешь, верного друга найдешь');
    break;
    case 'восток': 
    console.log('На восток пойдешь, разработчиком станешь');
    break;
    default: 
    prompt('Введите еще раз, в какую сторону света вы бы хотели б отправиться');
}
console.log(direction);

// задача 8, 
// получились две Н большими в слове "набережная"
let userName = 'пОлИнА нАбЕрЕжНаЯ';
let name1 = userName.toLowerCase().split(' ');
console.log(name1);

let name2 = name1[0].split(name1[0][0]).join(name1[0][0].toUpperCase());
let name3 = name1[1].split(name1[1][0]).join(name1[1][0].toUpperCase());
console.log(name2);
console.log(name3);

let hello = alert('Привет,' + ' ' + `${name2} ${name3}` + '!');

// задача 9
let user = Number(prompt('Введите число:'));
let user2 = Number(prompt('Сколько отнять?'));
let user3 = Number(prompt('Сколько прибавить?'));
let user4 = Number(prompt('Насколько умножить'));
let user5 = Number(prompt('Насколько разделить?'));
// ((((6 - 10) + 5) * 20) / 2 = 110)
let result = alert((((user - user2) + user3) * user4) / user5);
console.log((((user - user2) + user3) * user4) / user5);

// задача 10
let str = '';
let k = 0;
while (k < 6) {
    str = str.concat('#');
    console.log(str);
    k++;
}