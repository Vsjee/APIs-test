const mainList = document.getElementById('appp');
const listData = document.createElement('ol');
let listDataItem = document.createElement('li');
const noData = document.createElement('h2');
const invalidData = document.createElement('h2');

//fetching the API
async function getData(input) {
    try {
        const response = await fetch(
            'https://api2.binance.com/api/v3/ticker/24hr'
        );
        const ans = await response.json();

        let list = [];
        if (input > 0 && input <= 2066) {
            //this push data into the list[array] from the json file
            for (let i = 0; i < input; i++) {
                list.push(ans[i].symbol + ' : ' + ans[i].lastPrice);
            }
        } else if (input == 0) {
            noData.innerHTML = 'No elements selected';
            mainList.append(noData);
        } else {
            invalidData.innerHTML = 'Only numbers between 0/2066';
            mainList.append(invalidData);
        }

        lists(list);
    } catch (err) {
        console.error('error bbsita');
        console.log(err);
    }
}

//iterate in list and create each element
const lists = (list) => {
    list.forEach((lis) => {
        let listDataItem = document.createElement('li');
        listDataItem.innerHTML = lis;

        listData.append(listDataItem);
    });

    mainList.append(listData);
};

//update the list of coins
const form = document.createElement('form');

const updateNumCoins = `
        <input type="number" name="list" placeholder="insert 0/2066"></input>
        <button>Update</button>
        <span>0/2066</span>
`;
form.innerHTML = updateNumCoins;

mainList.append(form);

//button logic
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('input').value;
    getData(input);

    input >= 0
        ? (document.querySelector('span').textContent = `${input}/2066`)
        : (document.querySelector('span').textContent = `error/2066`);

    document.querySelector('input').value = '';

    noData.innerHTML = '';
    invalidData.innerHTML = '';
    listData.innerHTML = '';
});
