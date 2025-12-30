document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const navLinks = document.querySelectorAll('.nav-item');

    if (!menu || !sidebar) return;

    // Toggle sidebar open/closed
    menu.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('sidebar--open');
        menu.setAttribute('aria-expanded', String(isOpen));
    });

    // Close sidebar after clicking a nav link (mobile)
    navLinks.forEach(link => link.addEventListener('click', () => {
        if (sidebar.classList.contains('sidebar--open')) {
            sidebar.classList.remove('sidebar--open');
            menu.setAttribute('aria-expanded', 'false');
        }
    }));

    // Close sidebar when tapping the page content
    if (content) {
        content.addEventListener('click', () => {
            if (sidebar.classList.contains('sidebar--open')) {
                sidebar.classList.remove('sidebar--open');
                menu.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
