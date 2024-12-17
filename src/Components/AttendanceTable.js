// AttendanceTable.js
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const AttendanceTable = ({ records }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Date</Th>
          <Th>Clock In</Th>
          <Th>Clock Out</Th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <Td>{record.name}</Td>
            <Td>{record.date}</Td>
            <Td>{record.clockIn}</Td>
            <Td>{record.clockOut}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AttendanceTable;
