import React from 'react';
import './App.css';
import { DatePicker } from './components/DatePicker/DatePicker';
import { Dayname, month } from './utils/getMonth';


function App() {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className='App'>
      <DatePicker value={date} onChange={setDate} />
    </div>
  )
}

export default App;
