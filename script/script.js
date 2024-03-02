// задача 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// задача 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

// задача 3
const numbers = [5, 43, 63, 23, 90];
function deleteElem() {
    for (let i = 0; i <= numbers.length; i++) {
        numbers.pop();
        console.log(numbers);
    }
    return numbers;
}
deleteElem();
console.log(deleteElem());

const numbers2 = [5, 43, 63, 23, 90];
function deleteElem2() {
    for (let i = 0; i <= numbers2.length; i++) {
        numbers2.shift();
        console.log(numbers2);
    }
    return numbers2;
}
deleteElem2();
console.log(deleteElem2());

// задача 4
const students = ['Polina', 'Dasha', 'Masha'];
console.log(students);
console.log(students.pop(), students);
console.log(students.push('Borya'), students);
console.log(students.shift(), students);
console.log(students.unshift('Andrey'), students);

// задача 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for ( let cat of cats) {
    console.log(cat);
}
