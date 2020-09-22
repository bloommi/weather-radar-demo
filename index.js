import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import Image from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

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

var source = new ImageWMS({
    attributions: ['NOAA'],
    url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer',
    params: {'LAYERS': '1'},
    projection: 'EPSG:3857'
});

var layer = new Image({
    title: 'NOAA Radar',
    zIndex: 1,
    visible: true,
    source: source,
    opacity: 0.7
});

map.addLayer(layer);
