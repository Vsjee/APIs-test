const main = document.getElementById('app')
const card = document.createElement('div')

const btnContainer = document.createElement('div')
btnContainer.setAttribute('id', 'update')

const btn = document.createElement('button')
btn.setAttribute('id', 'update--btn')
btn.textContent = 'Update'

// Gets the data from the API
const getData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()

        const userData = {
            img: data.results[0].picture.large,
            name: data.results[0].name.first,
            phone: data.results[0].phone,
            email: data.results[0].email,
            nationality: data.results[0].nat,
            city: data.results[0].location.city,
            age: data.results[0].registered.age,
            date: data.results[0].registered.date,
        }

        template(userData)
    } catch (error) {
        console.log(error);
        console.error('error bbsita');
    }
}
getData()

//Create the user template and gets props form the api
const template = (userData) => {

    const { img, name, phone, email, nationality, city, age, date } = userData

    const userInfoTemplate = `
        <div class="userCard">
            <img src=${img} alt="usr"/>
            <ul class="userCard--list">
                <li><span>Name: </span> ${name}</li>
                <li><span>Phone: </span> ${phone}</li>
                <li><span>Email: </span> ${email}</li>
                <li><span>Nationality: </span> ${nationality}, ${city}</li>
                <li><span>Age: </span> ${age}</li>
                <li><span>Date: </span> ${date}</li>
            </ul>
        </div>
    `

    card.innerHTML = userInfoTemplate
}

//button logic
btn.addEventListener('click', (e) => {
    e.preventDefault()
    getData()
})

btnContainer.append(btn)
main.append(btnContainer)
main.prepend(card)