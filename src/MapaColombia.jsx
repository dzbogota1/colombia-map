import { LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import departamentos from "../data/departamentos.json";
import L, { marker } from "leaflet";
import { use, useEffect, useState } from "react";

import locationIcon from "../img/location.png";

const markerIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const capitalIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapaColombia() {
    const { BaseLayer, Overlay } = LayersControl;

    return (        
        <MapContainer  center={[4.7110, -74.0721]} zoom={5} style={{ height: "100%", width: "100%" }} attributionControl={false}>            
            <LayersControl position="topright">          
                <BaseLayer checked name="OpenStreetMap base layer">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </BaseLayer>
                
                <Overlay checked name="Department capitals">
                    <LayerGroup>
                    {departamentos.map((d, idx) => (
                        <Marker
                        key={idx}
                        position={d.coords}
                        icon={d.capital.indexOf("Bogotá") == -1? markerIcon: capitalIcon  }                   
                        >
                            <Popup>
                                <table >
                                    <tbody>
                                        <tr><td style={{fontWeight:"bold"}}>Capital</td><td> {d.capital}</td></tr>
                                        <tr><td style={{fontWeight:"bold", paddingRight:"5px"}}>Department</td><td> {d.departamento}</td></tr>
                                    </tbody>
                                </table>
                            </Popup>
                        </Marker>
                    ))}
                    </LayerGroup>
                </Overlay>
            </LayersControl>
            <MouseCoordinates />
        </MapContainer>
    );
}

function MouseCoordinates() {
    const [mousePoint, setMousePoint] = useState(null);

    useMapEvents({
        mousemove(event) {
            setMousePoint(event.latlng);
        },
        mouseout() {
            setMousePoint(null);
        },
    });

    const formattedCoordinates = mousePoint
        ? `${mousePoint.lat.toFixed(4)}, ${mousePoint.lng.toFixed(4)}`: ''
    ;

    return (
        <div className="leaflet-bottom leaflet-right leaflet-control">
            {formattedCoordinates}
        </div>
    );
}