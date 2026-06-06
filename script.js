

// ===== Mobile hamburger navigation =====
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (!toggle) return;

  let backdrop = document.querySelector('.mobile-menu-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    document.body.appendChild(backdrop);
  }

  function setMenu(open) {
    document.body.classList.toggle('mobile-menu-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }

  toggle.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('mobile-menu-open'));
  });

  backdrop.addEventListener('click', function () {
    setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  document.querySelectorAll('nav a, .navbar a, .navigation a, .chapters-nav a, .chapter-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });
});
