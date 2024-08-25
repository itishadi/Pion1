document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const galleryLinks = document.querySelectorAll('.gallery-link');
    let currentIndex = 0;

    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            openLightbox(link);
        });
    });

    function openLightbox(link) {
        lightbox.style.display = 'flex';
        lightboxImage.src = link.getAttribute('href');
        lightboxCaption.textContent = link.getAttribute('data-caption');
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + galleryLinks.length) % galleryLinks.length;
        openLightbox(galleryLinks[currentIndex]);
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    document.querySelector('.close').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents triggering lightbox click event
        closeLightbox();
    });

    // Close lightbox only when clicking outside the content area
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
