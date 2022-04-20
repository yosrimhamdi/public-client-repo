import scrollDirection from 'scrolldir';

window.addEventListener('load', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

    document.body.style.marginBottom = mobileNav.offsetHeight * 1.5 + 'px';

  scrollDirection({ dir: 'up' });
});
