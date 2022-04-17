import 'slick-carousel';
import $ from 'jquery';

import './common/dashboard';

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
