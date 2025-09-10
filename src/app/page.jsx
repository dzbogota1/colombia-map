'use client'
import dynamic from "next/dynamic";
import { useState } from "react";

const MapaColombia = dynamic(() => import("./MapaColombia"), { ssr: false });

import styles from "./page.module.css";

export default function Home() {
    const [info, setInfo] = useState(null);

    let imgSrc = info && info.foto ? info.foto : "img/ranita.jpg"; 


    return(
    <div className="flex-column" style={{width:"100vw", height:"100vh"}}>
        <div className="flex-center-all"><div style={{fontSize:"40px", fontWeight:"bold"}}>Colombia</div></div>
        <div className="flex-row flex-1">
            <div style={{background:"#345", height:"100%",alignItems:"center", justifyContent:"center"}}>
                {info ? (
                    <div>
                    <h2>{info.capital}</h2>
                    <p><strong>Departament:</strong> {info.departamento}</p>
                    <p><strong>Population (Dept):</strong> {info.habitantesDepto}</p>
                    <p><strong>Population (City):</strong> {info.habitantesCiudad}</p>                    
                    <img
                        src={imgSrc}
                        alt={info.capital}
                        style={{ width: "100%", borderRadius: "8px", marginTop: "0.5rem" }}
                    />
                    </div>
                ) : (
                    <div ></div>
                )}

            </div>
   <div
          className={`${styles.izquierda} `}
        >
          <div className={styles.contenido}>
            <h2>Colombia</h2>
            <p>
              Colombia is a country in South America, bordered by the Caribbean
              Sea and the Pacific Ocean. It is known for its vibrant culture,
              diverse landscapes, and rich history.
            </p>
            <ul>
              <li><strong>Capital:</strong> Bogotá</li>
              <li><strong>Population:</strong> ~52 million</li>
              <li><strong>Official Language:</strong> Spanish</li>
              <li><strong>Currency:</strong> Colombian Peso (COP)</li>
            </ul>
            <p>
              The country is famous for coffee, emeralds, biodiversity, and
              music such as cumbia.
            </p>
            <p>
                Administratively, the territory is divided into units called departments. Each department has a capital, represented by a marker on the map.
            </p>
          </div>
        </div>

            <MapaColombia onSelect={setInfo}/>
        </div>
    </div>
    )
}

/*

"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const MapaColombia = dynamic(() => import("./MapaColombia"), { ssr: false });

export default function Home() {
  // Estado local para guardar la info del marker seleccionado
  const [info, setInfo] = useState(null);

  return (
    <div className="flex-column" style={{ width: "100vw", height: "100vh" }}>
      <div className="flex-center-all">Colombia</div>
      <div className="flex-row flex-1" style={{ height: "100%" }}>
      
        <div style={{ width: "30%", padding: "1rem", overflowY: "auto" }}>
          {info ? (
            <div>
              <h2>{info.capital}</h2>
              <p><strong>Departamento:</strong> {info.departamento}</p>
              <p><strong>Habitantes (Depto):</strong> {info.habitantesDepto}</p>
              <p><strong>Habitantes (Ciudad):</strong> {info.habitantesCiudad}</p>
              <img
                src={info.foto}
                alt={info.capital}
                style={{ width: "100%", borderRadius: "8px", marginTop: "0.5rem" }}
              />
            </div>
          ) : (
            <p>Haz click en un marcador</p>
          )}
        </div>

     
        <div style={{ flex: 1 }}>
     
          <MapaColombia onSelect={setInfo} />
        </div>
      </div>
    </div>
  );
}

*/