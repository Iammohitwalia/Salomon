$(document).ready(function () {
  $("#btn-search").click(function () {
    $(".search ").addClass("search--open");
  });
  $("#search-cls").click(function () {
    $(".search ").removeClass("search--open");
  });

  if ($("li>a.close-top-menu").length > 0) {
        $("li>a.close-top-menu").click(function(event) {
            $(this).parent("li").closest("li.menu-item-has-children").removeClass("sub-open");
            event.stopPropagation();
        });
        $("li.menu-item-has-children").click(function(event) {
            $(this).addClass("sub-open");
            event.stopPropagation();
        });
        $("body").click(function(event) {
            $(".navbar-collapse").removeClass("show");
            $("li.menu-item-has-children").removeClass("sub-open");
            $(".btn-menu-toggler").removeClass("toggler-active");
            $(".wl-navbar-collapse").removeClass("collapse-active");
            event.stopPropagation();
        });
        $(".btn-menu-toggler").click(function(event) {
            $(".btn-menu-toggler").toggleClass("toggler-active");
            $(".wl-navbar-collapse").toggleClass("collapse-active");
            event.stopPropagation();
        });
    }


});
function getFocus() {
  document.getElementById("search-ip").focus();
}
$(document).ready(function() {
    $('#recovery').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        navText: ["<img src='http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png'/>","<img src='http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png'/>"]
    });


    $('#home-practice').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            },
            1200:{
                items:4
            }
        },
        navText: ["<img src='http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png'/>","<img src='http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png'/>"]
    });

  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header-section').addClass("sticky");
      }
      else{
        $('.header-section').removeClass("sticky");
      }
    });





