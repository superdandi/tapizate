# Evaluación del sitio Tapizate

> Documento de trabajo interno — seguimiento de mejoras.
> No se pushea al repositorio.
> Última actualización: julio 2026

---

## 🏆 Puntajes actuales

| Dimensión | Nota | Resumen |
|---|---|---|
| **Diseño** | 9/10 | Paleta impecable, video hero inmersivo, tipografía cuidada, responsive sólido, nudo perenne como sello de marca |
| **Capacidad de venta** | 9/10 | Precio justo, bundle atractivo, CTA en cada punto, semáforo de stock, dimensiones visibles, testimonios reales |
| **General** | 9/10 | Sólido para estático. Marca definida, código limpio, navegación fluida, testimonios reales. Subió de 7/10 desde la evaluación inicial |

---

## ✅ Lo que más me gusta

1. **Video hero con contenido real** — abrir la caja en vivo es mucho más inmersivo que una foto estática. Transmite la experiencia real.
2. **Coherencia visual impecable** — paleta terracota + crema, Playfair Display + Inter. Sólida, cálida, profesional.
3. **Storytelling bien armado** — progresión narrativa natural: historia → experiencia → caja → catálogo → instalación → envío → contacto. El usuario entiende la propuesta sin pensar.
4. **Experiencia Tapízate (4 items)** — bundle atractivo: tapiz + caja + incienso + pins. Se entiende el valor agregado al instante.
5. **Precio único ($20.000)** — simplifica la decisión de compra. Sin fricción por comparar precios o tamaños.
6. **Semáforo de stock** — verde/disponible, naranjo/últimas, rojo/agotado con botón deshabilitado. Genera urgencia real.
7. **CTA a WhatsApp en cada punto de contacto** — hero, cards, lightbox, flotante, contacto. Nunca hay que buscar cómo comprar.
8. **Nudo perenne como firma visual** — en navbar, separadores, footer, sección de gracias. Sutil pero consistente.
9. **Catálogo variado (12 diseños)** — suficiente variedad sin abrumar. Incluye best seller destacado con badge.
10. **Caja reutilizable como diferenciador de marca** — filosofía "cosas que no se botan" conecta emocionalmente.
11. **Rendimiento del código** — HTML semántico, CSS limpio, JS minimalista. Sin frameworks. Carga rápida tras compresión.

---

## ❌ Lo que menos me gusta

1. **Sin testimonios de clientes reales** — es lo que más falta. Para venta por WhatsApp, la validación social es clave. Fotos de clientes con el tapiz colgado + su frase.
2. **Fotos del catálogo son todas planas** — cada diseño necesita su foto lifestyle (colgado en pared real) como las que están en la galería de instalación.
3. **Hero video único para todo el sitio** — no cambia por temporada, promociones o colecciones. Sería ideal rotarlo.
4. **Sin medición** — no hay analytics. No sabemos qué diseños se miran más, cuánto tiempo pasa la gente en el sitio, etc.
5. **Sin historial de reabastecimiento** — cuando un diseño se agota, no hay forma de que el usuario deje su correo para que le avisen cuando vuelva.

---

## 📦 Catálogo — ¿suficientes modelos?

**12 diseños es un buen número para esta etapa.** Variedad sin abrumar.

Recomendación:
- Identificar los 3 más vendidos y traer más diseños en ese estilo
- Retirar los que no se vendan en 2-3 meses
- Mantener entre 10-15 activos

---

## 💪 Puntos fuertes para vender

| Aspecto | Rating | Comentario |
|---|---|---|
| Propuesta de valor | ⭐⭐⭐⭐⭐ | Bundle completo muy atractivo |
| Precio | ⭐⭐⭐⭐⭐ | $20K es un impulse buy |
| Marca | ⭐⭐⭐⭐⭐ | Sólida, coherente, con personalidad |
| UX móvil | ⭐⭐⭐⭐ | Responsive bien trabajado |
| Confianza | ⭐⭐⭐⭐⭐ | 4 testimonios reales de clientes con fotos |
| Velocidad de carga | ⭐⭐⭐⭐⭐ | Imágenes comprimidas, carga rápida |

## 🪟 Puntos débiles para vender

