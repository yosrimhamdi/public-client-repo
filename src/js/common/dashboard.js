import scrollDirection from 'scrolldir';

import '../dashboard/drop-down';
import ToggleMobileMenu from './toggle-mobile-menu';

window.addEventListener('load', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

  document.body.style.setProperty(
    '--mobile-nav-height',
    mobileNav.offsetHeight + 'px'
  );

  scrollDirection({ dir: 'up' });
});

new ToggleMobileMenu('#open-left', '#left-side-bar');
new ToggleMobileMenu('#open-right', '#right-side-bar');
