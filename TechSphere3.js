 document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle functionality
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const menuItems = document.querySelectorAll('.menu-item');
  const contentSections = document.querySelectorAll('.content-section');
  
  // Auth modal elements
  const loginBtn = document.querySelector('.login-btn');
  const registerBtn = document.querySelector('.register-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtns = document.querySelectorAll('.close-modal');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  
  // Toggle menu on click
  menuToggle.addEventListener('click', function() {
    sideMenu.classList.toggle('active');
  });
  
  // Handle menu item clicks
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all menu items
      menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
      });
      
      // Add active class to clicked menu item
      this.classList.add('active');
      
      // Get the content to show
      const contentId = this.getAttribute('data-content');
      
      // Hide all content sections
      contentSections.forEach(section => {
        section.classList.remove('active');
      });
      
      // Show the selected content section
      document.getElementById(contentId).classList.add('active');
      
      // On mobile, close the menu after selection
      if (window.innerWidth <= 768) {
        sideMenu.classList.remove('active');
      }
    });
  });
  
  // Set default active section (Главная)
  document.querySelector('.menu-item[data-content="main"]').classList.add('active');
  document.getElementById('main').classList.add('active');
  
  // Close menu when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !sideMenu.contains(e.target) && 
        e.target !== menuToggle && 
        !menuToggle.contains(e.target)) {
      sideMenu.classList.remove('active');
    }
  });
  
  // Auth modal functionality
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalOverlay.classList.add('active');
    loginModal.style.display = 'block';
    registerModal.style.display = 'none';
  });
  
  registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalOverlay.classList.add('active');
    registerModal.style.display = 'block';
    loginModal.style.display = 'none';
  });

  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
  
  // Handle form submissions
  const authForms = document.querySelectorAll('.auth-form');
  authForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Форма отправлена! (Демо-версия)');
      form.reset();
      modalOverlay.classList.remove('active');
    });
  });
  
  // Handle contact form submission
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Форма отправлена! (Демо-версия)');
      this.reset();
    });
  }
});