// src/components/ActivityChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: [2000, 3000, 4000, 3000, 5000, 6000, 7000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 2000, 3000, 4000, 5000, 7000, 6000, 5000, 4000],
        backgroundColor: '#3572EF',
        borderColor: '#3572EF',
        borderWidth: 1,
        borderRadius: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.raw;
          },
        },
      },
    },
  };

  return <div style={{ height: '250px' }}><Bar data={data} options={options} /></div>;
};

export default ActivityChart;
