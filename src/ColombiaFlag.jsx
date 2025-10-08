export default function ColombiaFlag() {
    return (
        <div className="flex-column" style={{ 
            resize: "both",  overflow: "auto"   ,border:"2px solid black", width:"35px", height:"25px"
        }}>
            <div style={{flex:2, background:"#ff0"}}></div>
            <div style={{flex:1, background:"#00b"}}></div>
            <div style={{flex:1, background:"#f00"}}></div>
        </div>
    )
}