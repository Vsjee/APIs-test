const main = document.getElementById('main2');
const inputBarContainer = document.createElement('div');
const ulContainer = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');

let value = 3;

//Using the API
async function getData(value) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        commentElement(data, value);
    } catch (error) {
        console.log(error);
        console.error('error bbsita');
    }
}

//Create the comment layout for each one
const commentElement = (data, value) => {
    for (let i = 0; i < value; i++) {
        const commentTemplate = `
            <li class="list--item">
                <h3><span>${data[i].id}</span> - ${data[i].name}</h3>
                <span>${data[i].email}</span>
                <p>${data[i].body}</p>
            </li>
        `;

        const ul = document.createElement('ul');
        ul.classList.add('list');
        ul.innerHTML = commentTemplate;
        ulContainer.append(ul);
        main.append(ulContainer);
    }
};

//input bar with (input, button, span) template
const changeData = `
    <input id="input" type="number" placeholder="Number 0/500"></input>
    <button id="input--btn">UPDATE</button>
    <span id="input--span">0/500</span>
`;

inputBarContainer.innerHTML = changeData;
main.prepend(inputBarContainer);

//<span> error template
const spanError = `<span>Error/500</span>`;

//input logic
const btn = document.getElementById('input--btn');
const updatingData = document.getElementById('input--span');

const buttonLogic = () => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const input = document.getElementById('input').value;
        let value = parseInt(input);

        //update the <span> and the /comments list
        if (value > 0 && value <= 500) {
            ulContainer.innerHTML = '';
            updatingData.innerHTML = `<span>${value}/500</span>`;
            ul.innerHTML = '';
            getData(value);
        } else if (value < 0) {
            ulContainer.innerHTML = '';
            updatingData.innerHTML = spanError;
            ul.innerHTML = `<h1>Error no data</h1>`;
            main.append(ul);
        } else if (value > 500) {
            ulContainer.innerHTML = '';
            updatingData.innerHTML = spanError;
            ul.innerHTML = `<h1>Error don't exist more data</h1>`;
            main.append(ul);
        } else {
            ulContainer.innerHTML = '';
            updatingData.innerHTML = spanError;
            ul.innerHTML = `<h1>No elements selected</h1>`;
            main.append(ul);
        }
    });
};
buttonLogic();
