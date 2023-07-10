import React from 'react';
import './index.css';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { format } from 'sql-formatter';

const App: React.FC = () => {
  const sample = '2017-01-01T00:00:0dsckjb0';
  console.log("Parse Result", Date.parse(sample));
  return <TimePicker defaultValue={dayjs('12:08', 'HH:mm')} format={'HH:mm'} />;
};

export default App;
