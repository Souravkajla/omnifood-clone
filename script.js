// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  var header = document.getElementById("header");
  if (
    document.body.scrollTop > 773 ||
    document.documentElement.scrollTop > 773
  ) {
    header.style.backgroundColor = "#ffffff"; // Change background color when scrolled
  } else {
    header.style.backgroundColor = "#fdf2e9"; // Revert to default when at top
  }
  var headerhead = document.getElementById("headerhead");
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    headerhead.style.boxShadow = "0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)"; // Change background color when scrolled
    headerhead.style.position = "sticky";
  } else {
    headerhead.style.boxShadow = "0 0 0 0"; // Revert to default when at top
    headerhead.style.position = "relative";
  }
}

function showme() {
  var menutxt = document.getElementById("menu-txt");
  if (menutxt.style.display === "block") {
    menutxt.style.display = "none";
  } else {
    menutxt.style.display = "block";
  }
}
