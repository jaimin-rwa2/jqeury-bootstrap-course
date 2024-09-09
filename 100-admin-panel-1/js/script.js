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

var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#about-chart"), options);

chart.render();
