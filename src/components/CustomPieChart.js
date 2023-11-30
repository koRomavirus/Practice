import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomPieChart = ({ data }) => {
  const months = data.startYear.monthly.map((entry) => entry.date);
  const shipmentPlan = data.startYear.monthly.map((entry) => entry.shipment);
  const shipmentFact = data.startYear.monthly.map((entry) => data.current.shipment.fact);

  const paymentPlan = data.startYear.monthly.map((entry) => entry.payment);
  const paymentFact = data.startYear.monthly.map((entry) => data.current.payment.fact);

  const releasePlan = data.startYear.monthly.map((entry) => entry.release);
  const releaseFact = data.startYear.monthly.map((entry) => data.current.release.fact);

  const chartData = months.map((month, index) => ({
    month,
    'Shipment Plan': shipmentPlan[index],
    'Shipment Fact': shipmentFact[index],
    'Payment Plan': paymentPlan[index],
    'Payment Fact': paymentFact[index],
    'Release Plan': releasePlan[index],
    'Release Fact': releaseFact[index],
  }));

  return (
    <div style={{width: '90%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Shipment Plan" fill="#003399" />
          <Bar dataKey="Shipment Fact" fill="lightblue" />
          <Bar dataKey="Payment Plan" fill="green" />
          <Bar dataKey="Payment Fact" fill="lightgreen" />
          <Bar dataKey="Release Plan" fill="#ff9900" />
          <Bar dataKey="Release Fact" fill="#daa520" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
