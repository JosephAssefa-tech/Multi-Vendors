import React from "react";

function Dashboard() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
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