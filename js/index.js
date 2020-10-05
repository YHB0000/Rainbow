$(window).scroll(function()
    {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backTop1 = $(".max-top").offset().top - $(window).height();
    var backTop2 = $(".Cho-top").offset().top - $(window).height();
    var backTop3 = $(".skam-top").offset().top - $(window).height();
    var backTop4 = $("#serve").offset().top - $(window).height();
    if(scrollT > backTop1){
        $(".max-top").addClass("animated bounceInDown show").removeClass("fade");
    }
    if(scrollT > backTop2){
        $(".Cho-top").addClass("animated bounceInDown show").removeClass("fade");
    }
    if(scrollT > backTop3){
        $(".skam-top").addClass("animated bounceInDown show").removeClass("fade");
    }
    if(scrollT > backTop4){
        $(".serve-1").addClass("animated fadeIn show").removeClass("fade");
        $(".serve-2").addClass("animated fadeIn show").removeClass("fade");
        $(".serve-3").addClass("animated fadeIn show").removeClass("fade");
        $(".serve-4").addClass("animated fadeIn show").removeClass("fade");
        $(".serve-5").addClass("animated fadeIn show").removeClass("fade");
    }
    });
