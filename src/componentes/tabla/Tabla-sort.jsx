import * as React from 'react'
//import ReactDOM from 'react-dom/client'

import styles from './tabla.module.css'

import iconoOrdenarDesc from '/iconos/icono-ordenar-descendente.png';
import iconoOrdenarAsc from '/iconos/icono-ordenar-ascendente.png';
import iconoOrdenar from '/iconos/icono-ordenar.png';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

export default function TablaSort({columns, data, onRowClick=null}) {
    const [sorting, setSorting] = React.useState([]);

    const table = useReactTable({
        data,
        columns,
        state: { sorting },        
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel()
    })
    
    {/*<div className={styles.contenedorTabla}></div>*/}
    
    return (
        <table className={styles.tabla}>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                    <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}                    
                    style={{ cursor: "pointer" }} >                        
                      
                        <div className='flex-row flex-center-all' style={{gap: '5px'   }}>
                            { flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            ) }
                            {header.column.getIsSorted() == false && <img src={iconoOrdenar} width={"20px"}/>}
                            {header.column.getIsSorted() === "asc" && <img src={iconoOrdenarAsc} width={"20px"}/>}
                            {header.column.getIsSorted() === "desc" && <img src={iconoOrdenarDesc} width={"20px"}/>}
                        </div>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map(row => (
                <tr key={row.id} onClick={() => onRowClick?.(row.original)} 
                style={{
                    cursor: onRowClick ? 'pointer' : 'default'
                }}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id} style={{
                             ...(cell.column.columnDef.cellStyle || {})
                        }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>

            <tfoot>
            {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                    <th key={header.id}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                        )}
                    </th>
                ))}
                </tr>
            ))}
            </tfoot>
      </table>
  )
}