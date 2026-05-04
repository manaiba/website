// Centralized translations
const translations = {
    // Navigation
    'nav-home': {
        pt: 'Início',
        en: 'Home'
    },
    'nav-whatwedo': {
        pt: 'Serviços',
        en: 'Services'
    },
    'nav-expertise': {
        pt: 'Expertise',
        en: 'Expertise'
    },
    'nav-contact': {
        pt: 'Contato',
        en: 'Contact'
    },

    // Hero section
    'hero-tagline': {
        pt: `Soluções que aceleram a transição para uma <b>agricultura</b> que regenera a <span class='text-terracotta'><b>biodiversidade</b></span> e o <span class='text-terracotta'><b>clima</b></span>.`,
        en: `Accelerating the shift to <b>farming</b> that regenerates <span class='text-terracotta'><b>biodiversity</b></span> and <span class='text-terracotta'><b>climate</b></span>.`
    },
    'hero-contact-btn': {
        pt: 'Entre em Contato',
        en: 'Get in Touch'
    },

    // Expertise section
    'about-title': {
        pt: 'Expertise',
        en: 'Expertise'
    },
    'about-text-1': {
        pt: 'Nosso objetivo é oferecer soluções digitais para <b>agricultura sustentável e regenerativa</b> com foco em',
        en: 'Our goal is to offer digital solutions for <b>sustainable and regenerative agriculture systems</b>, focusing on'
    },
    'about-item-1': {
        pt: 'Sistemas de Software',
        en: 'Software Systems'
    },
    'about-desc-1': {
        pt: 'Plataformas customizadas para a agricultura sustentável',
        en: 'Custom platforms for sustainable agriculture'
    },
    'about-item-2': {
        pt: 'Sensoriamento Remoto',
        en: 'Remote Sensing'
    },
    'about-desc-2': {
        pt: 'Imagens de satélite e análise geoespacial',
        en: 'Satellite imagery and geospatial analysis'
    },
    'about-item-3': {
        pt: 'Rastreabilidade',
        en: 'Traceability'
    },
    'about-desc-3': {
        pt: 'Transparência ponta-a-ponta na cadeia de suprimentos',
        en: 'End-to-end supply chain transparency'
    },
    'about-item-4': {
        pt: 'Inteligência Artificial',
        en: 'Artificial Intelligence'
    },
    'about-desc-4': {
        pt: 'Modelos que aprendem com a agronomia',
        en: 'Models that learn from agronomy'
    },
    'about-item-5': {
        pt: 'Open Source',
        en: 'Open Source'
    },
    'about-desc-5': {
        pt: 'Ferramentas construídas abertamente com a comunidade',
        en: 'Tools built openly with the community'
    },
    'about-item-6': {
        pt: 'Relatórios',
        en: 'Reports'
    },
    'about-desc-6': {
        pt: 'Documentação automatizada para projetos, compliance e ESG',
        en: 'Automated reporting for projects, compliance, and ESG'
    },

    // Services section
    'whatwedo-title': {
        pt: 'Nossos Serviços',
        en: 'Our Services'
    },
    'whatwedo-intro': {
        pt: 'Da copa das árvores ao solo, construímos tecnologia que ajuda a agricultura regenerativa a escalar.',
        en: 'From the canopy down to the soil, we build technology that helps regenerative agriculture scale.'
    },
    'whatwedo-pillar-1': {
        pt: 'Sistemas Agroflorestais',
        en: 'Agroforestry Systems'
    },
    'whatwedo-desc-1': {
        pt: 'Provemos soluções desde o design e análise de viabilidade financeira até a operação, manejo de campo e gestão de risco.',
        en: 'We deliver solutions from design and financial feasibility analysis through to operations, field management, and risk management.'
    },
    'whatwedo-pillar-2': {
        pt: 'Reflorestamento',
        en: 'Reforestation'
    },
    'whatwedo-desc-2': {
        pt: 'Nossa plataforma integra diversas fontes de dados auxiliando no monitoramento de crescimento das árvores, biomassa e biodiversidade.',
        en: 'Our platform integrates multiple data sources to monitor tree growth, biomass, and biodiversity.'
    },
    'whatwedo-pillar-3': {
        pt: 'Consultoria',
        en: 'Consulting'
    },
    'whatwedo-desc-3': {
        pt: 'Soluções digitais customizadas para projetos de agricultura regenerativa: monitoramento de plantio e geração de relatórios usando sensoriamento remoto, voos de drone e dados de campo.',
        en: 'Custom digital solutions for regenerative agriculture: crop monitoring and reporting using remote sensing, drone flights, and field data.'
    },

    // Contact section
    'contact-title': {
        pt: '<span class="text-yellowish-green">Vamos Conversar</span>',
        en: '<span class="text-yellowish-green">Get in Touch</span>'
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
        pt: '<span class="text-yellowish-green">Criando soluções inovadoras para a agricultura.</span>',
        en: '<span class="text-yellowish-green">At the crossover of technology and agriculture.</span>'
    },
    'contact-address-title': {
        pt: 'Endereço',
        en: 'Address'
    },
    'contact-address': {
        pt: 'Parque Científico e Tecnológico da Unicamp<br>Av. Alan Turing 776<br>Campinas-SP, Brasil<br>13083-898',
        en: 'Parque Científico e Tecnológico da Unicamp<br>Av. Alan Turing 776<br>Campinas-SP, Brasil<br>13083-898'
    },
    'footer-copyright': {
        pt: '<span class="text-dead-leaves">© 2025-2026 Manaíba.tech Todos os direitos reservados.</span>',
        en: '<span class="text-dead-leaves">© 2025-2026 Manaíba.tech All rights reserved.</span>'
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
        const active = lang === 'pt';
        btn.setAttribute('aria-pressed', active);
        if (active) {
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-gray-100');
        }
    });

    langButtons.en.forEach(btn => {
        const active = lang === 'en';
        btn.setAttribute('aria-pressed', active);
        if (active) {
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

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
}

// Initialize with default language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLang);
});

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
    const opened = mobileMenu.classList.toggle('hidden') === false;
    mobileMenuButton.setAttribute('aria-expanded', opened);
});

// Active-section nav highlight: the section whose middle is closest to the
// viewport center "wins". The -50%/-50% rootMargin shrinks the observation
// box to a single horizontal line at viewport center, so exactly one section
// is intersecting at a time.
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === id);
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));

// Scroll-triggered reveals: fade in elements marked [data-reveal] once when
// they first enter the viewport. Unobserve after revealing so it stays put.
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

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
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });
});