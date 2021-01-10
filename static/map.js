L.mapbox.accessToken = 'pk.eyJ1Ijoid2lsbGhvbG1lcyIsImEiOiJjam9leTNxbWsyMXQwM3FveGl4YjZ0OTM5In0.MK57HX6K6lY9NeOl0vl6ew'
  var map = L.mapbox.map('map')
    .setView([40, -74.50], 9)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));