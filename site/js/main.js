// Centralized translations
const translations = {
    // Navigation
    'nav-home': {
        pt: 'Início',
        en: 'Home'
    },
    'nav-contact': {
        pt: 'Contato',
        en: 'Contact'
    },

    // Hero section
    'hero-tagline': {
        pt: `Unimos <b>tecnologia</b> e <b>agricultura</b> para colaborar com a abundância da <br /><span style='color: #A95028'><b>vida na Terra</b></span>`,
        en: `Uniting <b>technology</b> and <b>agriculture</b> to collaborate with the abundance of <br /><span style='color: #A95028'><b>life on Earth</b></span>`
    },
    'hero-contact-btn': {
        pt: 'Entre em Contato',
        en: 'Get in Touch'
    },

    // About section
    'about-title': {
        pt: 'Sobre Nós',
        en: 'About Us'
    },
    'about-text-1': {
        pt: '<span style="color: #364c28">Nosso objetivo é contribuir com a expansão da <b>Agricultura sustentável e regenerativa</b> com foco em</span>',
        en: '<span style="color: #364c28">We were born to contribute to the expansion of <b>sustainable and regenerative agriculture systems</b>, focusing on<span>'
    },
    'about-item-1': {
        pt: 'Sistemas de Software',
        en: 'Software Systems'
    },
    'about-item-2': {
        pt: 'Sensoriamento Remoto',
        en: 'Remote Sensing'
    },
    'about-item-3': {
        pt: 'Rastreabilidade',
        en: 'Traceability'
    },
    'about-item-4': {
        pt: 'Inteligência Artificial',
        en: 'Artificial Intelligence'
    },
    'about-item-5': {
        pt: 'Open Source',
        en: 'Open Source'
    },

    // Contact section
    'contact-title': {
        pt: '<span style="color: #dde499;">Vamos Conversar</span>',
        en: '<span style="color: #dde499;">Get in Touch</span>'
    },
    'contact-description': {
        pt: 'Entre em contato conosco para descobrir como podemos ajudar você com <b>desenvolvimento de tecnologia na agricultura</b>. Nossa equipe está sempre disponível para esclarecer dúvidas e apresentar soluções.',
        en: 'Contact us to discover how we can help you achieve your <b>technological agriculture needs</b>. Our team is always available to answer questions and present solutions.'
    },
    'contact-email-btn': {
        pt: 'Enviar Email',
        en: 'Send Email'
    },
    'contact-whatsapp-btn': {
        pt: 'Conversar',
        en: 'Chat'
    },

    // Footer
    'footer-tagline': {
        pt: '<span style="color: #dde499;">Criando soluções inovadoras para a agricultura.</span>',
        en: '<span style="color: #dde499;">At the crossover of technology and agriculture.</span>'
    },
    'footer-copyright': {
        pt: '<span style="color: #b0a384;">© 2025 Manaíba. Todos os direitos reservados.</span>',
        en: '<span style="color: #b0a384;">© 2025 Manaíba. All rights reserved.</span>'
    }
};

// Language switching functionality with browser detection
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('pt')) {
        return 'pt';
    } else {
        return 'en';
    }
}

let currentLang = detectBrowserLanguage();

const langButtons = {
    pt: [document.getElementById('lang-pt'), document.getElementById('mobile-lang-pt')],
    en: [document.getElementById('lang-en'), document.getElementById('mobile-lang-en')]
};

function updateLanguage(lang) {
    currentLang = lang;

    // Update language button states
    langButtons.pt.forEach(btn => {
        if (lang === 'pt') {
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-gray-100');
        }
    });

    langButtons.en.forEach(btn => {
        if (lang === 'en') {
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-gray-100');
        }
    });

    // Update all content using centralized translations
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });

    // Update document language
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
}

// Initialize with default language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLang);
});

// Add event listeners for language buttons
langButtons.pt.forEach(btn => {
    btn.addEventListener('click', () => updateLanguage('pt'));
});

langButtons.en.forEach(btn => {
    btn.addEventListener('click', () => updateLanguage('en'));
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});