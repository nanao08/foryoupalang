// Function to show flowers and text
function startFlowers() {
    document.getElementById('welcome-page').classList.add('hide');
    document.getElementById('anniversary-text').classList.add('show');
    document.getElementById('show-message-btn').classList.add('visible');
    document.body.classList.remove("container");
}

// ADDED: Function to show second message card and hide the button
function showMessageCard() {
    document.getElementById('second-message').classList.add('visible');
    document.getElementById('show-message-btn').classList.add('hidden');
}

// ADDED: Function to close second message card
function closeMessageCard() {
    document.getElementById('second-message').classList.remove('visible');
}

// Flowers will wait for button click
window.onload = () => {
    console.log('Ready for button click!');
};