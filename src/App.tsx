
import './App.css'
import MapaColombia from './MapaColombia'
import MapaReferencia from './MapaReferencia'

function App() {
    return (
            <div className='flex-row flex-center-all h-100vh w-100vw' style={{ background:"#FFC845", color:"#4B3B00"}}>
                <div className='flex-column' style={{ flex: "0 1 400px", padding:"0 30px", gap:"15px"}}>
                    <h2>Colombia</h2>
                    <p>
                        Colombia is a country in South America.
                    </p>
                    <h3>Continental Colombia</h3>
                    <table className='table-bonita'>
                        <thead>
                            <tr>
                                <th>Bounds</th>
                                <th>Value</th>                                
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td>North</td><td>12.44</td></tr>
                            <tr><td>South</td><td>-4.23</td></tr>
                            <tr><td>East</td><td>-66.87</td></tr>
                            <tr><td>West</td><td>-79.02</td></tr>
                        </tbody>
                    </table>
                <div className='flex-center-all'>
                    <MapaReferencia/>   
                </div>
                    <ul style={{color:"black"}}>
                    <li><strong>Capital:</strong> Bogotá</li>
                    <li><strong>Population:</strong> ~52 million</li>
                    <li><strong>Official Language:</strong> Spanish</li>
                    <li><strong>Currency:</strong> Colombian Peso (COP)</li>
                    </ul>
                </div>

                <MapaColombia className="flex-1"/>
            </div>
    )
}

export default App
