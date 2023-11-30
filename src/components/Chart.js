import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Chart(props) {
  const transformDataForChart = (data) => {
    if (!data || !data.startYear || !data.startYear.monthly) {
      return [];
    }

    const monthlyData = data.startYear.monthly;
    
    const chartData = monthlyData.map((month) => ({
        date: month.date,
        Отгрузка: month.shipment,
        Оплата: month.payment,
        Выпуск: month.release,
        PaymentFact: data.current.payment.fact, 
        ShipmentFact: data.current.shipment.fact, 
        ReleaseFact: data.current.release.fact, 
      }));
    return chartData;
  };

  const chartData = transformDataForChart(props.data);

  return (
    <div style={{ width: '90%', height: 300, minWidth:"auto"}}>
      <ResponsiveContainer width="100%" height="100%" >
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <Area type="monotone" dataKey="Отгрузка" stackId="1" stroke="#8884d8" fill="#8884d8" name="Отгрузка" />
          <Area type="monotone" dataKey="Оплата" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Оплата" />
          <Area type="monotone" dataKey="Выпуск" stackId="1" stroke="#ffc658" fill="#ffc658" name="Выпуск" />
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
          </AreaChart>
      </ResponsiveContainer>
    </div>

  );
}
export default Chart;