const app = document.getElementById('app');
const idUser = document.getElementById('idUser');
const ul = document.createElement('ul');

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const getData = await response.json();

    getDataP(getData);
}

getUsers()
    .catch(err => {
        console.log('Error bbsita')
        console.error(err)
    })

const getDataP = (getData) => {
    for (let i = 0; i < getData.length; i++) {
        const ul = document.createElement('ul');
        const templateList = `
            <li>user-id: ${getData[i].id}</li>
            <li>user-id: ${getData[i].name}</li>
            <li>user-id: ${getData[i].email}</li>
            <li>user-id: ${getData[i].phone}</li>
        `
        ul.innerHTML = templateList;
        app.append(ul);
    }

    console.log(app);
}