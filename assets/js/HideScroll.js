jQuery(document).ready(function($){

    // hide the ScrollUp on page load/ready.
    $('#btnScrollToTop').hide();

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#btnScrollToTop').show().fadeIn();
        } else {
            $('#btnScrollToTop').fadeOut().hide();
        }
    });
    //Click event to scroll to top
    $('#btnScrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},360);
        return false;
    });
});