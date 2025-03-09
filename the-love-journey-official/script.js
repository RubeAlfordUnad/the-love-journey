// Desplazamiento suave entre secciones
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Altura del navbar
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Menú hamburguesa para móviles
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
