// Dark / Light Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check saved theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
