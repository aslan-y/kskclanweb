// Konstanten für Scroll-Verhalten
const SCROLL_THRESHOLD = 0.3;
const SCROLL_DELAY = 50;
const FOCUS_DELAY = 100;

// Initialisierung beim DOM-Load
document.addEventListener("DOMContentLoaded", initializeApp);

// Hauptinitialisierungsfunktion
function initializeApp() {
    const elements = {
        menuButton: document.getElementById("menuButton"),
        closeMenu: document.getElementById("closeMenu"),
        menu: document.getElementById("navigation-menu"),
        body: document.body
    };

    if (!validateElements(elements)) return;

    setupEventListeners(elements);
    initializeScrollObserver();
    triggerInitialScroll();
}

// Validierung der benötigten DOM-Elemente
function validateElements(elements) {
    const { menuButton, closeMenu, menu } = elements;
    if (!menuButton || !closeMenu || !menu) {
        console.warn("Erforderliche Menü-Elemente nicht gefunden");
        return false;
    }
    return true;
}

// Event Listener Setup
function setupEventListeners(elements) {
    const { menuButton, closeMenu, menu } = elements;

    menuButton.addEventListener("click", () => openMenu(elements));
    closeMenu.addEventListener("click", () => closeMenuFunc(elements));

    setupKeyboardNavigation(elements);
    setupOverlayClick(menu);
    setupScrollHandler();
}

// Keyboard-Navigation
function setupKeyboardNavigation(elements) {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && elements.menu.classList.contains("visible")) {
            closeMenuFunc(elements);
        }
    });
}

// Overlay-Click Handler
function setupOverlayClick(menu) {
    menu.addEventListener("click", (e) => {
        if (e.target === menu) closeMenuFunc({ menu, menuButton, body: document.body });
    });
}

// Fokus-Verwaltung
function trapFocus(element) {
    const focusableElements = element.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    };

    element.addEventListener("keydown", handleTab);
    element._removeTrap = () => element.removeEventListener("keydown", handleTab);
}

// Menü öffnen
function openMenu({ menu, menuButton, body }) {
    menu.classList.add("visible");
    menuButton.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    body.classList.add("menu-open", "no-scroll");

    setTimeout(() => {
        const firstLink = menu.querySelector(".menu-list a, .menu-list button, [tabindex]:not([tabindex='-1'])");
        if (firstLink) firstLink.focus();
    }, FOCUS_DELAY);

    trapFocus(menu);
}

// Menü schließen
function closeMenuFunc({ menu, menuButton, body }) {
    menu.classList.remove("visible");
    menuButton.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    body.classList.remove("menu-open", "no-scroll");
    menuButton.focus();

    if (menu._removeTrap) menu._removeTrap();
}

// Scroll-Handler
function setupScrollHandler() {
    let scrollTimeout;
    document.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, SCROLL_DELAY);
    }, { passive: true });
}

// Scroll-Verarbeitung
function handleScroll() {
    const heroSection = document.querySelector(".hero");
    const textContent = document.querySelector(".content");
    if (!heroSection || !textContent) return;

    const shouldHide = window.scrollY > window.innerHeight * SCROLL_THRESHOLD;
    heroSection.classList.toggle("hidden", shouldHide);
    textContent.classList.toggle("text-visible", shouldHide);
}

// Intersection Observer Setup
function initializeScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("main.content section")
            .forEach(section => observer.observe(section));
}

// Performance-Optimierung durch Debouncing
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Discord Channel Toggle mit Debounce
const toggleChannel = debounce((type, channelId) => {
    const containerId = `${type}-channel-details`;
    const container = document.getElementById(containerId);
    if (!container) return;

    hideAllChannelInfo(container);

    if (!channelId) {
        showDefaultInfo(container);
    } else {
        showSelectedChannel(container, channelId);
    }
}, 150);

// Hilfsfunktionen für Channel-Toggle
function hideAllChannelInfo(container) {
    container.querySelectorAll('.channel-info, .default-info').forEach(info => {
        info.style.display = 'none';
        info.classList.remove('fade-in');
    });
}

function showDefaultInfo(container) {
    const defaultInfo = container.querySelector('.default-info');
    if (defaultInfo) {
        defaultInfo.style.display = 'block';
        void defaultInfo.offsetWidth;
        defaultInfo.classList.add('fade-in');
    }
}

function showSelectedChannel(container, channelId) {
    const selectedChannel = document.getElementById(channelId);
    if (selectedChannel) {
        selectedChannel.style.display = 'block';
        void selectedChannel.offsetWidth;
        selectedChannel.classList.add('fade-in');
    }
}

// Initialer Scroll-Event
function triggerInitialScroll() {
    window.dispatchEvent(new Event("scroll"));
}