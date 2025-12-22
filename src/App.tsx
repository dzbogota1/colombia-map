
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import About from './About'
import BarPlotContainer from './BarPlotContainer'
import MapaContainer from './MapaContainer'

export default function App() {
    return (
        <div className='flex-column w-100dvw h-100dvh' style={{backgroundColor:"#FFC845",  color:  "#00264C",
        fontFamily:"sans-serif"}}>            
            <div className='navegacion flex-row w-100pct'
            style={{background:"#2c5282", color:"#FFC845", padding:"10px"}}>                    
                <Link to="/">Map</Link>
                <div style={{padding:"0 10px"}}>|</div>
                <Link to="/graphs">Graphs</Link>                
            </div>

            <div className="flex-column flex-1" style ={{background:"#f00",  minHeight: 0}}>           
                <Routes>
                    <Route path="/" element={<MapaContainer/> } />
                    <Route path="/graphs" element={<BarPlotContainer/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </div>
    )
}