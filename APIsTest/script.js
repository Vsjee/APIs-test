console.log('fetch a rainbow')

catchRainbow()
  .then(response => {
    console.log('work');
  })
  .catch(err => {
    console.log('error');
    console.error(err);
  });

async function catchRainbow() {
    const response = await fetch('rainbow.jpg');
    const Blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(Blob);
}

// fetch('rainbow.jpg').then(response => {
//     console.log(response);
//     return response.blob();
// }).then(Blob => {
//     console.log(Blob);
// })
// .catch(err => {
//     console.log('error');
//     console.error(err);
// });