$(document).ready(function () {
  // for sidebar
  $(".header-left i").click(function () {
    $("aside").toggleClass("aside-slide");
  });

  // for side bar drop downs
  $(".aside-bottom .dropdown-item > li a").click(function () {
    const parent_first = $(this).parent();
    parent_first.parent().siblings().find('li').children(".dropdown-menu").slideUp();
    parent_first.siblings().children(".dropdown-menu").slideUp();
    parent_first.find(".dropdown-menu").slideToggle();
    // (this).parent(".dropdown-item li").find(".dropdown-menu").slideToggle();
  })
});

