// ==================== CONFIGURACIÓN DE IMPULSAWEB ====================
// Edita este archivo para personalizar los datos de contacto y otros parámetros

const CONFIG = {
    // INFORMACIÓN DE CONTACTO
    contacto: {
        whatsapp: '+51946885790',
        email: 'hola@impulsaweb.com',
        telefono: '+51 9 4688-5790',
        horarios: {
            lunesViernes: '9:00 AM - 18:00 PM',
            sabado: '10:00 AM - 14:00 PM'
        }
    },

    // INFORMACIÓN DEL CONDOMINIO
    condominio: {
        nombre: 'Tu Condominio',
        departamentos: 300,
        ciudad: 'Tu Ciudad',
        pais: 'Tu País'
    },

    // CONFIGURACIÓN DEL SITIO
    sitio: {
        titulo: 'ImpulsaWeb - Catálogo digital para emprendedores del condominio',
        descripcion: 'Un solo lugar donde comprar a tus vecinos. Catálogo ordenado para todos los emprendimientos del condominio.',
        year: 2024
    },

    // COLORES (puedes usar estos si prefieres cambiarlos con JavaScript)
    colores: {
        primary: '#6366F1',        // Azul/Violeta principal
        secondary: '#3B82F6',      // Azul secundario
        accent: '#8B5CF6',         // Violeta acento
        success: '#10B981',        // Verde éxito
        warning: '#F59E0B',        // Naranja warning
        dark: '#1F2937',           // Gris oscuro
        light: '#F3F4F6',          // Gris claro
        white: '#FFFFFF'           // Blanco
    },

    // TIPOS DE NEGOCIOS DISPONIBLES
    tiposNegocios: [
        { value: 'menu', label: 'Menús diarios' },
        { value: 'postres', label: 'Postres y repostería' },
        { value: 'tienda', label: 'Tienda de productos' },
        { value: 'alquiler', label: 'Alquileres' },
        { value: 'servicios', label: 'Servicios varios' },
        { value: 'otro', label: 'Otro' }
    ],

    // REDES SOCIALES
    redes: {
        facebook: 'https://facebook.com/impulsaweb',
        instagram: 'https://instagram.com/impulsaweb',
        linkedin: 'https://linkedin.com/company/impulsaweb',
        tiktok: 'https://tiktok.com/@impulsaweb'
    },

    // MENSAJES PERSONALIZABLES
    mensajes: {
        formularioExito: '¡Solicitud enviada! Nos comunicaremos contigo pronto.',
        errorFormulario: 'Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.',
        validaciones: {
            nombre: 'El nombre debe tener al menos 2 caracteres',
            email: 'Por favor ingresa un email válido',
            telefono: 'Por favor ingresa un teléfono válido',
            tipo: 'Por favor selecciona si eres emprendedor o cliente',
            terminos: 'Debes aceptar recibir información'
        }
    },

    // CARACTERÍSTICAS HABILITADAS
    features: {
        whatsapp: true,           // Integración con WhatsApp
        email: true,              // Contacto por email
        formulario: true,         // Formulario de contacto
        testimonios: true,        // Mostrar testimonios
        comotunciona: true,       // Sección cómo funciona
        analytics: false          // Google Analytics (cambiar a true si configuras)
    }
};

// ==================== NO EDITES BAJO ESTA LÍNEA ====================
// (A menos que sepas lo que estás haciendo)

// Exportar configuración si se usa como módulo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
