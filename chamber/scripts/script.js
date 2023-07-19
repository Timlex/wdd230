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
  

