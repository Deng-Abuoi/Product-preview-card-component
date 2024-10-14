const addButton = document.getElementById('addButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Show the pop-up when the "Add to Cart" button is clicked
addButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
  popup.style.display = 'block'; // Show the popup
});

// Hide the pop-up when the "Close" button is clicked
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
  popup.style.display = 'none'; // Hide the popup
});
