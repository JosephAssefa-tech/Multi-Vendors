import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Row, Col, Stack,Card } from "react-bootstrap";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 }
];


function Dashboard() {

  return (
    
    <Stack direction="vertical" spacing={4} className="p-4">

      {/* <h2 className="text-2xl font-bold mb-4">
        Dashboard
      </h2> */}

      <Row >

        <Col md={4} lg={4} xs={12}>
        <Card className="justify-center items-center text-center p-4">
          <h3>Total Orders</h3>
          <p className="text-3xl font-bold">120</p>
        </Card>
        </Col>

        <Col md={4} lg={4} xs={12}>
          <Card className="justify-center items-center text-center p-4">
            <h3>Total Products</h3>
            <p className="text-3xl font-bold">80</p>
          </Card>
        </Col>

        <Col md={4} lg={4} xs={12}>
          <Card className="justify-center items-center text-center p-4">
            <h3>Total Revenue</h3>
            <p className="text-3xl font-bold">$24,000</p>
          </Card>
        </Col>

      </Row>


      <Row className="mt-4">

   <Col md={6} lg={6} xs={12}>
   <Card>
      <Card.Title className="p-4">Task by stage</Card.Title>
    <hr/>
    <BarChart width={400} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="sales" />
</BarChart>
</Card>
</Col>
   <Col md={6} lg={6} xs={12}>
   <Card>
    <Card.Title className="p-4">Task by state</Card.Title>
    <hr/>
    <BarChart width={400} height={300} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="sales" />
</BarChart>
</Card>
</Col>

   </Row>
    </Stack>
  );
}

export default Dashboard;