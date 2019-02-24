import { Template } from 'meteor/templating';

import './landingPage.html';
import './landingPage.css';

// var instance = M.Carousel.init({
//     fullWidth: true,
//     indicators: true
//   });

//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });
Template.landingPage.onRendered(function () {

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

//  var t = setTimeout(
//         function () {
//             clearTimeout(t);
//             autoplay();

//             function autoplay() {
//                 $('.carousel').carousel('next');
//                 setTimeout(autoplay, 7000);
//             }

//         }, 6000);


    setTimeout(
        function () {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 50);
})