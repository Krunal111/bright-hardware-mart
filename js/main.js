AOS.init({
	duration: 800,
	// once: true,
	disable: 'mobile'
});

// Search Toggle Start
$(".header__search .search__icon").click(function(){
	$(".header__search__box").slideToggle();
});
// Search Toggle End

// Categories Slider Start
var swiper = new Swiper('.categories__slider', {
	slidesPerView: 4,
	spaceBetween: 70,
	slidesPerGroup: 4,
	loop: true,
	observer: true,  
    observeParents: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
    }
});
// Categories Slider End

// Single Product Slider Start
var productThumbs = new Swiper('.product--thumbnail', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	observer: true,  
    observeParents: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
        320: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
    }
});
var largeImage = new Swiper('.large--image', {
	thumbs: {
	  swiper: productThumbs
	}
});
// Single Product Slider End

// Categories Slider Start
var swiper = new Swiper('.related__product__slider', {
	spaceBetween: 15,
	slidesPerGroup: 1,
	loop: true,
	observer: true,  
    observeParents: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 5
        },
    }
});
// Categories Slider End

// header Fixed JS Start
$(window).scroll(function() {
	var sticky = $('.header__main'),
	scroll = $(window).scrollTop();
	   
	if (scroll >= 80) { 
		sticky.addClass('fixed'); 
	}
	else { 
		sticky.removeClass('fixed');
	}
});
// header Fixed JS End

// Mobile Menu Start
$(".mobile_menu").click(function(){
	$(".header__menu, .mobile_menu").toggleClass("open");
});
// Mobile Menu End

// Bottom to Top Arrow JS Start
var back_to_top = $('.bottom__to__top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    back_to_top.addClass('show');
  } else {
    back_to_top.removeClass('show');
  }
});

back_to_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// Bottom to Top Arrow JS End