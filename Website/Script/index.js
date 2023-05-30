// Function to calculate the total price
function calculateTotalPrice() {

    // Get all the "Add to Cart" buttons
    const buttons = document.querySelectorAll('button');
  
    let totalPrice = 0;
  
    // Loop through each button
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        
        // Get the price from the <p> tag
        const price = parseFloat(button.previousElementSibling.textContent.split(':')[1].trim().replace('£', ''));
  
        // Add the price to the total
        totalPrice += price;
  
        // Display the total price
        alert(`Total Price: £${totalPrice.toFixed(2)}`);
      });
    });
  }
  
  // Call the function when the page has finished loading
  window.addEventListener('load', calculateTotalPrice);
  