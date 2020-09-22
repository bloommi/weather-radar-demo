import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

const washingtonLonLat = [-77.036667, 38.895];
const washingtonLonLatMercator = fromLonLat(washingtonLonLat);
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: washingtonLonLatMercator,
    zoom: 6
  })
});
