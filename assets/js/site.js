const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
const navItems = [...document.querySelectorAll('.nav-item')];

function closeDropdowns() {
  navItems.forEach(item => {
    item.classList.remove('open');
    item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
  });
}

function closeMobileNav() {
  links?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Open menu');
  if (menu) menu.textContent = '☰';
}

navItems.forEach(item => {
  const trigger = item.querySelector('.nav-trigger');
  trigger?.addEventListener('click', () => {
    const open = !item.classList.contains('open');
    closeDropdowns();
    item.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
  });
});

links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeDropdowns();
  closeMobileNav();
  link.blur();
}));

menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.textContent = open ? '×' : '☰';
  if (!open) closeDropdowns();
});

document.addEventListener('click', event => {
  if (!event.target.closest('.nav-item')) {
    closeDropdowns();
    if (document.activeElement?.closest('.nav-item')) document.activeElement.blur();
  }
  if (!event.target.closest('.nav')) closeMobileNav();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeDropdowns();
    closeMobileNav();
    if (document.activeElement?.closest('.nav-item')) document.activeElement.blur();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
