
const humberger = document.getElementById('humberger');
const mobileNav = document.getElementById('mobile_nav');

humberger.addEventListener('click', ()=> {
    mobileNav.classList.toggle('-translate-x-full')
})


  ScrollReveal().reveal('.section', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    reset: true
  });









