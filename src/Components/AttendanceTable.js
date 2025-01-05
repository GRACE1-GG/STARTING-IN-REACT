// src/Components/AttendanceTable.js
import React from 'react';
import PropTypes from 'prop-types';

const AttendanceTable = ({ attendanceData }) => {
  return (
    <div>
      <h2>Attendance Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Clock In</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Clock Out</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.clockIn}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.clockOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AttendanceTable.propTypes = {
  attendanceData: PropTypes.array.isRequired,
};

AttendanceTable.defaultProps = {
  attendanceData: [],
};

export default AttendanceTable;
