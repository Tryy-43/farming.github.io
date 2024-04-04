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
