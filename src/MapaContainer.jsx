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
        <div className='w-100pct h-100pct flex-md-column-dd-row' style={{background:"#2C2A29", gap:"10px", padding:"16px"}}>
            <div>
                Colombia is a country
            </div>
           
            <div className="flex-column" style={{ flexGrow:1, flexBasis:"60%", minHeight:0,   }}>                
                <MapaColombia/>
            </div> 
           
            <div className="flex-column" style={{background:"#f00", flexGrow:1 , flexShrink:1, flexBasis:"40%"   , 
               minHeight:0,  overflow:"auto",  borderRadius: "8px"  }}>
               <TablaSort columns={columns} data={departamentos} /> 
            </div>
        </div>
    )
}
