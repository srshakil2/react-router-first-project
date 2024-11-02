import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const Lists = () => {
  const data = [
    { name: "Facbook", valu: 100000 },
    { name: "Youtube", valu: 200000 },
    { name: "Google", valu: 300000 },
    { name: "Hueman", valu: 90 },
  ];
  return (
    <div>
      <h3>bazarer total lists</h3>
      <div>
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey={"valu"}
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey={"name"} interval={0} />
          <YAxis dataKey={"valu"} interval={0} domain={[0, 500000]} />
        </LineChart>
      </div>
    </div>
  );
};

export default Lists;
