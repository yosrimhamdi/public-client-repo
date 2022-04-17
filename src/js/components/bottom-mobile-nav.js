import scrollDirection from 'scrolldir';

window.addEventListener('load', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

  document.body.style.setProperty(
    '--mobile-nav-height',
    mobileNav.offsetHeight + 'px'
  );

  scrollDirection({ dir: 'up' });
});
