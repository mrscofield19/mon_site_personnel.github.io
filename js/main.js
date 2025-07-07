AOS.init({ duration: 800, once: true });

// Toggle navbar mobile
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Lightbox galerie
const galleryImgs = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lbImg = lightbox.querySelector('img');
galleryImgs.forEach(img => img.addEventListener('click', () => {
  lbImg.src = img.src;
  lightbox.classList.add('active');
}));
function closeLightbox() { lightbox.classList.remove('active'); }

// Formulaire dynamique
const form = document.getElementById('contact-form');
const btn = form.querySelector('button');
form.addEventListener('input', () => {
  btn.disabled = !(form.name.value && form.email.value && form.message.value);
});
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  btn.disabled = true;
  document.getElementById('success').style.display = 'block';
});

