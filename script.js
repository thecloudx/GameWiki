document.addEventListener('DOMContentLoaded', () => {
  // Item filter
  const searchInput = document.getElementById('item-search');
  const categoryFilter = document.getElementById('category-filter');
  const rarityFilter = document.getElementById('rarity-filter');
  const itemCards = document.querySelectorAll('.item-card');

  function filterItems() {
    if (!itemCards.length) return;
    const search = (searchInput?.value || '').toLowerCase();
    const category = categoryFilter?.value || '';
    const rarity = rarityFilter?.value || '';

    itemCards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const cat = card.dataset.category || '';
      const rar = card.dataset.rarity || '';
      const match = (!search || name.includes(search)) &&
                    (!category || cat === category) &&
                    (!rarity || rar === rarity);
      card.style.display = match ? '' : 'none';
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterItems);
  if (categoryFilter) categoryFilter.addEventListener('change', filterItems);
  if (rarityFilter) rarityFilter.addEventListener('change', filterItems);

  // Global search
  const globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = globalSearch.value.trim().toLowerCase();
        if (q.includes('steal') || q.includes('egg') || q.includes('roblox')) {
          window.location.href = 'games/steal-an-egg/';
        } else if (q) {
          // simple feedback
          globalSearch.placeholder = 'Coba ketik "steal an egg"';
          globalSearch.value = '';
        }
      }
    });
  }
});
