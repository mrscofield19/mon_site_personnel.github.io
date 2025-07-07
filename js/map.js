// Map Leaflet
const map = L.map('map').setView([12.3657, -1.5330], 13); // Ouagadougou coords
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([12.3657, -1.5330]).addTo(map)
  .bindPopup('IST - Ouagadougou')
  .openPopup();