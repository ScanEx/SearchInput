import './example.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {CoordinatesDataProvider, OsmDataProvider, SearchControl} from '../index.js';

window.addEventListener('load', () => {
    const map = L.map(document.body).setView([54.04, 26.27], 5);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

    let items = [];

    const coords = new CoordinatesDataProvider();
    coords.addEventListener('fetch', function (response) { console.log(response); });

    const osm = new OsmDataProvider({ serverBase: 'http://maps.kosmosnimki.ru'});
    osm.addEventListener('fetch', function (e) {
        var results = e.detail;
        var features = results.map(function (x) {
            x.feature.properties.editable = false;
            x.feature.properties.name = x.feature.properties.ObjName;
            return x.feature;
        });                            
        if (features && features.length) {
            var json = features
                .reduce(function (a, geojson) {
                    a.addData(geojson.geometry);
                    return a;
                }.bind(this), L.geoJson());                                
            items = items.concat(features.map(function(x){
                return {checked: true, name: x.properties.ObjName, area: 0};
            }));
            
            console.log(items);

            var bounds = json.getBounds();
            map.fitBounds(bounds);
            map.invalidateSize();
        }
    });

    const searchControl = new SearchControl({
        placeHolder: 'поиск по адресам и координатам',
        position: 'topleft',
        retrieveManyOnEnter: true,
        replaceInputOnEnter: true,
        providers: [coords, osm],
    });
	map.addControl(searchControl);
});