import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';

function ChartFact(props) {
  const { shipment, payment, release } = props.data.startYear.total;

  const data = [
    { name: 'Отгрузка', факт: shipment, color: '#8884d8' },
    { name: 'Оплата', факт: payment, color: '#82ca9d' },
    { name: 'Выпуск', факт: release, color: '#ffc658' },
  ];

  return (
    <div style={{ width: '90%', height: 300, minWidth: 'auto' }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="факт" fill='#6d6dd3' />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartFact;
