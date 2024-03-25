
const root = document.getElementById('root');

const headerForm = document.createElement('form');
headerForm.classList.add('header');
root.appendChild(headerForm);

const headerDelete = document.createElement('button');
headerDelete.classList.add('header__btn');
headerDelete.innerHTML = 'Delete ALL';
headerForm.appendChild(headerDelete);

const headerText = document.createElement('input');
headerText.setAttribute('type', 'text');
headerText.className = 'header__text';
headerText.setAttribute('placeholder', 'Enter todo ...');
headerForm.appendChild(headerText);

const headerAdd = document.createElement('button');
headerAdd.className = 'header__btn';
headerAdd.innerHTML = 'Add';
headerForm.appendChild(headerAdd);

const mainUl = document.createElement('ul');
mainUl.classList.add('main');
root.appendChild(mainUl);

let count = 0;
let taskList = getData();
console.log(Object.keys(taskList).length);
showTaskLisk();

function Task(id, name) {
    this.id = id;
    this.name = name;
    this.dateTime = new Date();
    this.isDone = false;
}

function addTask(name) {
    count++;
    let task = new Task(crypto.randomUUID(), name);
    taskList[task.id] = task;
    setData(taskList);
    showTaskLisk();
}

function deleteTask(id) {
    delete taskList[id];
    setData(taskList);
    showTaskLisk();
}

function setDone(id, isDone) { 
    if (isDone) {
        taskList[id].isDone = true;
    } else {
        taskList[id].isDone = false;
    }
    setData(taskList);
    showTaskLisk();
}

function deleteAllTask() {
    for (let key in taskList) {
        delete taskList[key];
    }
    setData(taskList);
    showTaskLisk();
}

function datetimeFormat() {
    const date = new Date();
    const month = date.toLocaleString('en', {month: 'long'});
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    
    return `${hour}:${min} ${day}-${month}`;
}

function showTaskLisk() {

    while (mainUl.firstChild) {
        mainUl.removeChild(mainUl.firstChild);
    }

    for (let key in taskList) {
        // console.log(taskList.length);
        // console.log(taskList[key]);
        const container = document.createElement('li');
        container.classList.add('container');
        
        if (taskList[key].isDone === true) {
            container.style.backgroundColor = '#ce93d8';
        }
        mainUl.appendChild(container);

        const mainLabel = document.createElement('label');
        const mainCheckbox = document.createElement('input');
        mainCheckbox.setAttribute('type', 'checkbox');
        mainCheckbox.classList.add('main__yes');
        // mainCheckbox.setAttribute('id', 'check');

        if (taskList[key].isDone === true) {
            mainCheckbox.checked = true; 
            mainLabel.style.before = '&check;';
        } else {
            
        }
 
        // mainLabel.setAttribute('for', 'check');
        mainLabel.appendChild(mainCheckbox);
        container.appendChild(mainLabel);

        const mainText = document.createElement('p');
        mainText.classList.add('main__text');
        mainText.textContent = taskList[key].name;

        if (taskList[key].isDone === true) {
            mainText.style.textDecoration = 'line-through';
        }
        container.appendChild(mainText);
        
        const containerBtn = document.createElement('div');
        containerBtn.classList.add('container__btn');
        container.appendChild(containerBtn);
        
        const mainClose = document.createElement('button');
        mainClose.setAttribute('id', taskList[key].id);
        mainClose.classList.add('main__close');
        mainClose.innerHTML = 'X';
        containerBtn.appendChild(mainClose);
        
        const mainDate = document.createElement('p');
        mainDate.classList.add('main__date');
        mainDate.textContent = datetimeFormat(taskList[key].dateTime);
        containerBtn.appendChild(mainDate);

        container.classList.add('active');

        mainClose.addEventListener('click', () => {
            deleteTask(taskList[key].id);
        });

        mainCheckbox.addEventListener('change', () => {
            setDone((taskList[key].id), mainCheckbox.checked);
        });
    }
}     

headerAdd.addEventListener('click', () => {
    let taskName = headerText.value;
    addTask(taskName);
});

headerDelete.addEventListener('click', (e) => {
    deleteAllTask();
})

headerForm.addEventListener('submit', (e) => {
    e.preventDefault();
})


var todos = localStorage.getItem('todos');

// var localStorageTodosKey = 'todos';

function setData(value) {
    if (value === undefined) {
        return;
    }
    console.log(Object.keys(taskList).length);
    localStorage.setItem('todos', JSON.stringify(value));
}

function getData() {
    if (localStorage.getItem('todos') === null) {
        let arr = {};
        return arr;
    } else {
        return JSON.parse(localStorage.getItem('todos'))
    }
}


