function loadDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dogImage').src = data.message;
    })
    .catch(error => console.error('Error:', error));
}

// Load an image as soon as the window is loaded
window.onload = loadDogImage;

// Keep the existing event listener for the button
document.getElementById('dogImage').addEventListener('click', loadDogImage);
