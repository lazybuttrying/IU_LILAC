
ul = document.getElementsByTagName('nav')[0];
middle = document.getElementsByClassName('middle')[0];
bg = document.getElementsByClassName('background')[0];

function menu() {
  console.log(ul);
  if (ul.style.display == "none") {
    console.log(ul);
    ul.style.display = "flex";
    middle.style.filter = "blur(10px)";
    bg.style.filter = "blur(10px)";
  } else {
    console.log(ul);
    ul.style.display = "none";
    middle.style.filter = "blur(0px)";
    bg.style.filter = "blur(0px)";
  }
}

$(window).resize(function () {
  ul.style.display = "flex";
  var width = window.innerWidth;
  console.log(width)
  if (width > 700) {
    ul.style.display = "flex";
    middle.style.filter = "blur(0px)";
    bg.style.filter = "blur(0px)";
  }
  else
    ul.style.display = "none";
});