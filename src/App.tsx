
import './App.css'
import MapaColombia from './MapaColombia'

function App() {
    return (
        <div className='flex-row flex-center-all' style={{width:"100vw", height:"100vh", background:"lightblue", color:"darkblue"}}>
            <div>
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

            <MapaColombia/>
        </div>
    )
}

export default App