| Aspecto | Problema | Estado |
|---|---|---|
| Carga lenta | Imágenes pesadas | ✅ Resuelto |
| Sin dimensiones | "¿de qué tamaño es?" | ✅ Resuelto |
| Sin stock visible | "¿sigue disponible?" | ✅ Resuelto |
| Sin reviews | Validación social | ✅ Resuelto |
| Hero sin conexión | No muestra un diseño del catálogo | 🟡 Pendiente |
| Sin fotos lifestyle por diseño | No se ve el diseño en contexto | 🟡 Pendiente |
| Sin analytics | No hay medición | 🟢 Baja prioridad |

---

## 💰 Opinión del precio

**$20.000 CLP es muy buen precio.** Para un producto artesanal + caja + incienso + pins, el valor percibido es alto. No compites con "tapices genéricos", compites con "transformar tu espacio por $20K". Es un impulse buy.

---

## 🪔 ¿Vender inciensos por separado?

**Sí, pero no en el mismo sitio aún.** Recomendación: validar primero que el tapiz venda consistente durante 2-3 meses. Si hay clientes recurrentes, agregar inciensos como combo complementario por WhatsApp.

---

## 📋 Bitácora de mejoras implementadas

| # | Mejora | Estado | Iteraciones |
|---|---|---|---|
| 1 | Comprimir imágenes | ✅ | JPEG 85%, max 1200px. Mandalas ~550 KB, hero 173 KB |
| 2 | Agregar dimensiones al catálogo | ✅ | `~2,10 × 2,25 m` en cards y lightbox |
| 3 | Badge "Más vendido" en Ganesha | ✅ | Badge visual en la imagen |
| 4 | Separadores entre secciones | ✅ | Pasó por: línea+logo → banda jaali → solo nudo perenne |
| 5 | Inventario con semáforo visual | ✅ | JSON + fetch + semáforo (verde/naranjo/rojo) + botón deshabilitado |
| 6 | Parallax + zoom hover | ⚠️ Parcial | Zoom hover implementado. Parallax implementado y luego desactivado |
| 7 | Video hero | ✅ | Pasó por: rotación → scale → reemplazo por horizontal.nativo (1280×720) |
| 8 | Catálogo 8→12 diseños | ✅ | Agregados: Pavo Real, Marihuana, Tibetano, Ging Gang |
| 9 | Soporte imágenes 1:1 | ✅ | aspect-ratio 3:4 en wrapper, object-fit cover, sin fondo blanco |
| 10 | Fotos lifestyle instalación | ✅ | 2 nuevas fotos agregadas (total: 8 en galería) |
| 11 | Testimonios / validación social | ✅ | 4 testimonios reales: Paulo Rebel DJ, hay_un_gato_en_mi_cama, peumaveg, HidalgoBread |

### Cosas que se probaron y descartaron
- Patrón geométrico textil indio en fondos → ❌ no gustó
- Banda decorativa jaali entre secciones → ❌ no gustó
- Línea horizontal + nudo perenne en separadores → ❌ no gustó
- Parallax en hero video → ❌ desactivado

---

## 🚀 Próximos pasos priorizados

| Prioridad | Mejora | Esfuerzo | Impacto |
|---|---|---|---|
| 🔴 Alta | **Testimonios / validación social** | ✅ Hecho | 4 testimonios reales con fotos de clientes. Paulo Rebel DJ, hay_un_gato_en_mi_cama, peumaveg, HidalgoBread |
| 🟡 Media | **Fotos lifestyle por diseño** | Alto (fotografía) | Alto — muestra el producto en contexto |
| 🟡 Media | **Scroll animations** (entrada suave al hacer scroll) | Bajo | Medio — el sitio se siente más vivo |
| 🟢 Baja | **Google Analytics / Meta Pixel** | Bajo | Medio — saber qué diseños interesan |
| 🟢 Baja | **Notificación de reabastecimiento** (formulario para agotados) | Medio | Bajo — útil cuando haya más volumen |
| ⚪ Futuro | **FAQ** (lavado, materiales, devoluciones) | Bajo | Medio — reduce preguntas por WhatsApp |
| ⚪ Futuro | **Carrito de compras + pago** | Alto | Alto — cuando el volumen lo justifique |

---

## 💡 Ideas para más adelante

- **Modo día/noche** — cambiar paleta sutilmente según hora
- **Galería de Instagram embebida** — feed en vivo del @tapizate
- **Mini-video por diseño** — cada tapiz con un loop corto mostrando textura
- **Página de "cómo cuidar tu tapiz"** — contenido valuado para SEO
- **Bundle "lleva 2, ahorra"** — promoción temporal
- **Test de personalidad** — "¿qué mandala eres?" para engagement
