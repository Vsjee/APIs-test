const main = document.getElementById('main2')
const div = document.createElement('div')
const ul = document.createElement('ul')
const li = document.createElement('li')

let value = 3

//Using the API
async function getData(value) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()

        commentElement(data, value)
    } catch (error) {
        console.log(error);
        console.error('error bbsita');
    }
}

//Create the comment layout for each one
const commentElement = (data, value) => {

    for (let i = 0; i < value; i++) {

        const commentTemplate = `
            <h3><span>${data[i].id}</span> - ${data[i].name}</h3>
            <span>${data[i].email}</span>
            <p>${data[i].body}</p>
        `
        const ul = document.createElement('ul')
        ul.classList.add('list')
        const li = document.createElement('li')
        li.classList.add('list--item')
        li.innerHTML = commentTemplate
        ul.append(li)
        main.append(ul)
    }
}

const changeData = `
    <input id="input" type="number 0/500" placeholder="Number"></input>
    <button id="input--btn">UPDATE</button>
    <span id="input--span">0/500</span>
`

div.innerHTML = changeData
main.prepend(div)

//input logic
const btn = document.getElementById('input--btn')
const updatingData = document.getElementById('input--span')

const buttonLogic = () => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        const input = document.getElementById('input').value
        const value = parseInt(input)

        if (value > 0 && value <= 500) {
            updatingData.innerHTML = `
            <span>${value}/500</span>
            `
            ul.innerHTML = ''
            getData(value)
        } else if (value < 0) {
            updatingData.innerHTML = `
                <span>Error/500</span>
            `
            ul.innerHTML = `
                <h1>Error no data</h1>
            `
        } else if (value > 500) {
            updatingData.innerHTML = `
            <span>Error/500</span>
            `
            ul.innerHTML = `
                <h1>Error don't exist more data</h1>
            `
        } else {
            updatingData.innerHTML = `
            <span>Error/500</span>
            `
            ul.innerHTML = `
            <h1>No elements selected</h1>
            `
        }
    })
}
buttonLogic()