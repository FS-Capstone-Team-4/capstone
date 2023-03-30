import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Value 1', 'Value 2', 'Value 3'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
      },
    ],
  });

  // useEffect(() => {
  //   const data = {
  //     labels: ['Value 1', 'Value 2', 'Value 3'],
  //     datasets: [
  //       {
  //         data: [50, 30, 20],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.6)',
  //           'rgba(54, 162, 235, 0.6)',
  //           'rgba(255, 206, 86, 0.6)',
  //         ],
  //         hoverBackgroundColor: [
  //           'rgba(255, 99, 132, 0.8)',
  //           'rgba(54, 162, 235, 0.8)',
  //           'rgba(255, 206, 86, 0.8)',
  //         ],
  //       },
  //     ],
  //   };
  //   setChartData(data);
  // }, []);

  return (
    <Doughnut
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Doughnut Chart',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'right',
        },
      }}
    />
  );
};

export default DoughnutChart;
