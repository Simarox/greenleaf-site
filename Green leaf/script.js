document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

// Dropdown toggle for mobile (tap to open/close)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation on tap
      const dropdown = toggle.parentElement;
      dropdown.classList.toggle('active');
    }
  });
});

// Close dropdowns when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    const isClickInside = e.target.closest('.dropdown');
    if (!isClickInside) {
      document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));
    }
  }
});
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
});

// Simple Lightbox for Gallery
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightboxImg');
  const closeBtn = document.querySelector('.close-lightbox');

  // Open lightbox
  document.querySelectorAll('[data-lightbox="gallery"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      modalImg.src = link.href;
      modal.classList.add('active');
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
});

console.log("Green Leaf site updated with Tree Services nav link!");
