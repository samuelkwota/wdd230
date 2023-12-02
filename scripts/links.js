// links.js

// Define the baseURL and linksURL
const baseURL = 'https://samuelkwota.github.io/wdd230/'; // Replace with your GitHub pages URL
const linksURL = `${baseURL}/data/links.json`;

// Asynchronous function to get links data
async function getLinks() {
  try {
    // Fetch links data
    const response = await fetch(linksURL);
    const data = await response.json();

    // Test the JSON result by logging to console
    console.log(data);

    // Call the function to display links
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

// Function to display links
function displayLinks(weeks) {
  // Get the container element where links will be appended
  const linksContainer = document.getElementById('learning-activities');

  // Loop through each week in the data
  weeks.forEach(week => {
    // Create a list item for the week
    const weekListItem = document.createElement('li');
    weekListItem.textContent = week.week;

    // Create an unordered list for the links
    const linksList = document.createElement('ul');

    // Loop through each link in the week
    week.links.forEach(link => {
      // Create a list item for each link
      const linkListItem = document.createElement('li');

      // Create a hyperlink for the link
      const linkElement = document.createElement('a');
      linkElement.href = `${baseURL}/${link.url}`;
      linkElement.textContent = link.title;

      // Append the hyperlink to the list item
      linkListItem.appendChild(linkElement);

      // Append the link list item to the links list
      linksList.appendChild(linkListItem);
    });

    // Append the links list to the week list item
    weekListItem.appendChild(linksList);

    // Append the week list item to the container
    linksContainer.appendChild(weekListItem);
  });
}

// Call the getLinks function to initiate the process
getLinks();