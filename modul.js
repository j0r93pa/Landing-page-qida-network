 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').removeClass('none');
                  $('nav').addClass('black');
            }

            else {
                  $('nav').addClass('none');
                  $('nav').removeClass('black');
            }
      })