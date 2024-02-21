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

// залача 4
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
    console.log('На север пойдешь, много денег найдушь');
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