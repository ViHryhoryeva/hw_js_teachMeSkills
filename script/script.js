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

const numbers3 = [5, 43, 63, 23, 90];
numbers3.length = 0;
console.log(numbers);

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

// задача 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const numbersGroup = evenNumbers.concat(oddNumbers);
console.log(numbersGroup, 'Индекс числа 8:' + ' ' + numbersGroup.indexOf(8));


// задача 7
const binary = [0, 0, 0, 0];
let str = binary.join('1');
console.log(str);