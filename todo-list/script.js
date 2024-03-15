
const root = document.getElementById('root');

const headerDiv = document.createElement('div');
    headerDiv.tagName = 'div';
    headerDiv.classList.add('header');
    root.appendChild(headerDiv);

const headerDelete = document.createElement('button');
    headerDelete.classList.add('header__btn');
    headerDelete.innerHTML = 'Delete ALL';
    headerDiv.appendChild(headerDelete);

const headerText = document.createElement('input');
    headerText.setAttribute('type', 'text');
    headerText.className = 'header__text';
    headerText.setAttribute('placeholder', 'Enter todo ...');
    headerDiv.appendChild(headerText);

const headerAdd = document.createElement('button');
    headerAdd.className = 'header__btn';
    headerAdd.innerHTML = 'Add';
    headerDiv.appendChild(headerAdd);

const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    root.appendChild(mainDiv);

const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    mainDiv.appendChild(containerDiv);

const mainYesBtn = document.createElement('button');
    mainYesBtn.classList.add('main__yes');
    mainYesBtn.innerHTML = '&check;';
    containerDiv.appendChild(mainYesBtn);

const mainTextInput = document.createElement('input');
    mainTextInput.classList.add('main__text');
    mainTextInput.setAttribute('type', 'text');
    mainTextInput.setAttribute('placeholder', 'Todo text');
    containerDiv.appendChild(mainTextInput);

const containerBtn = document.createElement('div');
    containerBtn.classList.add('container__btn');
    containerDiv.appendChild(containerBtn);

const mainClose = document.createElement('button');
    mainClose.classList.add('main__close');
    mainClose.innerHTML = 'X';
    containerBtn.appendChild(mainClose);

const mainDate = document.createElement('input');
    mainDate.classList.add('main__date');
    mainDate.setAttribute('type', 'date');
    containerBtn.appendChild(mainDate);

const containerDiv2 = document.createElement('div');
    containerDiv2.classList.add('container');
    mainDiv.appendChild(containerDiv2);

const mainYesBtn2 = document.createElement('button');
    mainYesBtn2.classList.add('main__yes');
    mainYesBtn2.innerHTML = '&check;';
    containerDiv2.appendChild(mainYesBtn2);

const mainTextInput2 = document.createElement('input');
    mainTextInput2.classList.add('main__text');
    mainTextInput2.setAttribute('type', 'text');
    mainTextInput2.setAttribute('placeholder', 'Todo text');
    containerDiv2.appendChild(mainTextInput2);

const containerBtn2 = document.createElement('div');
    containerBtn2.classList.add('container__btn');
    containerDiv2.appendChild(containerBtn2);

const mainClose2 = document.createElement('button');
    mainClose2.classList.add('main__close');
    mainClose2.innerHTML = 'X';
    containerBtn2.appendChild(mainClose2);

const mainDate2 = document.createElement('input');
    mainDate2.classList.add('main__date');
    mainDate2.setAttribute('type', 'date');
    containerBtn2.appendChild(mainDate2);





