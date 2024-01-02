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

document.getElementById('autoLoadButton').addEventListener('click', function() {
    let counter = 0;
    const interval = 200; // 0.2 seconds
    const totalDuration = 10000; // 10 seconds
    const maxCount = totalDuration / interval; // Number of times to change image

    const intervalId = setInterval(() => {
        if (counter < maxCount) {
            loadDogImage();
            counter++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
});