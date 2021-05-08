$(document).ready(function () {
  function show_participants_btn() {
    $("#main-small-screen-view-area")
      .addClass("show-area small-screen-area")
      .removeClass("hidden-area");
    $("#show-participants-btn-area")
      .addClass("hidden-area")
      .removeClass("show-area");
  }

  function first_minimize_screen() {
    $("#main-small-screen-view-area")
      .addClass("hidden-area")
      .removeClass("show-area small-screen-area");
    $("#show-participants-btn-area")
      .addClass("show-area")
      .removeClass("hidden-area");
  }

  function maximize_screen() {
    $("#main-big-screen-view-area .part-list-root-div")
      .addClass("show-area")
      .removeClass("hidden-area");
    $("#goto-presentor-view-area")
      .addClass("show-area")
      .removeClass("hidden-area");
    $("#chat-group-participant-area")
      .addClass("show-area")
      .removeClass("hidden-area");
    $("#disabled-chat-btn").addClass("disabled-btn");

    $("#small-screen-image").addClass("hidden-area").removeClass("show-area");
    $("#small-screen-video-div")
      .addClass("show-area")
      .removeClass("hidden-area");

    $("#in-call-video-bg-fixed-div").addClass("bg-color-hidden-video");
    $("#in-call-video-bg-fixed-div .in-call-video-bg").addClass("hidden-area");
  }

  function minimize_screen() {
    $("#main-big-screen-view-area .part-list-root-div")
      .removeClass("show-area")
      .addClass("hidden-area");
    $("#goto-presentor-view-area")
      .removeClass("show-area")
      .addClass("hidden-area");
    $("#chat-group-participant-area")
      .removeClass("show-area")
      .addClass("hidden-area");
    $("#disabled-chat-btn").removeClass("disabled-btn");

    $("#small-screen-image").removeClass("hidden-area").addClass("show-area");
    $("#small-screen-video-div")
      .removeClass("show-area")
      .addClass("hidden-area");

    $("#in-call-video-bg-fixed-div").removeClass("bg-color-hidden-video");
    $("#in-call-video-bg-fixed-div .in-call-video-bg").removeClass(
      "hidden-area"
    );

    $("#main-small-screen-view-area")
      .removeClass("hidden-area")
      .addClass("show-area small-screen-area");
  }

  function maximize_screen_add_class() {
    $("#main-small-screen-view-area")
      .addClass("maximize-show-area")
      .removeClass("small-screen-area");
  }

  function show_participants_btn_not_show() {
    $("#show-participants-btn-area")
      .addClass("hidden-area")
      .removeClass("show-area");
  }

  function click_participants() {
    $("#show-participants-btn").click(function () {
      show_participants_btn();

      $(".small-screen-area #minimize-screen-btn").click(function () {
        first_minimize_screen();
      });

      $(".small-screen-area #maximize-screen-btn").click(function () {
        maximize_screen();
        maximize_screen_add_class();

        $(".maximize-show-area #minimize-screen-btn").click(function () {
          minimize_screen();
          show_participants_btn_not_show();

          $(".small-screen-area #minimize-screen-btn").click(function () {
            first_minimize_screen();
          });
        });

        $(".maximize-show-area #goto-presentor-view-btn").click(function () {
          minimize_screen();
          show_participants_btn_not_show();

          $(".small-screen-area #minimize-screen-btn").click(function () {
            first_minimize_screen();
          });
        });
      });
    });
  }

  click_participants();

  if (
    window.matchMedia(
      "(max-width: 1000px) and (max-height: 500px) and (orientation: landscape)"
    ).matches
  ) {
    // $("#chat-group-participant-area").addClass("mobile-landscape-chat-open");

    $(".chat-btn-item-li").click(function () {
      $("#chat-group-participant-area").addClass("mobile-landscape-chat-open");
      $(".incall-area-div").addClass("no-zoom");

      $(".remove-chat-group-btn").click(function () {
        $("#chat-group-participant-area").removeClass(
          "mobile-landscape-chat-open"
        );
        $(".incall-area-div").removeClass("no-zoom");
      });
    });

    /*$(document).on("change", "#more-sm-check02-01", function () {
      if ($(this).is(":checked")) {
        console.log("if");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");

        click_participants();
        
      } else {
        console.log("else");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");
        
      }
    });*/
  }

  // onclick="location.href='chat.html';"

  // $("#minimize-screen-btn").click(function(){
  //   if(!$("#main-small-screen-view-area.maximize-show-area.show-area.small-screen-area")){
  //     console.log("minimize");
  //   }
  // });
});
