window.initializeLeafletMap = () => {
    const map = L.map('map', {
        zoomControl: false
    }).setView([39.8283, -98.5795], 4); // Center on USA

    // Add tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        detectRetina: true,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    //L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    //    maxZoom: 20,
    //    attribution: '&copy; OpenMapTiles & Stadia Maps, OpenStreetMap contributors',
    //    detectRetina: true
    //}).addTo(map);

    //L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    //    attribution: '&copy; OpenStreetMap contributors & Carto',
    //    subdomains: 'abcd',
    //    maxZoom: 19,
    //    detectRetina: true
    //}).addTo(map);

    //L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //    attribution: '&copy; OpenStreetMap contributors & Carto',
    //    subdomains: 'abcd',
    //    maxZoom: 19,
    //    detectRetina: true
    //}).addTo(map);

    //L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //    maxZoom: 20,
    //    attribution: '&copy; OpenMapTiles & Stadia Maps, OpenStreetMap contributors',
    //    detectRetina: true
    //}).addTo(map);

    //L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    //    maxZoom: 20,
    //    attribution: '&copy; OpenMapTiles & Stadia Maps, OpenStreetMap contributors',
    //    detectRetina: true
    //}).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Store map globally so we can access it in addMarkers
    window.leafletMapInstance = map;
};

window.addMarkersToMap = (locations) => {
    const map = window.leafletMapInstance;
    if (!map) return;

    const customIcon = L.icon({
        iconUrl: '/images/bp_logo_48x48.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    const markers = L.markerClusterGroup();

    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).bindPopup(`
            <b>Coordinates</b><br>
            Latitude: ${loc.lat.toFixed(4)}<br>
            Longitude: ${loc.lng.toFixed(4)}
        `);
        markers.addLayer(marker);
    });

    map.addLayer(markers);
};
