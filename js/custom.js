// ------------------------------------------------
// Falcon Technologies - Coming Soon Page
// Trimmed from the Axio Coming Soon Template
// Only the logic this page actually uses is kept:
//   1. Loader & Main Section Loading Animation
//   2. Animated Headline
//   3. Countdown
// ------------------------------------------------

$(window).on("load", function () {
  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function () {
    $(".loader").addClass("fade-dark");
    $(".loader__logo").removeClass("slideInDown").addClass("flipOutY");
    $(".loader__caption").removeClass("slideInUp").addClass("fadeOutDown");
  }, 1000);

  setTimeout(function () {
    $(".loader").addClass("loaded");
  }, 1700);

  setTimeout(function () {
    $("#main").addClass("loaded");
  }, 1900);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Animated Headline Start
  // --------------------------------------------- //
  var animationDelay = 2500,
    revealDuration = 600,
    revealAnimationDelay = 1500;

  function initHeadline() {
    animateHeadline($(".headline__title"));
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);
      var spanWrapper = headline.find(".words-wrapper"),
        newWidth = spanWrapper.width() + 10;
      spanWrapper.css("width", newWidth);

      setTimeout(function () {
        hideWord(headline.find(".is-visible").eq(0));
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    $word
      .parents(".words-wrapper")
      .animate({ width: "2px" }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
  }

  function showWord($word) {
    $word
      .parents(".words-wrapper")
      .animate({ width: $word.width() + 10 }, revealDuration, function () {
        setTimeout(function () {
          hideWord($word);
        }, revealAnimationDelay);
      });
  }

  function takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }

  setTimeout(function () {
    initHeadline();
  }, 600);
  // --------------------------------------------- //
  // Animated Headline End
  // --------------------------------------------- //
});

$(function () {
  "use strict";

  // --------------------------------------------- //
  // Countdown Start
  // Fixed target date: 45 days from 04-Aug-2026 → 18-Sep-2026
  // Anchor: UTC+4 (Dubai/UAE)
  // NOTE: $.countdown.UTCDate month is 0-indexed (0=Jan ... 8=Sep)
  // --------------------------------------------- //
  $("#countdown").countdown({
    until: $.countdown.UTCDate(+4, 2026, 8, 18), // month 8 = September
    format: "D",
  });
  // --------------------------------------------- //
  // Countdown End
  // --------------------------------------------- //
});
