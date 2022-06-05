console.log('fetching an img')

catchRainbow()
  .then(response => {
    console.log('work');
  })
  .catch(err => {
    console.log('error');
    console.error(err);
  });

async function catchRainbow() {
    const response = await fetch('mystery.jpg');
    const Blob = await response.blob();
    document.getElementById('back').src = URL.createObjectURL(Blob);
}