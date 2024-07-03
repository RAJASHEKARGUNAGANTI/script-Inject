// language_dropdown.js

// Function to create and append the dropdown to the DOM
function createLanguageDropdown() {
  const dropdown = document.createElement('select');
  dropdown.innerHTML = `
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="de">German</option>
    <!-- Add more options as needed -->
  `;
  
  // Styling the dropdown
  dropdown.style.position = 'absolute';
  dropdown.style.bottom = '10px'; // Adjust position as per your requirement
  dropdown.style.left = '10px'; // Adjust position as per your requirement

  // Event listener to handle language selection
  dropdown.addEventListener('change', function() {
    // Implement logic to change language based on selected option
    const selectedLanguage = this.value;
    console.log('Selected language:', selectedLanguage);
    // Implement your logic to change language dynamically
  });

  // Append the dropdown to the body or a specific element
  document.body.appendChild(dropdown);
}

// Call the function to create the dropdown when script is loaded
createLanguageDropdown();
