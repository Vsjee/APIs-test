const mainList = document.getElementById('appp')
const listData = document.createElement('ol')
let listDataItem = document.createElement('li')

listData.classList.add('aver')

async function getData(input) {
    try {
        const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
        const ans =  await response.json()

        let list = []
        if(input => 0 && input <= 2066) {
            for(let i = 0; i<input; i++) {
                list.push(ans[i].symbol + ' : ' +ans[i].lastPrice)
            }
        } else {
            alert('Error only numbers between 0 and 2066')
        }
    
        lists(list)
        
    } catch (err) {
        console.error('error bbsita')
        console.log(err)
    }
}

const lists = (list) => {
    list.forEach(lis => {
        let listDataItem = document.createElement('li')
        listDataItem.innerHTML = lis;

        listData.append(listDataItem)
    });

    mainList.append(listData);
}

//update the list of coins
const form = document.createElement('form')

const updateNumCoins = `
        <input type="number" name="list" placeholder="insert 0/2066"></input>
        <button>Update</button>
`
form.innerHTML = updateNumCoins;

mainList.append(form);

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('input').value;

    getData(input)

    document.querySelector('input').value = "";

    listData.innerHTML = "";
});
