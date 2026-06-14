const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = `${product.name}`;
  productSelect.appendChild(option);
});

// Form handling: collect inputs, validate, save to localStorage
const form = document.querySelector('form');
function getSelectedFeatures() {
  return Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value);
}

function saveReview(data) {
  const key = 'productReviews';
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productId = productSelect.value;
    const ratingEl = document.querySelector('input[name="rating"]:checked');
    const rating = ratingEl ? Number(ratingEl.value) : null;
    const installDate = document.querySelector('#installDate')?.value || '';
    const features = getSelectedFeatures();
    const reviewText = document.querySelector('#review')?.value || '';
    const username = document.querySelector('#username')?.value || '';

    if (!productId || !rating) {
      alert('Please select a product and provide a rating.');
      return;
    }

    const reviewObj = {
      id: `rev-${Date.now()}`,
      productId,
      rating,
      installDate,
      features,
      reviewText,
      username
    };

    saveReview(reviewObj);

    // Optionally update product average rating (simple running average)
    const product = products.find(p => p.id === productId);
    if (product) {
      if (typeof product.averagerating !== 'number') product.averagerating = rating;
      else product.averagerating = ((product.averagerating + rating) / 2).toFixed(2);
    }

    // Navigate to review page or show confirmation
    window.location.href = `review.html`;
  });
}