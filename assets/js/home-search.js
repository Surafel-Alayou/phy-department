
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("my-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-menu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function showMenu() {
  document.getElementById("search-menu").style.display = "block";
}

function hideMenu() {
  var input = document.getElementById("my-search");
  var menu = document.getElementById("search-menu");

  // Delay the hiding of the menu to allow selecting an option
  setTimeout(function() {
    if (!input.matches(":focus") && !menu.matches(":hover")) {
      menu.style.display = "none";
    }
  }, 200);
}
