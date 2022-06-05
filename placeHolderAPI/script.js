const idUser = document.getElementById('idUser');

getUsers() 

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const getData = await response.json();
    console.log(getData, typeof getData);

    let arrayy = []
    arrayy.push(getData);

    document.getElementById("UserId").innerHTML = getData[0].id;
    document.getElementById("UserName").innerHTML = getData[0].name;
    document.getElementById("UserEmail").innerHTML = getData[0].email;
    document.getElementById("UserPhone").innerHTML = getData[0].phone;

    // for(let i = 0; i<getData.length; i++) {
    //     //console.log(getData[i]);
    //     document.getElementById('idUser').textContent = getData[i].id;
    //     document.getElementById('userName').textContent = getData[i].name;
    // }
}

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         return response.json();
//     }).then(getData => {
//         console.log(getData);
//     })