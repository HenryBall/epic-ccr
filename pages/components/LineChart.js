import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
];

// class CustomizedLabel extends PureComponent {
//   render() {
//     const { x, y, stroke, value } = this.props;

//     return (
//       <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
//         {value}
//       </text>
//     );
//   }
// }

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const _LineChart = ({ data }) => {
  const [refAreaLeft, setRefAreaLeft] = useState();
  const [refAreaRight, setRefAreaRight] = useState();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 10,
        }}
        onMouseMove={(e) => refAreaLeft && setRefAreaRight(e.activeLabel)}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Name" height={30} />
        <YAxis width={30} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Average Level"
          stroke="#00B6FF"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Maximum Contaminant Level (MCL)"
          stroke="#F87171"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Public Health Goal (PHG)"
          stroke="#82ca9d"
          strokeWidth={2}
        />
        {refAreaLeft && refAreaRight ? (
          <ReferenceArea
            yAxisId="1"
            x1={refAreaLeft}
            x2={refAreaRight}
            strokeOpacity={0.5}
          />
        ) : null}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default _LineChart;
