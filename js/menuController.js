export function initializeHamburgerMenu() {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const mainHeader = document.querySelector('.main-header');
    const bodyElement = document.body;

    if (hamburgerButton && mainNav && mainHeader) {
        hamburgerButton.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('main-nav-open');
            hamburgerButton.classList.toggle('menu-open');
            mainHeader.classList.toggle('menu-is-open');
            hamburgerButton.setAttribute('aria-expanded', isOpen.toString());

            if (isOpen) {
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = '';
            }
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('main-nav-open')) {
                    mainNav.classList.remove('main-nav-open');
                    hamburgerButton.classList.remove('menu-open');
                    mainHeader.classList.remove('menu-is-open');
                    hamburgerButton.setAttribute('aria-expanded', 'false');
                    bodyElement.style.overflow = '';
                }
            });
        });
    }
}