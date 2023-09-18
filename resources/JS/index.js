window.addEventListener("scroll", function() {
  var parallax = document.getElementById('parallax');
  var offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
});
