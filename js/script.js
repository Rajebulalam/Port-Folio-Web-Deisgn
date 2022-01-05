jQuery(document).ready(function(){
    $.scrollUp();
    $(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
      });
    });

    
    
$('.service_area').owlCarousel({
    loop:true,
    margin:10,
    pagination:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

    
    
$('.work_area').owlCarousel({
    loop:true,
    margin:10,
    pagination:true,
    responsive:{
        0:{
            items:1
        },
        481:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

    
    
$('.testimonial_area').owlCarousel({
    loop:true,
    margin:10,
    pagination:true,
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
    }
})

    
    
$('.clients_area').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


    
    
});



// Sticky Navbar

		$(document).ready(function() {
			var s = $("#sticker");
			var pos = s.position();					   
			$(window).scroll(function() {
				var windowpos = $(window).scrollTop();
				if (windowpos >= pos.top) {
					s.addClass("stick");
				} else {
					s.removeClass("stick");	
				}
			});
		});


        // Mobile Menu

        const menuToggle = document.querySelector ('.toggle');
        const navigation = document.querySelector ('.navigation');
        menuToggle .onclick = function () {
            menuToggle.classList.toggle ('active');
            navigation.classList.toggle ('active');
}