# Evaluación del sitio Tapizate

> Documento de trabajo para seguimiento de mejoras.
> Última actualización: julio 2026

---

## ✅ Lo que más nos gusta

1. **Coherencia visual impecable** — paleta terracota + crema, Playfair Display + Inter. Sólida, cálida, profesional.
2. **Hero con foto real** — la foto de fondo con overlay gradiente muestra el producto en contexto real, no mockups.
3. **Storytelling bien armado** — progresión narrativa natural: historia → experiencia → caja → catálogo → instalación → envío → contacto.
4. **Experiencia Tapízate (4 items)** — bundle atractivo: tapiz + caja + incienso + pins.
5. **Precio único ($20.000)** — simplifica la decisión de compra. Sin fricción por comparar precios.
6. **CTA a WhatsApp en cada punto de contacto** — hero, cards, lightbox, flotante, contacto.
7. **Sección de instalación con galería** — reduce la objeción "no sé cómo colgarlo".
8. **Caja reutilizable como diferenciador** — filosofía "cosas que no se botan".
9. **Rendimiento del código** — HTML semántico, CSS limpio, JS minimalista. Sin frameworks pesados.
10. **Footer con tagline** — "No es solo decoración. Es la energía que eliges para tu espacio."

---

## ❌ Lo que menos nos gusta (y plan de mejora)

### 1. Imágenes demasiado pesadas
- ~~mandalas de ~3.2 MB, hero de 2.5 MB~~
- ~~Impacto: carga lenta en mobile, mala experiencia~~
- ✅ **Hecho**: comprimidas con ImageMagick (85% quality, max 1200px). Mandalas ~550 KB, hero 173 KB.
- Pendiente: ~~guia-instalacion.png aún pesa 2.3 MB~~ — evaluar conversión a JPEG

### 2. Catálogo sin dimensiones
- ~~No se informa el tamaño de los tapices~~
- ~~Impacto: el usuario tiene que preguntar, fricción~~
- ✅ **Hecho**: agregado `~2,10 × 2,25 m` en cada card del catálogo y en el lightbox.

### 3. Hero image podría mostrar un diseño reconocible
- La hero actual muestra un mandala horizontal, no necesariamente uno del catálogo.
- Impacto: baja conexión visual directa con lo que se vende.
- Pendiente: evaluar si cambiar la foto por un diseño estrella (Ganesha) en contexto real.

### 4. Sin reseñas ni testimonios
- No hay validación social visible.
- Impacto: para venta por WhatsApp, la confianza es clave.
- Pendiente: agregar sección de testimonios con fotos de clientes reales o historias de Instagram embebidas.

### 5. Sin dimensiones de los tapices → ✅ RESUELTO

### 6. Sin stock visible
- ~~No hay indicación de disponibilidad. El usuario no sabe si el diseño está disponible.~~
- ✅ **Hecho**: inventario.json con stock por diseño. Semáforo visual en cards y lightbox: verde (stock > 3), naranjo (1–3), rojo (agotado con botón deshabilitado).

### 6. Fotos lifestyle separadas del catálogo
- Las fotos de tapices colgados están solo en la galería de instalación.
- Ideal: cada diseño del catálogo debería tener su propia foto lifestyle.
- Pendiente: mediano plazo.

### 7. Separadores entre secciones
- ~~Línea horizontal + nudo perenne en los cortes entre secciones~~
- ✅ **Hecho**: se eliminó la línea. El nudo perenne quedó centrado sobre el corte sin línea.
- También se probó (y descartó): patrón geométrico textil indio, banda decorativa jaali.

---

## 📦 Catálogo — ¿suficientes modelos?

**Sí, para empezar.** 8 diseños es buen número. Recomendación:
- Agregar 1-2 solo cuando los actuales se vendan bien
- Retirar los que no se vendan para mantener 6-8 activos
- Identificar los más vendidos (Ganesha, Energía, Sol) y traer más en ese estilo

---

## 💪 Puntos fuertes para vender

| Aspecto | Rating | Comentario |
|---|---|---|
| Propuesta de valor | ⭐⭐⭐⭐⭐ | Bundle completo muy atractivo |
| Precio | ⭐⭐⭐⭐⭐ | $20K es un impulse buy |
| Marca | ⭐⭐⭐⭐ | Sólida, coherente, con personalidad |
| UX móvil | ⭐⭐⭐⭐ | Responsive bien trabajado |
| Confianza | ⭐⭐⭐ | Sin reseñas ni redes visibles aún |

## 🪟 Puntos débiles para vender

| Aspecto | Problema | Estado |
|---|---|---|
| Carga lenta | Imágenes pesadas matan conversión en mobile | ✅ Resuelto |
| Sin reviews | La gente busca validación social | Pendiente |
| Sin dimensiones | "¿de qué tamaño es?" | ✅ Resuelto |
| Sin stock visible | "¿sigue disponible?" | Pendiente |
| Solo WhatsApp | Bien para empezar, pero limitado | Por ahora ok |

---

## 💰 Opinión del precio

**$20.000 CLP es muy buen precio.** Equivale a salir a comer una vez. Para un producto artesanal + caja + incienso + pins, el valor percibido es alto.

No se está vendiendo "tapices", se está vendiendo "transformar tu espacio por $20K". El precio está en el punto justo de compra por impulso.

---

## 🪔 ¿Vender inciensos por separado?

**Sí, pero no en el mismo sitio aún.** Recomendación: validar primero que el tapiz venda consistente durante 2-3 meses. Si hay clientes recurrentes, agregar inciensos como combo complementario por WhatsApp (sin cambiar el sitio).

---

## 🚀 Próximos pasos priorizados

1. ~~Comprimir imágenes~~ ✅
2. ~~Agregar dimensiones~~ ✅
3. ~~Badge "Más vendido" en Ganesha~~ ✅
4. ~~Rediseñar separadores entre secciones~~ ✅
5. ~~Inventario con semáforo visual~~ ✅
6. **Testimonios / validación social** — siguiente mejora grande
7. **Fotos lifestyle por diseño** — mediano plazo
8. **FAQ** — descartado por ahora
9. **Google Analytics o Meta Pixel** — medir qué diseños interesan más
