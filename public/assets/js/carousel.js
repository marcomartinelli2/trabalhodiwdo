document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('.carousel-inner');

  fetch('http://localhost:3000/carousel')
    .then(response => response.json())
    .then(carouselItems => {
      const carouselContent = carouselItems.map((item, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          ${item.type === 'image' ? `<img src="${item.src}" class="d-block w-100" alt="${item.alt}">` : ''}
          ${item.type === 'video' ? `<iframe width="560" height="315" src="${item.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : ''}
        </div>
      `).join('');
      carouselInner.innerHTML = carouselContent;
    })
    .catch(error => console.error('Error fetching carousel data:', error));
});