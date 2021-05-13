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

  $("#main-small-screen-view-area").removeClass("top-left-side-small-screen");

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

    /* Default screen */
    $("#main-small-screen-view-area")
      .addClass("show-area small-screen-area top-left-side-small-screen")
      .removeClass("hidden-area");
    $("#main-small-screen-view-area #small-screen-image").attr(
      "src",
      "assets/images/user.jpg"
    );

    function mobileCloseParticipantScreen() {
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
        .addClass("top-left-side-small-screen")
        .removeClass("hidden-area");

      // $("#new-tplf-screen-div")
      //   .removeClass("hidden-area")
      //   .addClass("show-area");

      $("#more-sm-check02-03").prop("checked", false);
    }

    $(document).on("change", "#more-sm-check02-03", function () {
      if ($(this).is(":checked")) {
        // console.log("if");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");

        maximize_screen();
        $("#main-small-screen-view-area")
          .addClass("show-area small-screen-area")
          .removeClass("hidden-area");
        $("#show-participants-btn-area")
          .addClass("hidden-area")
          .removeClass("show-area");

        $("#main-small-screen-view-area").removeClass(
          "small-screen-area top-left-side-small-screen"
        );

        // $("#new-tplf-screen-div").addClass("hidden-area").removeClass("show-area");

        $("#goto-presentor-view-btn").click(function () {
          mobileCloseParticipantScreen();
        });
      } else {
        // console.log("else");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");

        if ($("#more-sm-check02-03").prop("checked", false)) {
          mobileCloseParticipantScreen();
        }
      }
    });
  }

  if (
    window.matchMedia("(min-width: 1025px) and (max-width: 1440px)").matches
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

    /* Default screen */
    $("#main-small-screen-view-area")
      .addClass("show-area small-screen-area top-left-side-small-screen")
      .removeClass("hidden-area");
    $("#main-small-screen-view-area")
      .parent()
      .addClass("root-top-left-side-small-screen");
    $("#main-small-screen-view-area #small-screen-image").attr(
      "src",
      "assets/images/user.jpg"
    );
    $(
      ".main-desk-div.top-left-side-small-screen #goto-presentor-view-area #goto-presentor-view-btn"
    ).text("Go to Participant View");

    function tabCloseParticipantScreen() {
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
        .addClass("top-left-side-small-screen")
        .removeClass("hidden-area");

      $(
        ".main-desk-div.top-left-side-small-screen #goto-presentor-view-area #goto-presentor-view-btn"
      ).text("Go to Participant View");
    }

    $(
      ".main-desk-div.top-left-side-small-screen #goto-presentor-view-area #goto-presentor-view-btn"
    ).click(function () {
      maximize_screen();
      $("#main-small-screen-view-area")
        .addClass("show-area small-screen-area")
        .removeClass("hidden-area");
      $("#show-participants-btn-area")
        .addClass("hidden-area")
        .removeClass("show-area");

      $("#main-small-screen-view-area").removeClass(
        "small-screen-area top-left-side-small-screen"
      );
      $(
        ".main-desk-div #goto-presentor-view-area #goto-presentor-view-btn"
      ).text("Go to Presentor View");

      $(
        ".main-desk-div #goto-presentor-view-area.show-area #goto-presentor-view-btn"
      ).click(function () {
        tabCloseParticipantScreen();
      });
    });
  }

  // if (window.matchMedia("(min-width: 1025px) and (orientation: landscape)").matches) {
  //   show_participants_btn();
  //   maximize_screen();
  //   maximize_screen_add_class();
  // }

  if (
    window.matchMedia(
      "(min-width: 768px) and (max-width: 1024px) and (min-height: 680px)"
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

    /* Default screen */
    $("#main-small-screen-view-area")
      .addClass("show-area small-screen-area top-left-side-small-screen")
      .removeClass("hidden-area");
    $("#main-small-screen-view-area #small-screen-image").attr(
      "src",
      "assets/images/user.jpg"
    );

    function mobileCloseParticipantScreen() {
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
        .addClass("top-left-side-small-screen")
        .removeClass("hidden-area");

      // $("#new-tplf-screen-div")
      //   .removeClass("hidden-area")
      //   .addClass("show-area");

      $("#more-sm-check02-03").prop("checked", false);
    }

    $(document).on("change", "#more-sm-check02-03", function () {
      if ($(this).is(":checked")) {
        // console.log("if");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");

        maximize_screen();
        $("#main-small-screen-view-area")
          .addClass("show-area small-screen-area")
          .removeClass("hidden-area");
        $("#show-participants-btn-area")
          .addClass("hidden-area")
          .removeClass("show-area");

        $("#main-small-screen-view-area").removeClass(
          "small-screen-area top-left-side-small-screen"
        );

        // $("#new-tplf-screen-div").addClass("hidden-area").removeClass("show-area");

        $("#goto-presentor-view-btn").click(function () {
          mobileCloseParticipantScreen();
        });
      } else {
        // console.log("else");
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");

        if ($("#more-sm-check02-03").prop("checked", false)) {
          mobileCloseParticipantScreen();
        }
      }
    });
  }
});
