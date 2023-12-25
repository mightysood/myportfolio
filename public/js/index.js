$(window).on("load", () => {

    $(".loader .inner").fadeOut(250, () => {
        $(".loader").fadeOut(500);
    });

});


$(document).ready(() => {

    $("#slides").superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    let typed = new Typed(".typed", {
        strings: ["Software Engineer.", "I love solving problems and meeting new people.", "Fortunately, I am Mighty :)"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true,
        startDelay: 100,
        showCursor: false
    });

}); 
