    const track = document.getElementById('carouselTrack');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 4;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); // cada 5 segundos