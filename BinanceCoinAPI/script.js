const mainList = document.getElementById('appp')
const listData = document.createElement('ul')
let listDataItem = document.createElement('li')

async function getData() {
    const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
    const ans =  await response.json()

    let list = []
    for(let i = 0; i<20; i++) {
        list.push(ans[i].symbol + " : " +ans[i].lastPrice)
    }

    lists(list)
}

getData()
    .catch(err => {
        console.error('error bbsita')
        console.log(err)
    })

const lists = (list) => {
    list.forEach(lis => {
        let listDataItem = document.createElement('li')
        listDataItem.innerHTML = lis;
        listData.append(listDataItem)
    });
    mainList.append(listData);
    console.log(listData)
}