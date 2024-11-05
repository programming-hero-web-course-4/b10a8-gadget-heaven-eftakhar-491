import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function StateDetails({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
          scale="band"
        />
        <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />

        <Bar dataKey="price" barSize={20} fill="#9538E2" />
        <Line type="monotone" dataKey="rating" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
