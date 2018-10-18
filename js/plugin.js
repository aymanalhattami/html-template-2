$(document).ready(function () {
    $('.bars').click(function () {
        $('.only-for-xs').slideToggle();
    });
    
    
    
    
    //  This for <a> in any page to act as link
    $("[href]").click(function() {
        var target = $(this).attr("href");
        var linkWithoutHash = target.substr(1);
        
        $("." + linkWithoutHash).slideDown().siblings("div").slideUp();
        
        $("li a").removeClass("selected");
        $("li a[data-page=" + linkWithoutHash + "]").addClass("selected");
    });
    

    
    
    
    
    /* use accordian */
    // this is for (li a) that is in the <header> and <footer>
    $(".aboutPage").hide();
    $(".newsPage").hide();
    $(".registerPage").hide();
    $(".schedulePage").hide();
    $(".singlePlayerPage").hide();
    $(".teamPage").hide();
    $(".videosPage").hide();
    
    $("li a").click(function (event){
        event.preventDefault();
        var page = $(this).data("page");
        
        $("li a").removeClass('selected');
        $("[data-page=" + page + "]").addClass('selected');
        
        $("." + page).slideDown().siblings("div").slideUp();
    });
});
