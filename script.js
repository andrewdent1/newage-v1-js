// This file contains minimal JavaScript for the landing page
// You can add more functionality as needed

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality can be added here
  const menuButton = document.querySelector('.menu-button');
  
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      // Toggle mobile menu visibility
      console.log('Menu button clicked');
      // Add your mobile menu toggle logic here
    });
  }

  // Get started button functionality
  const getStartedButton = document.querySelector('.get-started-button');
  
  if (getStartedButton) {
    getStartedButton.addEventListener('click', function() {
      console.log('Get started button clicked');
      // Add your get started logic here
    });
  }

  // Creator buttons functionality
  const creatorButtons = document.querySelectorAll('.creator-button');
  
  creatorButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log(`${this.textContent.trim()} button clicked`);
      // Add your creator button logic here
    });
  });
});
