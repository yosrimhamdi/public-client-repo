import 'slick-carousel';
import $ from 'jquery';

import './components/drop-down';
import './components/bottom-mobile-nav';
import ShowMenuOverlay from './components/ShowMenuOverlay';

new ShowMenuOverlay('#open-left', '#left-side-bar');
new ShowMenuOverlay('#open-right', '#right-side-bar');

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
