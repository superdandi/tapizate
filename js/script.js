const tapices = [
    { img: 'img/mandala-ganesha.jpg', nombre: 'Mandala Ganesha', desc: 'Nuestro diseño favorito. Un símbolo de prosperidad, sabiduría y nuevos comienzos ✨ el más elegido para transformar hogares.' },
    { img: 'img/mandala_4876.jpg', nombre: 'Mandala Aura', desc: 'Un diseño que transmite calma, equilibrio y conexión 🌿 perfecto para transformar cualquier espacio en un rincón de paz.' },
    { img: 'img/mandala_4883.jpg', nombre: 'Mandala Cosmos', desc: 'Profundo, intenso y lleno de energía ✨ ideal para espacios con personalidad.' },
    { img: 'img/mandala_4877.jpg', nombre: 'Mandala Ohm', desc: 'Un diseño con energía espiritual y vibración especial ✨ perfecto para meditación o espacios de conexión interior.' },
    { img: 'img/mandala_4878.jpg', nombre: 'Mandala Energía', desc: 'Color, movimiento y vida en un solo diseño ✨ ideal para levantar cualquier espacio.' },
    { img: 'img/mandala_4879.jpg', nombre: 'Mandala Sol', desc: 'Un diseño que irradia luz, calidez y buena vibra ✨ perfecto para darle vida a tu hogar.' },
    { img: 'img/mandala_4880.jpg', nombre: 'Mandala Elefante', desc: 'Un diseño que representa sabiduría, fuerza y buena fortuna ✨ ideal para espacios que buscan protección y estabilidad.' },
    { img: 'img/mandala_4881.jpg', nombre: 'Mandala Gaja', desc: 'Un diseño que evoca la nobleza y majestuosidad del elefante sagrado ✨ perfecto para quienes buscan un símbolo de poder y equilibrio.' },
];

const PRECIO = 20000;
const MEDIDAS = '~2,10 × 2,25 m';
const WHATSAPP = '56982864145';
let inventario = new Map();

function formatearPrecio(valor) {
    return '$' + valor.toLocaleString('es-CL') + ' CLP';
}

function getStockInfo(nombre) {
    const stock = inventario.get(nombre);
    if (stock === undefined) return null;
    if (stock === 0) return { text: 'Agotado', cls: 'out' };
    if (stock <= 3) return stock === 1
        ? { text: '¡Última unidad!', cls: 'low' }
        : { text: `Últimas ${stock} unidades`, cls: 'low' };
    return { text: 'En stock', cls: 'available' };
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    gallery.innerHTML = tapices.map((tapiz, index) => {
        const stockInfo = getStockInfo(tapiz.nombre);

        return `
        <div class="gallery-item" data-index="${index}">
            <div class="gallery-img-wrap">
                ${index === 0 ? '<span class="badge-bestseller">Más vendido</span>' : ''}
                ${stockInfo ? `<span class="badge-stock badge-stock--${stockInfo.cls}">${stockInfo.text}</span>` : ''}
                <img src="${tapiz.img}" alt="${tapiz.nombre}" loading="lazy">
            </div>
            <div class="gallery-info">
                <h3>${tapiz.nombre}</h3>
                <p class="gallery-desc">${tapiz.desc}</p>
                <p class="gallery-size">${MEDIDAS}</p>
                <p class="gallery-price">${formatearPrecio(PRECIO)}</p>
                ${stockInfo && stockInfo.cls === 'out'
                    ? `<span class="buy-link buy-link--disabled"><i class="fab fa-whatsapp"></i> Agotado</span>`
                    : `<a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Tapizate, quiero comprar el tapiz ' + tapiz.nombre)}" target="_blank" rel="noopener" class="buy-link">
                        <i class="fab fa-whatsapp"></i> Comprar
                       </a>`
                }
            </div>
        </div>`;
    }).join('');

    gallery.querySelectorAll('.gallery-item').forEach((item) => {
        const img = item.querySelector('img');
        img.addEventListener('click', () => openLightbox(item.dataset.index));
    });
}

function openLightbox(index) {
    const tapiz = tapices[index];
    if (!tapiz) return;

    const stockInfo = getStockInfo(tapiz.nombre);

    const existing = document.querySelector('.lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.className = 'lightbox active';
    lb.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <div class="lightbox-content">
            <img src="${tapiz.img}" alt="${tapiz.nombre}">
            <div class="lightbox-info">
                <h3>${tapiz.nombre}</h3>
                ${stockInfo ? `<p class="lightbox-stock lightbox-stock--${stockInfo.cls}">${stockInfo.text}</p>` : ''}
                <p class="lightbox-desc">${tapiz.desc}</p>
                <p class="lightbox-size">${MEDIDAS}</p>
                <p class="lightbox-price">${formatearPrecio(PRECIO)}</p>
                ${stockInfo && stockInfo.cls === 'out'
                    ? `<span class="lightbox-buy lightbox-buy--disabled"><i class="fab fa-whatsapp"></i> Agotado</span>`
                    : `<a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Tapizate, quiero comprar el tapiz ' + tapiz.nombre)}" target="_blank" rel="noopener" class="lightbox-buy">
                        <i class="fab fa-whatsapp"></i> Comprar
                       </a>`
                }
            </div>
        </div>
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

async function cargarInventario() {
    try {
        const res = await fetch('inventario.json');
        const data = await res.json();
        data.forEach(item => inventario.set(item.nombre, item.stock));
    } catch {
        // Sin inventario: todo se muestra normal, sin badges de stock
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await cargarInventario();
    renderGallery();

    // Parallax suave en el hero
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    heroBg.style.transform = `scale(0.85) translateY(${scrolled * 0.2}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
});
