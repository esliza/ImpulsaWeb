# ImpulsaWeb - Catálogo Digital para Condominios

## 📋 Descripción

ImpulsaWeb es una página web diseñada específicamente para emprendedores de condominios. Permite que los vecinos que tienen negocios (menús, tiendas, servicios, alquileres) se reúnan en un catálogo ordenado y fácil de usar, reemplazando el caos del grupo de WhatsApp.

## 🎯 Objetivo Principal

Solucionar el problema de desorden, información fragmentada y ventas perdidas en grupos de WhatsApp de emprendimientos de condominios, proporcionando una plataforma centralizada, profesional y fácil de usar.

## 🏗️ Estructura del Proyecto

```
Impulsa web/
├── index.html          # Estructura HTML completa
├── styles.css          # Estilos responsivos
├── script.js           # Funcionalidad e interactividad
└── README.md          # Este archivo
```

## 🎨 Características Principales

### Secciones del Sitio

1. **Header con Logo Personalizado** - Logo SVG de edificio que representa el condominio
2. **Hero Section** - Mensaje claro y cercano sobre la propuesta de valor
3. **Sección "El Problema"** - Identificación de problemas reales (caos, desorden, ventas perdidas)
4. **Sección "La Solución"** - Cómo ImpulsaWeb resuelve cada problema
5. **Tipos de Negocios** - Muestra los tipos de emprendimientos que pueden usar la plataforma
6. **Cómo Funciona** - 3 perspectivas: clientes, emprendedores, administración
7. **¿Por Qué Ahora?** - Justificación para implementar el proyecto
8. **Testimonios** - Historias reales del grupo piloto
9. **Formulario de Contacto** - Sistema de registro para el grupo piloto
10. **Footer** - Información de contacto y enlaces

### Diseño Responsivo

- ✅ Optimizado para desktop, tablet y móvil
- ✅ Navegación adaptable con menú hamburguesa
- ✅ Todas las secciones se ajustan a pantallas pequeñas

### Interactividad

- ✅ Menú móvil con animación de hamburguesa
- ✅ Formulario con validación en tiempo real
- ✅ Selector condicional para mostrar tipo de negocio si es emprendedor
- ✅ Animaciones suaves de scroll
- ✅ Botón flotante para volver al inicio
- ✅ Modal de confirmación de envío
- ✅ Integración con WhatsApp

## 🎯 Público Objetivo

- **Emprendedores del condominio** - Que quieran vender (menús, productos, servicios, alquileres)
- **Clientes potenciales** - Vecinos que buscan comprar dentro del condominio
- **Administración del condominio** - Para coordinar y verificar emprendedores

## 🛠️ Personalización

### Cambiar Datos de Contacto

En el archivo `index.html`, busca y reemplaza:

```html
<!-- Línea 102 (aprox) -->
+51946885790  → Tu número de WhatsApp

<!-- Línea 548 (aprox) -->
hola@impulsaweb.com  → Tu email
```

### Cambiar Colores

En `styles.css`, modifica las variables en `:root`:

```css
--color-primary: #6366F1;      /* Azul/Violeta principal */
--color-secondary: #3B82F6;    /* Azul secundario */
--color-accent: #8B5CF6;       /* Violeta acento */
```

### Cambiar Textos

Todos los textos son editables en `index.html`. Busca y reemplaza según necesites:

- Hero title: "Un solo lugar para encontrar..."
- Nombres de secciones
- Descripción de negocios
- Mensajes del formulario

## 📱 Dispositivos Soportados

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Móvil (480px - 767px)
- Móvil pequeño (<480px)

## 🔧 Funcionalidades del Formulario

- ✅ Validación de campos requeridos
- ✅ Validación de email
- ✅ Validación de teléfono
- ✅ Selector condicional de tipo de negocio
- ✅ Mensajes de error personalizados
- ✅ Modal de éxito después del envío
- ✅ Los datos se muestran en consola (puede conectarse a backend)

## 🚀 Próximos Pasos para Producción

1. **Conectar Backend**
   - Descomenta las líneas comentadas en `script.js` (alrededor de línea 170)
   - Configura un endpoint `/api/contacto` en tu servidor
   - Implementa base de datos para guardar solicitudes

2. **Implementar Sistema Real**
   - Crear perfiles de emprendedores
   - Sistema de catálogos por negocio
   - Gestión de pedidos
   - Panel de administración

3. **Configurar Hosting**
   - Sube los archivos a un servidor web
   - Configura SSL (HTTPS)
   - Optimiza imágenes (si las agregas)

4. **Integrar Analytics**
   - Google Analytics (descomentar en `script.js`)
   - Tracking de conversiones

5. **SEO**
   - Mejora meta tags
   - Agrega sitemap.xml
   - Estructura schema JSON-LD

## 📝 Contenido Realista Para Condominios

### Ejemplos de Negocios

- **Menús Diarios**: Comida criolla, asiática, dietas especiales
- **Postres**: Pasteles, bizcochuelos, pasteles personalizados
- **Tienda**: Bebidas, snacks, abarrotes, artículos kiosco
- **Alquileres**: Departamentos, cocheras, alquiler por días
- **Servicios**: Limpieza, cuidado de mascotas, cuidado infantil

### Ejemplos de Testimonios

- Cliente que encuentra todo en un solo lugar
- Emprendedor cuyas ventas suben con visibilidad
- Administrador valorando el profesionalismo
- Vecino común elogiando la simplicidad

## ⚡ Rendimiento

- Código HTML semántico y limpio
- CSS modular y optimizado
- JavaScript sin dependencias externas
- Logo en SVG (escalable, ligero)
- Sin imágenes externas (carga rápida)
- Optimizado para conexiones lentas

## 🔐 Privacidad y Seguridad

- Checkbox de consentimiento para datos
- Nota de privacidad en el formulario
- Sin almacenamiento de datos en el cliente
- Validación en cliente y servidor (cuando se implemente backend)

## 📞 Soporte y Contacto

Para personalizar o mejorar esta página:
- Modifica los archivos según tus necesidades
- Agrega tu información de contacto
- Conecta un backend cuando esté listo
- Implementa autenticación si es necesario

## 📄 Licencia

Uso libre para el condominio. Modifica y personaliza según necesites.

---

**Versión**: 1.0  
**Creado**: 2024  
**Última actualización**: Febrero 2026
