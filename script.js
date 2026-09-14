document.addEventListener('DOMContentLoaded', () => {
  // --- Item page filter ---
  const searchInput = document.getElementById('item-search');
  const categoryFilter = document.getElementById('category-filter');
  const rarityFilter = document.getElementById('rarity-filter');
  const itemCards = document.querySelectorAll('.item-card');
  const resultsCount = document.getElementById('results-count');

  function filterItems() {
    if (!itemCards.length) return;
    const search = (searchInput?.value || '').toLowerCase().trim();
    const category = categoryFilter?.value || '';
    const rarity = rarityFilter?.value || '';
    let visible = 0;

    itemCards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const cat = card.dataset.category || '';
      const rar = card.dataset.rarity || '';
      const match =
        (!search || name.includes(search)) &&
        (!category || cat === category) &&
        (!rarity || rar === rarity);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (resultsCount) {
      resultsCount.textContent = visible + ' item ditampilkan';
    }
  }

  if (searchInput) searchInput.addEventListener('input', filterItems);
  if (categoryFilter) categoryFilter.addEventListener('change', filterItems);
  if (rarityFilter) rarityFilter.addEventListener('change', filterItems);
  filterItems(); // initial count

  // --- Global search (homepage) ---
  const globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = globalSearch.value.trim().toLowerCase();
        if (q.includes('steal') || q.includes('egg')) {
          window.location.href = 'games/steal-an-egg/';
        }
      }
    });
  }
});
