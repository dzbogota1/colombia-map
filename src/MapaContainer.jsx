
import MapaColombia from './MapaColombia'
import MapaReferencia from './MapaReferencia'

export default function MapaContainer() {
    return (
        <div className='flex-1 flex-md-column-dd-row flex-center-all' > 
            <div className='flex-column' style={{ padding:"0 30px", gap:"15px"}}>
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

                <div className='flex-1 flex-center-all'>
                    <MapaReferencia/>
                </div>

                <ul style={{color:"black"}}>
                    <li><strong>Capital:</strong> Bogotá</li>
                    <li><strong>Population:</strong> ~52 million</li>
                    <li><strong>Official Language:</strong> Spanish</li>
                    <li><strong>Currency:</strong> Colombian Peso (COP)</li>
                </ul>
            </div>

            <div className='flex-1 h-100pct' >
               <MapaColombia />
            </div>
            
        </div>
        )
}