const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data-display');
const userInput = document.getElementById('userInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const storedData = document.getElementById('storedData');

// Fetch data from a third-party API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        dataDisplay.textContent = `Title: ${data.title} \nContent: ${data.body}`;
    });

// Implement client-side storage using localStorage
saveButton.addEventListener('click', () => {
    const userText = userInput.value;
    localStorage.setItem('storedText', userText);
});

loadButton.addEventListener('click', () => {
    const storedText = localStorage.getItem('storedText');
    storedData.textContent = storedText;
});