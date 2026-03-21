(() => {
  const body = document.body;
  const drawer = document.querySelector('[data-drawer]');
  const toggles = document.querySelectorAll('.js-drawer-toggle');
  const closers = document.querySelectorAll('.js-drawer-close');

  if (!drawer || !toggles.length) return;

  const closeDrawer = () => {
    body.classList.remove('drawer-open');
    drawer.setAttribute('aria-hidden', 'true');
  };

  const openDrawer = () => {
    body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      if (body.classList.contains('drawer-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });

  closers.forEach((closer) => {
    closer.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });
})();
