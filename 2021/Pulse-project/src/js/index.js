//slick slider
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

$(document).ready(function () {
  //tiny slider 2
  const slider = tns({
    container: '.carousel__inner',
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    arrowKeys: true,
    items: 1,
    slideBy: 'page',
    controls: false,
    navPosition: 'bottom',
    responsive: {
      767: {
        nav: false,
      },
    },
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  function toggleSlide(link) {
    $(link).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  // modal
  // выбор элементов по атрибутам
  $('[data-modal="consultation').on('click', () => {
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', () => {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.overlay').on('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });
  $(document).on('keydown', (e) => {
    if (e.keyCode == 27) {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    }
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', () => {
      // С помощью функции text подставляем название товара,на который мы нажали (catalog-item__subtitle) в modal__descr
      $('#order .modal__descr').text(
        $('.catalog-item__subtitle').eq(i).text()
      ); /* eq позволяет получить определенный элемент по порядку*/
      $('.overlay, #order').fadeIn('slow');
    });
  });

  const validateForm = (form) => {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите свое имя',
          minlength: jQuery.validator.format('Введите от {0}-х символов'),
        },
        phone: 'Пожалуйста, введите свой телефон',
        email: {
          required: 'Пожалуйста, введите свой почтовый адрес',
          email: 'Почтовый адрес введен неправильно',
        },
      },
    });
  };
  validateForm('#consultation-form');
  validateForm('#consultation form');
  validateForm('#order form');

  $('input[name=phone]').mask('7 (999) 999-9999');

  $('form').submit(function (e) {
    e.preventDefault();
    // Случай, если форма не прошла валидацию (пустой запрос или др.)
    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: './mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      // Обновление форм
      $('form').trigger('reset');
    });
    return false;
  });

  //smooth scroll and pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut('slow');
    }
  });
  $(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
      var anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top,
          },
          1000
        );
      e.preventDefault();
    });
    return false;
  });
  new WOW().init();
});
