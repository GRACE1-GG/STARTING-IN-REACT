// src/Components/Graphs.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from 'prop-types';

const Graphs = ({ attendanceData }) => {
  const dates = attendanceData.map(entry => entry.date);
  const clockInTimes = attendanceData.map(entry => new Date(entry.clockIn).getHours());
  const clockOutTimes = attendanceData.map(entry => new Date(entry.clockOut).getHours());

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Clock In Time',
        data: clockInTimes,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Clock Out Time',
        data: clockOutTimes,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 24, // Assuming time is in 24-hour format
      }
    }
  };

  return (
    <div>
      <h2>Attendance Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

Graphs.propTypes = {
  attendanceData: PropTypes.array.isRequired,
};

Graphs.defaultProps = {
  attendanceData: [],
};

export default Graphs;
