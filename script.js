const track = document.getElementById("carouselTrack");

let index = 0;
const cardsVisible = 3; // how many show at once
const cardWidth = 240;

function autoSlide() {
  const totalCards = track.children.length;

  index++;

  if (index > totalCards - cardsVisible) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(autoSlide, 2500);