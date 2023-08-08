mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: campgroundCoordinates,
  zoom: 10,
});

new mapboxgl.Marker().setLngLat(campgroundCoordinates).addTo(map);
