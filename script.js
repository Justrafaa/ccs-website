(() => {
  const nav = document.querySelector('#site-nav');
  const toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.querySelector('#year').textContent = new Date().getFullYear();
  const url = (window.CCS_CONFIG?.discordUrl || '').trim();
  const valid = /^https:\/\/(discord\.gg|discord\.com|www\.discord\.com)\//i.test(url);
  const status = document.querySelector('#discord-status');
  if (valid) {
    status.textContent = 'Click to join our Discord and discuss your project.';
    document.querySelectorAll('[data-discord]').forEach(link => {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const pkg = link.dataset.package;
      if (pkg) link.title = `Ask about ${pkg} on Discord`;
    });
  } else {
    status.textContent = 'Discord link not configured yet — add it in config.js before launch.';
    document.querySelectorAll('[data-discord]').forEach(link => {
      link.href = '#contact';
      link.addEventListener('click', () => {
        status.textContent = 'Contact is not live yet. Site owner: add your Discord invite URL to config.js.';
      });
    });
  }
})();
