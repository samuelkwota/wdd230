document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");

    // Load member data from JSON file
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Display members based on the initial view (grid or list)
            displayMembers(data, getInitialView());
        });

    // Function to display members based on the view type (grid or list)
    function displayMembers(members, viewType) {
        mainContent.innerHTML = ""; // Clear existing content

        members.forEach(member => {
            const memberElement = document.createElement(viewType === "grid" ? "div" : "li");
            memberElement.classList.add(viewType === "grid" ? "member-card" : "member-list-item");

            // Populate member information
            memberElement.innerHTML = `
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <img src="images/${member.image}" alt="${member.name}">
                <!-- Add other member information as needed -->
            `;

            mainContent.appendChild(memberElement);
        });
    }

    // Function to get the initial view type from local storage or default to "grid"
    function getInitialView() {
        const storedView = localStorage.getItem("viewType");
        return storedView ? storedView : "grid";
    }

    // Event listener to toggle between grid and list views when the button is clicked
    document.getElementById("toggle-view").addEventListener("click", function () {
        const currentView = getInitialView();
        const newView = currentView === "grid" ? "list" : "grid";
        
        // Save the new view type to local storage
        localStorage.setItem("viewType", newView);

        // Display members in the new view
        displayMembers(data, newView);
    });
});

