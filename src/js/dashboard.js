import './dashboard/drop-down';
import './dashboard/charts';

document.addEventListener('DOMContentLoaded', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

  document.body.style.setProperty(
    '--mobile-nav-height',
    mobileNav.offsetHeight + 'px'
  );
});
