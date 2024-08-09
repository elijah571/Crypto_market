import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [chartData, setChartData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString().slice(0, -5),
          item[1]
        ]);
      });

      setChartData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart 
      chartType="LineChart"
      data={chartData}
      height="400px"
      legendToggle
    />
  );
};

export default LineChart;
