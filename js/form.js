// Product Review Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  if (form) {
    // Handle form submission
    form.addEventListener('submit', function(event) {
      // Validate required fields
      const productSelect = document.getElementById('product');
      const ratingInputs = document.getElementsByName('rating');
      const installDate = document.getElementById('installDate');
      
      // Check if product is selected
      if (!productSelect.value) {
        event.preventDefault();
        alert('Please select a product.');
        return;
      }
      
      // Check if rating is selected
      const ratingSelected = Array.from(ratingInputs).some(input => input.checked);
      if (!ratingSelected) {
        event.preventDefault();
        alert('Please select a rating.');
        return;
      }
      
      // Check if date is selected
      if (!installDate.value) {
        event.preventDefault();
        alert('Please enter the installation date.');
        return;
      }
      
      // Form is valid, allow submission
      console.log('Form submitted successfully');
    });
    
    // Populate product select options
    const productSelect = document.getElementById('product');
    const products = [
      'Laptop',
      'Desktop Computer',
      'Smartphone',
      'Tablet',
      'Monitor',
      'Keyboard',
      'Mouse',
      'Headphones',
      'USB Drive',
      'External Hard Drive'
    ];
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.toLowerCase().replace(/\s+/g, '-');
      option.textContent = product;
      productSelect.appendChild(option);
    });
    
    // Add event listeners for real-time feedback
    const reviewTextarea = document.getElementById('review');
    if (reviewTextarea) {
      reviewTextarea.addEventListener('input', function() {
        console.log('Review character count:', this.value.length);
      });
    }
    
    // Handle rating display
    const ratingInputs = document.getElementsByName('rating');
    ratingInputs.forEach(input => {
      input.addEventListener('change', function() {
        console.log('Rating selected:', this.value);
      });
    });
  }
});
