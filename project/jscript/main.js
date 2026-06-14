/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    name: "Software Development",
    desc: "Custom software solutions designed to meet modern business needs.",
    image: "images/software-development.webp",
    alt: "Abstract visualization of software development and custom digital solutions"
  },
  {
    name: "Web Development",
    desc: "Responsive, accessible, and scalable websites for all platforms.",
    image: "images/web-development.webp",
    alt: "Modern responsive web design displayed across multiple devices"
  },
  {
    name: "Cybersecurity",
    desc: "Advanced security strategies to protect systems and sensitive data.",
    image: "images/cybersecurity.webp",
    alt: "Digital security shield representing cybersecurity and data protection"
  }
];

/* =========================
   RENDER SERVICES
   (Array method + DOM manipulation)
========================= */
function renderServices() {
  const container = document.querySelector("#services-grid");
  if (!container) return;

  container.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("article");
    card.className = "service-card";

    card.innerHTML = `
      <img 
        src="${service.image}"
        alt="${service.alt}"
        loading="lazy"
        width="400"
        height="300">
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
    `;

    container.appendChild(card);
  });
}

/* =========================
   VISITOR TRACKING
   (localStorage + conditionals)
========================= */
function trackVisit() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  let message = document.querySelector("#welcome-message");

  if (!message) {
    message = document.createElement("p");
    message.id = "welcome-message";
    footer.prepend(message);
  }

  const lastVisit = localStorage.getItem("lastVisit");
  const today = new Date().toLocaleDateString();

  if (lastVisit) {
    message.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
  } else {
    message.textContent =
      "Welcome to Kairos Waves Technologies! This is your first visit.";
  }

  localStorage.setItem("lastVisit", today);
}

/* =========================
   CONTACT FORM HANDLING
   (forms + localStorage)
========================= */
function saveContactMessage(details) {
  const key = "kairosContactMessages";
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(details);
  localStorage.setItem(key, JSON.stringify(existing));
}

function handleContactForm() {
  const form = document.querySelector("#contactForm");
  const feedback = document.querySelector("#contact-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please complete all fields before sending your message.";
      return;
    }

    const submission = {
      id: `msg-${Date.now()}`,
      name,
      email,
      message,
      sentAt: new Date().toISOString()
    };

    saveContactMessage(submission);
    feedback.textContent = `Thank you, ${name}! Your message was sent and will be reviewed soon.`;
    form.reset();
  });
}

/* =========================
   INITIALIZATION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  trackVisit();
  handleContactForm();
});