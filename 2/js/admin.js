$(document).ready(function(){
    $(".group-item ul li a").click(function(){
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        $(this).parent("li").nextAll("li").find(".dropdown-menu").slideUp();
        $(this).parent("li").prevAll("li").find(".dropdown-menu").slideUp();
    });
    $("form i").click(function(){
        $("input").slideToggle();
    })
    $(".toggle").click(function(){
        $(".icon").slideToggle();
    })
  
});
$(document).ready(function(){
    $(".header-left i").click(function(){
      $("body").toggleClass("active");
    });
});


