//slick slider
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         slidesToShow: 1,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         vertical: true,
//         verticalSwiping: true,
//         responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     vertical: true,
//                     verticalSwiping: true,
//             }
//         }
//     ]
//     });
//   });

//tiny slider 2
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    nav: true,
    responsive: {
        
        700: {
            nav: true
        },
        1200: {
            nav: false
        },
      }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');


function toggleSlide(link) {
    $(link).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
}