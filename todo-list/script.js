
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

let taskList = {};
let count = 0;

function Task(id, name) {
    this.id = id;
    this.name = name;
    this.dateTime = new Date();
    this.isDone = false;
}

function addTask(name) {
    count++;
    let task = new Task(count, name);
    taskList[task.id] = task;
    showTaskLisk();
}

function deleteTask(id) {
    delete taskList[id];
    showTaskLisk();
}

function setDone(id, isDone) { 
    if (isDone) {
        taskList[id].isDone = true;
    } else {
        taskList[id].isDone = false;
    }
    showTaskLisk();
}

function deleteAllTask() {
    for (let key in taskList) {
        delete taskList[key];
    }
    showTaskLisk();
}

function datetimeFormat(datetime) {
    let year = datetime.getFullYear();
    let month = datetime.getMonth();
    let day = datetime.getDate();
    let hour = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();

    return `${day}-${month}-${year} ${hour}:${min}:${sec}`;
}

function showTaskLisk() {

    while (mainUl.firstChild) {
        mainUl.removeChild(mainUl.firstChild);
    }

    for (let key in taskList) {
        // console.log(taskList[key]);
        const container = document.createElement('li');
        container.classList.add('container');
        if (taskList[key].isDone === true) {
            container.style.backgroundColor = '#ce93d8';
        }
        mainUl.appendChild(container);
        
        const mainCheckbox = document.createElement('input');
        mainCheckbox.setAttribute('type', 'checkbox');
        mainCheckbox.classList.add('main__yes');
        mainCheckbox.setAttribute('id', 'check');

        if (taskList[key].isDone) {
            mainCheckbox.checked = true;
        }
        container.appendChild(mainCheckbox);
        const mainLabel = document.createElement('label');
        mainLabel.setAttribute('for', 'check');
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
