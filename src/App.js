import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'

import './App.css';

// TODO: Move this access token to an environment variable.
mapboxgl.accessToken = 'pk.eyJ1IjoicmRlYmVhc2ktcmgiLCJhIjoiY2pnZm1raHVjMmx0OTMzbXFqcXE2ZzZmayJ9.kBwjWXYflZ0JJ3Cfsi5p1Q';

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.mapDefaults = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.mapDefaults;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('load', () => {
      map.addLayer({
        id: 'locations',
        type: 'circle',
        source: {
          type: 'geojson',
          data: 'https://api.gdeltproject.org/api/v2/geo/geo?query=theme:education&format=geojson&mode=PointHeatMap'
        },
        paint: {
          'circle-radius': {
            'base': 1.75,
            'stops': [[12, 2], [22, 180]]
          },
          'circle-color': '#10627c'
        }
      })
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="map" />
      </div>
    );
  }
}

export default App;
