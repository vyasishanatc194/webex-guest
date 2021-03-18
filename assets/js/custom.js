$(document).ready(function(){ 

  /* mobile menu */
  $("#menu-open").click(function(){
    $("#dashboard-menu-clone").addClass("active");
    $(".left-side-nav").addClass("active");
    $(".backdrop-menu-layer").addClass("active");
    $(".nav-dashboard-right").addClass("active");
  });

  $("#menu-closed").click(function(){
    $("#dashboard-menu-clone").removeClass("active");
    $(".left-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });

  $(".backdrop-menu-layer").click(function(){
    $("#dashboard-menu-clone").removeClass("active");
    $(".left-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });
  
  /* End of mobile menu */

  /* Desktop collapse menu */
  $("#collapse-nav").click(function(){
    $(this).toggleClass("collapsed-menu");
    $(".left-side-nav").toggleClass("collapse-menu");
    $(".header-dashboard").toggleClass("collapsed-header");
    $(".main-dashboard").toggleClass("dashboard-expand");
    $("body").toggleClass("mini-navbar");
    $(".left-side-menu").addClass("text-fixed-remove");
    setTimeout(function() {
      $(".left-side-menu").removeClass("text-fixed-remove");
    }, 200);
  });
  /* End of desktop collapse menu */

  $("[data-toggle='tooltip']").tooltip();

  let modalBackTransparent = document.querySelector(".modal-backdrop-transaprent");
  let modal = document.querySelector(".modal");
  if (modalBackTransparent == modal) {
    $(modalBackTransparent).on('show.bs.modal', function () {
      // $(".modal-backdrop").addClass("bg-transparent-color");
      $("body").addClass("modal-bg-transparent-color");
    })
  }
});