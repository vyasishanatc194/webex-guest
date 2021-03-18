$(document).ready(function () {
  $("#form-search").focus(function (e) {
    $("#search-dropdown").addClass("show");
    $(".back-dropdown").click(function () {
      $("#search-dropdown").removeClass("show");
    });
  });
});
