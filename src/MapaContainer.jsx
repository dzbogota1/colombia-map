import { createColumnHelper } from '@tanstack/react-table';
import MapaColombia from './MapaColombia'

import departamentos from "../data/departamentos.json";
import TablaSort from './componentes/tabla/Tabla-sort';

export default function App() {
    const columnHelper = createColumnHelper();

     const columns = [
        columnHelper.accessor('departamento', {
            header: () => <span>Departament</span>,
            cell: info => info.getValue(),            
        }),
        columnHelper.accessor('habitantesDepto', {
            header: () => <span>Population</span>,
            cell: info => info.getValue(),         
            cellStyle: { textAlign: 'right' }  
        })
    ];

    return (
        <div className='w-100pct h-100pct flex-column' style={{background:"#2C2A29", gap:"10px", padding:"16px"}}>
            <div className="flex-center-all"style={{background:"#F2F1EE", color:"#1E1D1C", fontWeight:"bold", fontSize:20,
                borderRadius:8
            }}>
                Colombia 
            </div>
           
            <div className='flex-1 flex-md-column-dd-row' style={{minHeight:0, gap:10}}>
                <div className="flex-column" style={{ flexGrow:1, flexBasis:"60%", minHeight:0,   }}>                
                    <MapaColombia/>
                </div> 
            
                <div className="flex-column" style={{background:"#f00", flexGrow:1 , flexShrink:1, flexBasis:"40%"   , 
                minHeight:0,  overflow:"hidden",  borderRadius: "8px"  }}>
                    <div style={{ overflow: "auto", flex: 1 }}>
                        <TablaSort columns={columns} data={departamentos} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
