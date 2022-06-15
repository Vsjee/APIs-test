const app = document.getElementById('app');
const idUser = document.getElementById('idUser');
const ul = document.createElement('ul');

//Using the API
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const getData = await response.json();

        getDataP(getData);
    } catch (error) {
        console.log('Error bbsita');
        console.error(error);
    }
}
getUsers();

//Create the list of the users
const getDataP = (getData) => {
    for (let i = 0; i < getData.length; i++) {
        const ul = document.createElement('ul');
        const templateList = `
            <li>user-id: ${getData[i].id}</li>
            <li>user-id: ${getData[i].name}</li>
            <li>user-id: ${getData[i].email}</li>
            <li>user-id: ${getData[i].phone}</li>
        `;
        ul.innerHTML = templateList;
        app.append(ul);
    }
};
