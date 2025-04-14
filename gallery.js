// js/gallery.js
// Add any custom JavaScript interactions here if needed.
// For example, implementing a custom lightbox or more complex animations.

$(document).ready(function(){
    // Initialize Design Carousel (1 slide)
    $('.design-carousel').on('init', function(event, slick){
        // Reveal the section AFTER Slick has initialized
        $(this).closest('.carousel-section').css('visibility', 'visible');
    }).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,     // Show 1 slide at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // Responsive settings can be adjusted or removed if 1 slide is always desired
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    // Initialize Photo and Poster Carousels (3 slides)
    $('.photo-carousel, .poster-carousel').on('init', function(event, slick){
        // Reveal the section AFTER Slick has initialized
        $(this).closest('.carousel-section').css('visibility', 'visible');
    }).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,     // Show 3 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,  // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    // Reveal the video section once the document is ready
    // (Video doesn't need JS initialization like Slick)
    $('.video-section').css('visibility', 'visible');
});

console.log("Gallery JavaScript loaded and Slick initialized for all carousels with specific settings. Sections revealed after init."); 