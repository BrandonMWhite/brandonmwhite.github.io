document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = { root: null, rootMargin: '0px', threshold: 0.6 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.body.classList.remove('theme-fantasy', 'theme-transition', 'theme-noir');
        if (id === 'hero') {
          document.body.classList.add('theme-fantasy');
        } else if (id === 'about') {
          document.body.classList.add('theme-transition');
        } else {
          document.body.classList.add('theme-noir');
        }
      }
    });
  }, options);
  sections.forEach(section => observer.observe(section));
});
