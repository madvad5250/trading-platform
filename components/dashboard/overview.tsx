"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 1900,
  },
  {
    name: "Mar",
    total: 1800,
  },
  {
    name: "Apr",
    total: 2400,
  },
  {
    name: "May",
    total: 2800,
  },
  {
    name: "Jun",
    total: 3200,
  },
  {
    name: "Jul",
    total: 3800,
  },
  {
    name: "Aug",
    total: 4300,
  },
  {
    name: "Sep",
    total: 4800,
  },
  {
    name: "Oct",
    total: 5200,
  },
  {
    name: "Nov",
    total: 5600,
  },
  {
    name: "Dec",
    total: 6000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value: number) => [`$${value}`, "Portfolio Value"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Line type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
