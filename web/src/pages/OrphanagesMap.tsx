import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criaças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Canguaretama</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>

      <Map
        center={[-6.420725,-35.1818688]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;