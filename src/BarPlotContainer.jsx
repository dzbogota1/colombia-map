import departamentos from "../data/departamentos.json";
import GraficoDeBarras from "./GraficoDeBarras"
import ColombiaFlag from "./ColombiaFlag"


export default function BarPlotContainer() {
    const data = transformarDepartamentos(departamentos);
    const sortedData = [...data].sort((a, b) => b.value - a.value);
    return (
        <div className='flex-1 flex-row flex-center-all' >
            <div className='flex-row flex-center-all'
            style={{flex:1, fontWeight: "bold", fontSize:'clamp(6px, 4vw,  50px)', background:"#f00", 
            textAlign:"center",
            justifyContent:"center",alignItems:"center", padding:"10px", color:"#fff"  }}>
                Top 10 most populated departments
            </div>

            <div className='h-100pct flex-row flex-center-all' style={{flex:3, width:"300px"}} >
                <GraficoDeBarras datosBar ={sortedData.slice(0, 10)} datosPie={sortedData}/> 
            </div>
        </div>
    )
}

function transformarDepartamentos(data) {
    return data.map(item => ({
        name: item.departamento,
        value: Number(item.habitantesDepto)
    }));
}