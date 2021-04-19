window.addEventListener("load", function () {
  var nodes = document.querySelectorAll("#lyric");
  for (var i = 0; i < nodes.length; i++) {
    var words = nodes[i].innerText;
    console.log(words);
    var html = "";
    for (var j = 0; j < words.length; j++) {
      if (words[j] == " ")
        html += words[j];
      else if (words[j] == "\n")
        html += words[j] + "<br>"
      else
        html += "<span>" + words[j] + "</span>"
    }
    nodes[i].innerHTML = html;

  }
})