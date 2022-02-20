function readMore() {
  var rMore = document.getElementById("readmore");
  var btnText = document.getElementById("readmore_btn");
  if (rMore.style.display === "none") {
    rMore.style.display = "block";
    btnText.innerHTML = "Read Less";
  } else {
    rMore.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
