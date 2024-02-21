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
