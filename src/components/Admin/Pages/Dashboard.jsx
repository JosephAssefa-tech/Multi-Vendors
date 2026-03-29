import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 }
];


function Dashboard() {

  return (
    
    <div>
    <BarChart width={400} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="sales" />
</BarChart>
      <h2 className="text-2xl font-bold mb-4">
        Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">
          <h3>Total Orders</h3>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3>Total Products</h3>
          <p className="text-3xl font-bold">80</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3>Total Revenue</h3>
          <p className="text-3xl font-bold">$24,000</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;