import { LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import departamentos from "../data/departamentos.json";
import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapaColombia() {
    const { BaseLayer, Overlay } = LayersControl;

    return (        
        <MapContainer  center={[4.7110, -74.0721]} zoom={5} style={{ height: "100%", width: "100%" }}>            
            <LayersControl position="topright">          
                <BaseLayer checked name="OpenStreetMap base layer">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </BaseLayer>
                 <Overlay checked name="Departments">
                    <LayerGroup>
                    {departamentos.map((d, idx) => (
                        <Marker
                        key={idx}
                        position={d.coords}
                        icon={markerIcon}
                        eventHandlers={{
                            //click: () => onSelect(d),
                        }}
                        >
<Popup>
                            <div className="flex-column" style={{alignItems:"center", justifyContent:"center", fontWeight:"bold"}}>
                                <img
                                        src={ "img/ranita.jpg"}
                                    
                                        style={{ width: "100px"}}
                                    />
                                <div>Department: {d.departamento}</div>                
                                <div>Population (Dept): {d.habitantesDepto}</div>
                                <div>Capital: {d.capital}</div>
                            </div>

                        </Popup>

                        </Marker>
                    ))}
                    </LayerGroup>
                </Overlay>
            </LayersControl>
        </MapContainer>
      
    );
}