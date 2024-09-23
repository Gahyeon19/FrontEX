window.addEventListener('scroll', function() {
  let favTexts = this.document.querySelectorAll(".fav-text");
  let value = this.scrollY;
  // console.log(value);
  if(value > 150) {
    favTexts.forEach((item) => item.style.animation = "slideBackward 2s ease-in-out forwards");
  } else {
    favTexts.forEach((item) => item.style.animation = "slideForward 2s ease-in-out");
  }
})

