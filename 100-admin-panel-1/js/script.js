$(document).ready(function(){
  // for sidebar
  $(".header-left i").click(function(){
    $("aside").toggleClass("aside-slide");
  });

  $(".aside-bottom .dropdown-item > li a").click(function(){
    console.log($(this).parent().parent().parent().find("li").children(".dropdown-menu").slideUp());
    $(this).parent().find(".dropdown-menu").slideToggle();
    // (this).parent(".dropdown-item li").find(".dropdown-menu").slideToggle();
  })
});

