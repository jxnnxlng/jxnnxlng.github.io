// Bilderdaten
const artworks = [
    { 
        category: 'stoffe',
        images: [
            { webp: 'images/IMG_1153.webp', jpg: 'images/IMG_1153.jpg' },
            { webp: 'images/IMG_1154.webp', jpg: 'images/IMG_1154.jpg' }
        ]
    },
    {
        category: 'oelbilder',
        images: [
            { webp: 'images/IMG_1163.webp', jpg: 'images/IMG_1163.jpg' },
            { webp: 'images/IMG_1164.webp', jpg: 'images/IMG_1164.jpg' },
            { webp: 'images/IMG_1165.webp', jpg: 'images/IMG_1165.jpg' },
            { webp: 'images/IMG_1166.webp', jpg: 'images/IMG_1166.jpg' }
        ]
    },
    {
        category: 'tickets',
        images: [
            { webp: 'images/IMG_1155.webp', jpg: 'images/IMG_1155.jpg' },
            { webp: 'images/IMG_1156.webp', jpg: 'images/IMG_1156.jpg' }
        ]
    },
    {
        category: 'portraits',
        images: [
            { webp: 'images/IMG_1157.webp', jpg: 'images/IMG_1157.jpg' },
            { webp: 'images/IMG_1158.webp', jpg: 'images/IMG_1158.jpg' },
            { webp: 'images/IMG_1159.webp', jpg: 'images/IMG_1159.jpg' }
        ]
    }
];

// Galerie generieren
const grid = document.querySelector('.dynamic-grid');
artworks.forEach(category => {
    category.images.forEach(img => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <picture>
                <source srcset="${img.webp}" type="image/webp">
                <img src="${img.jpg}" alt="${category.category}" loading="lazy">
            </picture>
        `;
        card.addEventListener('click', () => openModal(category.images, img));
        grid.appendChild(card);
    });
});

// Modal mit Swiper
let swiper;
function openModal(images, current) {
    const modal = document.querySelector('.modal');
    const wrapper = modal.querySelector('.swiper-wrapper');
    wrapper.innerHTML = '';
    
    images.forEach(img => {
        wrapper.innerHTML += `
            <div class="swiper-slide">
                <picture>
                    <source srcset="${img.webp}" type="image/webp">
                    <img src="${img.jpg}" alt="Kunstwerk">
                </picture>
            </div>
        `;
    });

    modal.style.display = 'flex';
    swiper = new Swiper('.swiper', {
        initialSlide: images.indexOf(current),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

// Schließen des Modals
document.querySelector('.modal').addEventListener('click', (e) => {
    if(e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
});

// Scroll-Animationen
gsap.from('.art-card', {
    scrollTrigger: {
        trigger: '.dynamic-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 1.2
});
