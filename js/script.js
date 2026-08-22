const treeItems = document.querySelectorAll('.tree-item[data-panel]');
const panels = document.querySelectorAll('.about-panel');
const activeTab = document.querySelector('[data-active-tab]');

function showPanel(name) {
  treeItems.forEach(item => item.classList.toggle('is-selected', item.dataset.panel === name));
  panels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.content === name));
  activeTab.textContent = name;
}

treeItems.forEach(item => item.addEventListener('click', () => showPanel(item.dataset.panel)));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.gsap) {
  gsap.from('.topbar', { opacity: 0, y: -10, duration: .45 });
  gsap.from('.hero-copy > *', { opacity: 0, x: -18, duration: .55, stagger: .1, delay: .15 });
  gsap.from('.profile-ring', { opacity: 0, scale: .85, duration: .75, delay: .4, ease: 'back.out(1.5)' });
}
