const root = document.documentElement;

export function updateTheme(eDia) {
    if (eDia) {
        root.style.setProperty('--current-sky-top', 'var(--sky-gradient-top-day)');
        root.style.setProperty('--current-sky-bottom', 'var(--sky-gradient-bottom-day)');
        root.style.setProperty('--current-mountain-far', 'var(--mountain-color-day-far)');
        root.style.setProperty('--current-mountain-near', 'var(--mountain-color-day-near)');
        root.style.setProperty('--current-foreground-color', 'var(--foreground-color-day)');
        root.style.setProperty('--current-hero-text-color', 'var(--hero-text-color-day)');
        root.style.setProperty('--current-stars-opacity', 'var(--stars-opacity-day)');
        root.style.setProperty('--current-navbar-logo-text-color', 'var(--navbar-logo-text-color-day)');
        root.style.setProperty('--current-navbar-link-text-color', 'var(--navbar-link-text-color-day)');
        root.style.setProperty('--current-navbar-link-hover-text-color', 'var(--navbar-link-hover-text-color-day)');
    } else {
        root.style.setProperty('--current-sky-top', 'var(--sky-gradient-top-night)');
        root.style.setProperty('--current-sky-bottom', 'var(--sky-gradient-bottom-night)');
        root.style.setProperty('--current-mountain-far', 'var(--mountain-color-night-far)');
        root.style.setProperty('--current-mountain-near', 'var(--mountain-color-night-near)');
        root.style.setProperty('--current-foreground-color', 'var(--foreground-color-night)');
        root.style.setProperty('--current-hero-text-color', 'var(--hero-text-color-night)');
        root.style.setProperty('--current-stars-opacity', 'var(--stars-opacity-night)');
        root.style.setProperty('--current-navbar-logo-text-color', 'var(--navbar-logo-text-color-night)');
        root.style.setProperty('--current-navbar-link-text-color', 'var(--navbar-link-text-color-night)');
        root.style.setProperty('--current-navbar-link-hover-text-color', 'var(--navbar-link-hover-text-color-night)');
    }
}
