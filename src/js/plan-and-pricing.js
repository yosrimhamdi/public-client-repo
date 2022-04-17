import './dashboard/drop-down';
import ToggleMobileMenu from './common/toggle-mobile-menu';
import scrollDirection from 'scrolldir';
import 'slick-carousel';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  const mobileNav = document.querySelector('.mobile-fixed-bottom-nav');

  document.body.style.setProperty(
    '--mobile-nav-height',
    mobileNav.offsetHeight + 'px'
  );

  scrollDirection({ dir: 'up', thresholdPixels: mobileNav.offsetHeight * 2 });
});

new ToggleMobileMenu('#open-left', '#left-side-bar');
new ToggleMobileMenu('#open-right', '#right-side-bar');

$('.carousel').slick({
  infinite: false,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  variableWidth: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick',
    },
  ],
});
