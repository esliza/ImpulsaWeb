# 🚀 GUÍA RÁPIDA - CÓMO EMPEZAR CON IMPULSAWEB

## ⚡ Pasos Iniciales (5 minutos)

### 1. Personaliza tus datos de contacto

Abre `index.html` y busca estas líneas para cambiar:

**Línea ~102** - WhatsApp en el Hero:
```html
href="https://wa.me/+51946885790?text=..."
```
Reemplaza `+51946885790` con tu número.

**Línea ~235** - Email en contacto:
```html
href="mailto:hola@impulsaweb.com"
```
Reemplaza con tu email.

**Línea ~538** - WhatsApp en Contacto Info:
```html
href="https://wa.me/+51946885790?text=..."
```
Reemplaza con tu número.

### 2. Personaliza el nombre del condominio

En `index.html`, busca y cambia referencias a "condominio":
- El hero menciona "300 departamentos"
- Las secciones de proceso hablan de "vecinos"

Personalizalo según tu condominio.

### 3. Prueba la página localmente

1. Abre `index.html` directamente en tu navegador
2. Prueba todos los botones y enlaces
3. Verifica que se vea bien en móvil (F12 → Responsive mode)

## 🎨 Personalización Intermedia (15 minutos)

### Cambiar Colores

Abre `styles.css` y busca la sección `:root`:

```css
--color-primary: #6366F1;      /* Azul/Violeta actual */
--color-secondary: #3B82F6;    /* Azul actual */
--color-accent: #8B5CF6;       /* Violeta actual */
```

Puedes usar cualquier color hexadecimal. Ej:
- `#FF6B6B` para rojo
- `#4ECDC4` para turquesa
- `#95E1D3` para menta

### Cambiar Textos de Secciones

- **Hero**: Línea ~75
- **El Problema**: Línea ~130
- **La Solución**: Línea ~180
- **Tipos de Negocios**: Línea ~280
- **Cómo Funciona**: Línea ~330

Busca y edita directamente en el HTML.

### Cambiar Tipos de Negocios

En el formulario, línea ~550 aproximadamente:

```html
<option value="menu">Menús diarios</option>
<option value="postres">Postres y repostería</option>
```

Agrega o elimina opciones según necesites.

## 🔌 Configuración Avanzada (30+ minutos)

### Conectar a un Backend

1. Descomenta estas líneas en `script.js` (línea ~170):
```javascript
const response = await fetch('/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

2. Crea un endpoint en tu servidor que reciba POST en `/api/contacto`

3. Guarda los datos en una base de datos

### Agregar Google Analytics

1. Obtén tu ID de Google Analytics
2. En `script.js` (línea ~450 aprox), descomenta:
```javascript
gtag('config', 'TU_ID_AQUI');
```

### Agregar Más Testimonios

En `index.html`, busca "testimonio-card" y duplica la estructura:

```html
<div class="testimonio-card">
    <div class="testimonios-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonio-texto">"Tu testimonio aquí"</p>
    <div class="testimonio-autor">
        <div class="autor-avatar">XX</div>
        <div>
            <p class="autor-nombre">Nombre</p>
            <p class="autor-rol">Rol</p>
        </div>
    </div>
</div>
```

## 📱 Verificar Responsive

1. Abre la página en Chrome
2. Presiona `F12` (Inspeccionar)
3. Haz clic en el ícono de teléfono (Device Toolbar)
4. Prueba con:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

**Debe verse bien en todos.**

## 🚀 Subir a Internet

### Opción 1: Hosting Gratuito (Recomendado para empezar)

**Netlify**:
1. Ve a netlify.com
2. Arrastra la carpeta "Impulsa web" 
3. ¡Listo! Tu sitio está online

**GitHub Pages**:
1. Sube los archivos a un repositorio GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Espera a que se publique

### Opción 2: Hosting Pago

- Bluehost (fácil, $2.95/mes)
- SiteGround ($3/mes)
- GoDaddy ($6/mes)

Todos incluyen almacenamiento y dominio.

## ✅ Checklist de Lanzamiento

- [ ] Cambié WhatsApp a mi número
- [ ] Cambié email a mi correo
- [ ] Personalicé textos del condominio
- [ ] Probé en desktop, tablet y móvil
- [ ] Probé todos los botones
- [ ] Probé el formulario (debe mostrar ✅)
- [ ] Cambié colores si lo deseé
- [ ] Subo el sitio a internet

## 🆘 Problemas Comunes

**P: La página se ve fea en móvil**
R: Abre DevTools (F12) y activa Responsive Mode. Asegúrate de que `<meta name="viewport"...` esté en el HTML.

**P: Los colores no cambiaron**
R: Limpia la caché del navegador (Ctrl+Shift+Delete) y recarga.

**P: El formulario no funciona**
R: Abre la consola (F12) y revisa si hay errores. Debe haber un ✅ verde cuando envías.

**P: WhatsApp no abre**
R: Verifica que el número esté correcto con código de país (+51, +54, etc).

**P: No me llega el email de contacto**
R: Necesitas conectar un backend. Ahora solo se muestra el modal ✅.

## 📚 Archivos Principales

- `index.html` - Toda la estructura y contenido
- `styles.css` - Todo el diseño y estilos
- `script.js` - Toda la interactividad
- `config.js` - Configuración (opcional)
- `README.md` - Documentación completa

## 💡 Pro Tips

1. Usa emojis en los títulos para que sea más colorido (🍜 🍰 🛒 🏠)
2. Mantén los textos cortos y claros
3. Los vecinos no quieren leer párrafos, quieren soluciones
4. Usa el lenguaje cercano y casual
5. Los testimonios son tus mejores aliados - pide opiniones reales

## 🎯 Siguiente Fase

Una vez que el sitio funcione:

1. Invita a emprendedores a crear perfiles
2. Crea perfiles de productos/negocios
3. Implementa sistema de búsqueda
4. Agrega imágenes reales de negocios
5. Considera una app móvil después

---

**¿Necesitas ayuda?** Revisa el archivo `README.md` para documentación más detallada.

**¿Listo para lanzar?** ¡Sube tu sitio a internet y comparte el link en el grupo de WhatsApp! 🚀
