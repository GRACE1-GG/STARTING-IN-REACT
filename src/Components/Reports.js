// Report.js
import React from 'react';
import AttendanceTable from './AttendanceTable';
import Graphs from './Graphs';

const dummyData = [
  { name: 'Alice', date: '2024-01-01', clockIn: '08:00', clockOut: '17:00' },
  { name: 'Bob', date: '2024-01-01', clockIn: '09:00', clockOut: '18:00' },
  // Add more records as needed
];

const Reports = () => {
  return (
    <div>
      <h2>Attendance Report</h2>
      <AttendanceTable records={dummyData} />
      <h2>Attendance Graph</h2>
      <Graphs data={dummyData} />
    </div>
  );
};

export default Reports;
