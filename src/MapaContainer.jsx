import MapaColombia from './MapaColombia'

export default function App() {
    return (
        <div className='w-100pct h-100pct flex-column' style={{background:"#ff0"}}>
            <div>
                Algo
            </div>
            <div className="flex-column" style={{background:"#f00", flexGrow:1   }}>
                
                    <MapaColombia/>
            </div> 
           
        </div>
    )
}

function AppFuncional() {
    return (
        <div className='w-100dvw h-100dvh flex-column' style={{background:"#ff0"}}>
            <div>
                Algo
            </div>
            <div className="flex-column" style={{background:"#f00", flexGrow:1   }}>
                
                    <MapaColombia/>
            </div> 
           
        </div>
    )
}