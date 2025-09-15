 
import { useEffect, useState } from 'react';
import { LayersControl, MapContainer, Marker, TileLayer } from 'react-leaflet'

import flagIcon from "../img/colombia-flag.png";

const markerIcon = new L.Icon({
    iconUrl: flagIcon,
    iconSize: [30, 30],
    iconAnchor: [0, 30],
});

export default function MapaReferencia() {
    const { BaseLayer, Overlay } = LayersControl; 
 
    return (  
        <MapContainer       
        center={[4.7110, -74.0721]}
        zoom={0}
        className="inset-map"
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        attributionControl={false}
        zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[4.5709, -74.2973]} icon={markerIcon}/>
        </MapContainer>
     )
} 