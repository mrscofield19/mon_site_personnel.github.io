// Filtrer lignes de l'agenda
const buttons = document.querySelectorAll('.filter-buttons button');
const rows = document.querySelectorAll('#agenda-table tr[data-matiere]');
buttons.forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filter-buttons .active').classList.remove('active');
  btn.classList.add('active');
  const mat = btn.dataset.matiere;
  rows.forEach(r => r.style.display = (mat==='all' || r.dataset.matiere===mat)? '' : 'none');
}));