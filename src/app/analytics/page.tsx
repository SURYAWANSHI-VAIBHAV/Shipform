
'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Nav from '@/components/Navigation/nav';
import Footer from '@/components/Navigation/footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['2024-11-01', '2024-11-02', '2024-11-03', '2024-11-04', '2024-11-05', '2024-11-06'],
  datasets: [
    {
      label: 'Impressions',
      data: [1200, 1500, 1000, 1700, 1400, 1600],
      borderColor: '#3182CE',
      backgroundColor: 'rgba(49, 130, 206, 0.5)',
      borderWidth: 2,
      tension: 0.4, // Smooths the line
    },
    {
      label: 'Form Submissions',
      data: [200, 250, 180, 300, 240, 280],
      borderColor: '#E53E3E',
      backgroundColor: 'rgba(229, 62, 62, 0.5)',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#444',
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Impressions and Form Submissions',
      color: '#2D3748',
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#4A5568',
      },
      grid: {
        // display: false, // Remove vertical gridlines
      },
    },
    y: {
      ticks: {
        color: '#4A5568',
      },
      grid: {
        // display: false, // Remove horizontal gridlines
      },
    },
  },
};

const ImpressionSubmissionChart: React.FC = () => {
  return (
   <div>
    <Nav/>
    <div className='w-full h-screen pt-24 bg-white text-black'>
    <h1 className='text-center font-semibold text-4xl'>Analytics</h1>
     <div className="flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg p-4 rounded-lg">
        <Line data={data} options={options} />
      </div>
    </div>
   </div>
   <Footer/>
   </div>
  );
};

export default ImpressionSubmissionChart;
