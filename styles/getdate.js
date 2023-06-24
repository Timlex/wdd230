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

// JavaScript code to handle the page visit counter
const visitCounter = document.getElementById('visit-counter');
let count = localStorage.getItem('visitCount');

if (count) {
  count = parseInt(count) + 1;
} else {
  count = 1;
}

localStorage.setItem('visitCount', count);
visitCounter.textContent = `Page visits: ${count}`;

// JavaScript function to toggle dark mode

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');


// Set the student name and country flag
const studentName = "Omikunle Timileyin Micheal";
const countryFlag = "Nigeria"; // Replace with the flag emoji for your country


