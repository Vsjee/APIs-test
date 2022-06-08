const main = document.querySelector('div');
const imgDiv = document.createElement('div');

//fetching the API
async function callDogAPI() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const response2 = await fetch('https://dog.ceo/api/breeds/image/random');
        
        const img = await response.json();
        const img2 = await response2.json();

        const url = img.message;
        const url2 = img2.message;
        
        imgDiv.innerHTML = make(url, url2);

        main.append(imgDiv);
    } catch (error) {
        console.log('error');
        console.error(err);
    }
}

//button logic
const btn = document.createElement('button');
btn.setAttribute('style', 'cursor: pointer')
btn.textContent = 'Update';

main.append(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault();
    callDogAPI();
});

//Img template literal
const make = (img1, img2) => {
    const imgContainer = `
    <img id="img1" src="${img1}"></img>
    <img id="img2" src="${img2}"></img>
    `;

    return imgContainer;
};