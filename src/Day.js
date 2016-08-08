import React from 'react';
import './App.css';

const Day = ({ data }) => {
  return (
      <div>
        {data.map(w =>
          <h2 key={w.deg}>{w.deg}</h2>
        )}
      </div>
  );
};

export default Day;
