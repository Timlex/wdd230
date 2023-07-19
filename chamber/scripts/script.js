// Function to load JSON data
function loadMembers() {
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        const membersContainer = document.getElementById('members-container');
  
        // Clear existing content
        membersContainer.innerHTML = '';
  
        // Loop through the member data and create cards or list items
        data.forEach(member => {
          if (gridView) {
            // Create member card
            const card = document.createElement('div');
            card.classList.add('member-card');
            // Populate card with member data
            card.innerHTML = `
              <h3>${member.name}</h3>
              <p>Address: ${member.address}</p>
              <p>Phone: ${member.phone}</p>
              <p>Website: <a href="${member.website}">${member.website}</a></p>
              <p>Membership Level: ${member.membershipLevel}</p>
              <!-- Add other member information as needed -->
            `;
            membersContainer.appendChild(card);
          } else {
            // Create member list item
            const listItem = document.createElement('div');
            listItem.classList.add('member-list-item');
            // Populate list item with member data
            listItem.innerHTML = `
              <h3>${member.name}</h3>
              <p>Address: ${member.address}</p>
              <p>Phone: ${member.phone}</p>
              <p>Website: <a href="${member.website}">${member.website}</a></p>
              <p>Membership Level: ${member.membershipLevel}</p>
              <!-- Add other member information as needed -->
            `;
            membersContainer.appendChild(listItem);
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Variable to track the current view mode (grid or list)
  let gridView = true;
  
  // Function to toggle between grid and list view
  function toggleView() {
    gridView = !gridView;
    loadMembers();
  }
  
  // Load members on page load
  window.onload = loadMembers;
  

// Function to calculate the days between two dates
function calculateDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  // Calculate the difference in days
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays;
}

// Function to display the days between user visits
function displayDaysBetweenVisits() {
  const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
  const lastVisitDate = localStorage.getItem("lastVisitDate"); // Get the last visit date from local storage

  if (lastVisitDate) {
    const daysBetween = calculateDaysBetweenDates(lastVisitDate, currentDate);
    document.getElementById("days-between").textContent = daysBetween;
  } else {
    document.getElementById("days-between").textContent = "First visit";
  }

  // Store the current visit date in local storage
  localStorage.setItem("lastVisitDate", currentDate);
}

// Call the displayDaysBetweenVisits function when the page loads
window.addEventListener("load", displayDaysBetweenVisits);
