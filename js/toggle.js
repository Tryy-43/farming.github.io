$(document).on("click", "#dropdown", function () {
  $(".drop").slideToggle(1000);
});
$(document).on("click", "#show", function () {
  $(".sidebar").slideDown(1000);
});
$(document).on("click", "#hideSidebar1", function () {
  $(".sidebar").slideUp(1000);
  $("#sidebar_drop").slideUp(1000);
});
$(document).on("click", "#sidebar_down", function () {
  $("#sidebar_drop").slideToggle(1000);
});
$(document).ready(function () {
  $("#coll").slideDown(500);
  $("#down1").toggleClass("fa-chevron-right fa-chevron-down");
});
$(document).on("click", "#title11", function () {
  $("#coll").slideToggle(500);
});
$(document).on("click", "#title2", function () {
  $("#coll2").slideToggle(500);
});

$(document).on("click", "#title3", function () {
  $("#coll3").slideToggle(500);
});

// let changeIcon = function (icon) {
//   icon.classList.toggle("fa-chevron-down");
// };
// $("#title3").on("click", function () {
//   $("#down3").toggleClass();
// });
$("#title11").on("click", function () {
  $("#down1").toggleClass("fa-chevron-right fa-chevron-down");
});

$("#title2").on("click", function () {
  $("#down2").toggleClass("fa-chevron-right fa-chevron-down");
});

$("#title3").on("click", function () {
  $("#down3").toggleClass("fa-chevron-right fa-chevron-down");
});
