'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para los iconos que no cargan en GitHub Pages
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

export default function MapaColombia() {
    const capitals = [
        { name: "Leticia", dept: "Amazonas", coords: [-4.215, -69.9406] },
        { name: "Medellín", dept: "Antioquia", coords: [6.2442, -75.5812] },
        { name: "Arauca", dept: "Arauca", coords: [7.0847, -70.7591] },
        { name: "Barranquilla", dept: "Atlántico", coords: [10.9685, -74.7813] },
        { name: "Cartagena", dept: "Bolívar", coords: [10.3910, -75.4794] },
        { name: "Tunja", dept: "Boyacá", coords: [5.5440, -73.3576] },
        { name: "Manizales", dept: "Caldas", coords: [5.0703, -75.5138] },
        { name: "Florencia", dept: "Caquetá", coords: [1.6144, -75.6062] },
        { name: "Yopal", dept: "Casanare", coords: [5.3378, -72.3959] },
        { name: "Popayán", dept: "Cauca", coords: [2.4448, -76.6147] },
        { name: "Valledupar", dept: "Cesar", coords: [10.4631, -73.2532] },
        { name: "Quibdó", dept: "Chocó", coords: [5.6947, -76.6611] },
        { name: "Montería", dept: "Córdoba", coords: [8.7486, -75.8814] },
        { name: "Bogotá", dept: "Cundinamarca", coords: [4.7110, -74.0721] },
        { name: "Inírida", dept: "Guainía", coords: [3.8653, -67.9239] },
        { name: "San José del Guaviare", dept: "Guaviare", coords: [2.5656, -72.6396] },
        { name: "Neiva", dept: "Huila", coords: [2.9273, -75.2819] },
        { name: "Riohacha", dept: "La Guajira", coords: [11.5444, -72.9070] },
        { name: "Santa Marta", dept: "Magdalena", coords: [11.2408, -74.1990] },
        { name: "Villavicencio", dept: "Meta", coords: [4.1420, -73.6266] },
        { name: "Pasto", dept: "Nariño", coords: [1.2136, -77.2811] },
        { name: "Cúcuta", dept: "Norte de Santander", coords: [7.8939, -72.5078] },
        { name: "Mocoa", dept: "Putumayo", coords: [1.1521, -76.6521] },
        { name: "Armenia", dept: "Quindío", coords: [4.5339, -75.6811] },
        { name: "Pereira", dept: "Risaralda", coords: [4.8133, -75.6961] },
        { name: "San Andrés", dept: "San Andrés y Providencia", coords: [12.5847, -81.7006] },
        { name: "Bucaramanga", dept: "Santander", coords: [7.1193, -73.1227] },
        { name: "Sincelejo", dept: "Sucre", coords: [9.3047, -75.3978] },
        { name: "Ibagué", dept: "Tolima", coords: [4.4389, -75.2322] },
        { name: "Cali", dept: "Valle del Cauca", coords: [3.4516, -76.5320] },
        { name: "Mitú", dept: "Vaupés", coords: [1.1983, -70.1730] },
        { name: "Puerto Carreño", dept: "Vichada", coords: [6.1890, -67.4859] }
    ];

    return (
    <MapContainer  center={[4.7110, -74.0721]}  zoom={6} className="flex-1">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {capitals.map((city, idx) => (
            <Marker key={idx} position={city.coords}>
            <Popup>
                <b>{city.name}</b> <br /> {city.dept}
            </Popup>
            </Marker>
        ))}
    </MapContainer>
    )
}
