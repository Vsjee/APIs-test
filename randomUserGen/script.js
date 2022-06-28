const main = document.getElementById('app')
const updateBtn = document.createElement('button')

const getData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data.results);
    } catch (error) {
        console.log(error);
        console.error('error bbsita');
    }
}

getData()

const userInfoTemplate = `
    <ul>
        <li><img /></li>
        <li>name</li>
        <li>phone</li>
        <li>email</li>
        <li>nationality <span>city</span></li>
        <li><span>age</span> date</li>
    </ul>
`

main.innerHTML = userInfoTemplate