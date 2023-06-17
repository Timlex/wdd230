// JavaScript for displaying the last modification date
const lastModifiedSpan = document.getElementById('lastModified');
const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = lastModified.toDateString();

// JavaScript for the hamburger button functionality
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menuItems = document.querySelector('.menu-items');

// Toggle the visibility of menu items on clicking the hamburger button
hamburgerBtn.addEventListener('click', () => {
  menuItems.classList.toggle('show-menu');
});

// JavaScript function to toggle dark mode
function toggleDarkMode() {
  const mainElement = document.querySelector('main');
  mainElement.classList.toggle('dark-mode');
}