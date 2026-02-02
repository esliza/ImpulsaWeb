// ==================== FUNCIONES DE UTILIDAD ====================

// Scroll suave hacia el formulario de contacto
function scrollToContacto() {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cerrar modal de éxito
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// ==================== MENU MÓVIL ====================

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animar hamburguesa
        const spans = menuToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// ==================== VALIDACIÓN DE FORMULARIO ====================

const contactoForm = document.getElementById('contactoForm');

if (contactoForm) {
    // Validadores
    const validators = {
        nombre: {
            validate: (value) => value.trim().length >= 2,
            message: 'El nombre debe tener al menos 2 caracteres'
        },
        email: {
            validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Por favor ingresa un email válido'
        },
        telefono: {
            validate: (value) => {
                const phoneRegex = /^[\d\s\-\+\(\)]+$|^[+]?[0-9]{10,}$/;
                return phoneRegex.test(value.trim()) && value.trim().length >= 10;
            },
            message: 'Por favor ingresa un teléfono válido'
        },
        tipo: {
            validate: (value) => value !== '',
            message: 'Por favor selecciona si eres emprendedor o cliente'
        },
        terminos: {
            validate: (value) => value === true,
            message: 'Debes aceptar recibir información'
        }
    };

    // Función para validar un campo
    function validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
        
        let value = field.value;
        
        // Para checkboxes
        if (field.type === 'checkbox') {
            value = field.checked;
        }

        const validator = validators[fieldName];
        
        if (!validator) {
            return true;
        }

        const isValid = validator.validate(value);

        if (errorElement) {
            errorElement.textContent = isValid ? '' : validator.message;
        }

        field.style.borderColor = isValid ? '' : '#EF4444';

        return isValid;
    }

    // Validar en tiempo real
    Object.keys(validators).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('blur', () => validateField(fieldName));
            field.addEventListener('change', () => validateField(fieldName));
            field.addEventListener('input', () => {
                // Limpiar error mientras escribe
                const errorElement = document.getElementById(`error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
                if (errorElement && field.value) {
                    validateField(fieldName);
                }
            });
        }
    });

    // Envío del formulario
    contactoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validar todos los campos
        let isFormValid = true;
        Object.keys(validators).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            console.log('Formulario inválido');
            return;
        }

        // Recopilar datos
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            negocio: document.getElementById('negocio').value,
            intereses: document.getElementById('intereses').value,
            mensaje: document.getElementById('mensaje').value,
            timestamp: new Date().toLocaleString('es-AR')
        };

        // Aquí normalmente enviarías a un servidor
        console.log('Datos del formulario:', formData);

        // Simular envío exitoso
        try {
            // En producción, aquí irías a un endpoint backend
            // const response = await fetch('/api/contacto', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            // Para demostración, simular éxito
            showSuccessModal();
            contactoForm.reset();

            // Limpiar errores
            Object.keys(validators).forEach(fieldName => {
                const errorElement = document.getElementById(`error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`);
                if (errorElement) {
                    errorElement.textContent = '';
                }
                const field = document.getElementById(fieldName);
                if (field) {
                    field.style.borderColor = '';
                }
            });

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
        }
    });
}

// Mostrar modal de éxito
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            modal.classList.remove('active');
        }, 5000);
    }
}

// ==================== MANEJO DEL TIPO DE EMPRENDEDOR ==================== 

// Mostrar/ocultar campo de tipo de negocio según el tipo seleccionado
const tipoSelect = document.getElementById('tipo');
const grupoNegocio = document.getElementById('grupoNegocio');

if (tipoSelect) {
    tipoSelect.addEventListener('change', (e) => {
        if (e.target.value === 'emprendedor' || e.target.value === 'ambos') {
            grupoNegocio.style.display = 'block';
            document.getElementById('negocio').required = true;
        } else {
            grupoNegocio.style.display = 'none';
            document.getElementById('negocio').required = false;
        }
    });
}

// ==================== ANIMACIONES DE SCROLL ====================

// Animar elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de servicios
const servicioCards = document.querySelectorAll('.servicio-card');
servicioCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observar items de beneficios
const beneficioItems = document.querySelectorAll('.beneficio-item');
beneficioItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Observar tarjetas de testimonios
const testimonioCards = document.querySelectorAll('.testimonio-card');
testimonioCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ==================== EFECTO DE PARALLAX SUAVE ====================

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    
    // Efecto parallax en blobs del hero
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = 0.5 + index * 0.1;
        blob.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // Cambiar estilo del header en scroll
    const header = document.querySelector('.header');
    if (scrollPosition > 50) {
        header.style.boxShadow = 'var(--shadow-lg)';
    } else {
        header.style.boxShadow = 'var(--shadow-md)';
    }
});

// ==================== CONTADOR ANIMADO ====================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animar stats cuando sean visibles
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(num => {
                const targetValue = parseInt(num.textContent);
                if (!isNaN(targetValue)) {
                    animateCounter(num, targetValue);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==================== BOTÓN SCROLL TO TOP ====================

// Crear botón flotante
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    z-index: 999;
    transition: var(--transition);
`;

document.body.appendChild(scrollTopBtn);

// Mostrar/ocultar botón
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Funcionalidad del botón
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hover effect
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-3px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = '';
});

// ==================== RIPPLE EFFECT EN BOTONES ====================

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Agregar animación de ripple a CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Aplicar ripple a todos los botones
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// ==================== VALIDACIÓN DE EMAIL EN TIEMPO REAL ====================

const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('input', (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(e.target.value);
        
        if (e.target.value && !isValid) {
            emailInput.style.borderColor = '#FCA5A5';
        } else {
            emailInput.style.borderColor = '';
        }
    });
}

// ==================== INTEGRACIÓN WHATSAPP ====================

// Los links de WhatsApp ya están en el HTML pero podemos mejorarlos

const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Puedes agregar tracking aquí si lo deseas
        console.log('Click en WhatsApp: ' + link.href);
    });
});

// ==================== DARK MODE (OPCIONAL) ====================

// Detectar preferencia del sistema
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Por ahora mantenemos el light mode por defecto para el sitio de ventas
// Pero aquí está la estructura si necesitas agregar modo oscuro:

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia guardada (opcional)
// if (localStorage.getItem('darkMode') === 'true') {
//     toggleDarkMode();
// }

// ==================== INICIALIZACIÓN ====================

console.log('✅ ImpulsaWeb - Script cargado correctamente');
console.log('📱 Versión 1.0');
console.log('🎯 ¡Lista para convertir visitantes en clientes!');

// ==================== PRELOAD DE IMÁGENES ====================

// Precargar fuentes (si las hay)
// Ya que usamos fuentes del sistema para mejor performance

// ==================== SERVICE WORKER (PARA PWA - OPCIONAL) ====================

// Si deseas convertir el sitio en PWA:
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker no registrado:', err);
    });
}
*/

// ==================== ANALYTICS (OPCIONAL) ====================

// Aquí puedes agregar Google Analytics u otro servicio de analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
