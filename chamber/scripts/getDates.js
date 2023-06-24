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
// Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

// Get the current date in milliseconds
const currentDate = Date.now();

// Store the current date as the last visit date
localStorage.setItem('lastVisit', currentDate);

// Calculate the number of days between visits
const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
const daysBetween = Math.round(Math.abs(currentDate - lastVisit) / oneDay);

// Display the appropriate message based on the number of days between visits
const sidebarContent = document.getElementById('sidebar-content');
if (!lastVisit) {
  sidebarContent.textContent = 'Welcome! Let us know if you have any questions.';
} else if (daysBetween < 1) {
  sidebarContent.textContent = 'Back so soon! Awesome!';
} else {
  const plural = daysBetween === 1 ? 'day' : 'days';
  sidebarContent.textContent = `You last visited ${daysBetween} ${plural} ago.`;
}
