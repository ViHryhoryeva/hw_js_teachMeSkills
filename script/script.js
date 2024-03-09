// Практика
// Задача 1

const rgb = (red, green, blue) => {
    red = Number(prompt('Ввевиде число от 0 до 256'));
    green = Number(prompt('Ввевиде число от 0 до 256'));
    blue = Number(prompt('Ввевиде число от 0 до 256'));
    if (red === undefined || green === undefined || blue === undefined) {
        return 0;
    }
    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(rgb());

// Задача 2
// function ask(question, yes, no) {
//     if (confirm(question)) {
//     yes()
//     } else {
//     no()
//     }
// }
// const ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}
ask('Вы согласны?',
    function() { alert('Вы согласились.') },
    function() { alert('Вы отменили выполнение.') }
    )

// Задача 3
const confirmPassword = (password, runSuccess, runError) => {
    let passwordTwo = prompt('Введите свой пароль:');
    if (password === passwordTwo) {
        return runSuccess();
    } else {
        return runError();
    }
}
const runSuccess = () => {
    return alert('Пароль успешно подтвержден');
}
const runError = () => {
    return alert('Пароль не совпадает');
}
confirmPassword('123', runSuccess, runError);