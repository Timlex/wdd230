// getDates.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    var yearSpan = document.getElementById("year");
    yearSpan.textContent = currentYear;
  
    // Get the last modified date
    var lastModified = document.lastModified;
    var lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = lastModified;
  });
  