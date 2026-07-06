const tapices = [
    { img: 'img/tapiz-1.jpg', nombre: 'Mandala Sol' },
    { img: 'img/tapiz-2.jpg', nombre: 'Mandala Energía' },
    { img: 'img/tapiz-3.jpg', nombre: 'Mandala Om' },
    { img: 'img/tapiz-4.jpg', nombre: 'Cosmos' },
    { img: 'img/tapiz-5.jpg', nombre: 'Ganesha' },
    { img: 'img/tapiz-6.jpg', nombre: 'Loto' },
    { img: 'img/tapiz-7.jpg', nombre: 'Paisley' },
    { img: 'img/tapiz-8.jpg', nombre: 'Geométrico' },
    { img: 'img/tapiz-9.jpg', nombre: 'Árbol de la Vida' },
    { img: 'img/tapiz-10.jpg', nombre: 'Caleidoscopio' },
    { img: 'img/tapiz-11.jpg', nombre: 'Estrella' },
    { img: 'img/tapiz-12.jpg', nombre: 'Tradicional' },
];

const PRECIO = 20000;
const WHATSAPP = '56982864145';

function formatearPrecio(valor) {
    return '$' + valor.toLocaleString('es-CL') + ' CLP';
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    gallery.innerHTML = tapices.map((tapiz, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${tapiz.img}" alt="${tapiz.nombre}" loading="lazy">
            <div class="gallery-info">
                <h3>${tapiz.nombre}</h3>
                <p>${formatearPrecio(PRECIO)}</p>
                <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Tapizate, quiero comprar el tapiz ' + tapiz.nombre)}" target="_blank" rel="noopener" class="buy-link">
                    <i class="fab fa-whatsapp"></i> Comprar
                </a>
            </div>
        </div>
    `).join('');

    gallery.querySelectorAll('.gallery-item').forEach((item) => {
        const img = item.querySelector('img');
        img.addEventListener('click', () => openLightbox(item.dataset.index));
    });
}

function openLightbox(index) {
    const tapiz = tapices[index];
    if (!tapiz) return;

    const existing = document.querySelector('.lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.className = 'lightbox active';
    lb.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img src="${tapiz.img}" alt="${tapiz.nombre}">
        <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Tapizate, quiero comprar el tapiz ' + tapiz.nombre)}" target="_blank" rel="noopener" class="lightbox-buy">
            <i class="fab fa-whatsapp"></i> Comprar ${tapiz.nombre} — ${formatearPrecio(PRECIO)}
        </a>
    `;

    document.body.appendChild(lb);

    const close = () => lb.remove();
    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }, { once: true });
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

document.addEventListener('DOMContentLoaded', renderGallery);
