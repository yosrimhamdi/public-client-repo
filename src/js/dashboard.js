import './dashboard/drop-down';
import './dashboard/charts';
import scrollDirection from 'scrolldir';

document.addEventListener('DOMContentLoaded', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

  document.body.style.setProperty(
    '--mobile-nav-height',
    mobileNav.offsetHeight + 'px'
  );

  scrollDirection({ dir: 'up', thresholdPixels: mobileNav.offsetHeight * 2 });
});
