import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const dataBar = [
  { name: "Proyecto A", value: 12 },
  { name: "Proyecto B", value: 19 },
  { name: "Proyecto C", value: 8 },
];

const dataPie = [
  { name: "React", value: 50 },
  { name: "Vite", value: 30 },
  { name: "CSS", value: 20 },
];

export default function Graficas({datosBar, datosPie}) {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={datosBar} margin={{ top: 10, right: 10, bottom: 0, left: 0 }} >
                <XAxis dataKey="name"  angle={0} tick={{ fontSize: 8, fill:"#2C2C2C" }}  />
                <YAxis  tick={{ fontSize: 8 , fill:"#2C2C2C"}} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#6B705C" barSize={20} name="Population"  />
            </BarChart>
        </ResponsiveContainer>
    );
}

 function Graficas0({datos}) {
        return (

            
    <div className="flex-column">
     <h2>Gráficas de ejemplo</h2>

<ResponsiveContainer width="50%" height={"90%"}>
          <PieChart width={400} height={300}>
        <Pie data={datosPie} cx={200} cy={150} outerRadius={100} dataKey="value">
          <Cell fill="#00264C" />
          <Cell fill="#FFC845" />
          <Cell fill="#8884d8" />
        </Pie>
         <Tooltip />
      </PieChart>
      </ResponsiveContainer>

    <ResponsiveContainer width="50%" height={"100%"}>
        <BarChart data={datos} barGap={5}>
            <XAxis dataKey="name"  angle={45} tick={{ fontSize: 8 }}  />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#00264C" barSize={20}    />
        </BarChart>
    </ResponsiveContainer>
          <PieChart width={400} height={300}>
        <Pie data={dataPie} cx={200} cy={150} outerRadius={100} dataKey="value">
          <Cell fill="#00264C" />
          <Cell fill="#FFC845" />
          <Cell fill="#8884d8" />
        </Pie>
        <Tooltip />
      </PieChart>
</div>
  );
}