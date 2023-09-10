import { useState } from 'react';
import './App.css';
import { DatePicker } from './components/DatePicker/DatePicker';
import { SimoneGame } from './components/SimoneGame/SimoneGame';

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <div className='App'>
      {/* <SimoneGame /> */}
      <DatePicker value={date} onChange={setDate} />
    </div>
  )
}

export default App;
