import React, { useEffect, useMemo } from 'react';
import { Dayname, month } from '../../utils/getMonth';
import { DatePickerProps } from './DatePicker.props';


export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [date, setDate] = React.useState(value);

  // CONSTANTS 
  const monthName = month[Number(date.getMonth())];
  const year = date.getFullYear();
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  firstDay = firstDay === 0 ? 7 : firstDay;
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const handlePrevMonthClick = (): void => {
    if (date.getMonth() - 1 < 0) {
      onChange(new Date(year - 1, 11, 1));
    } else {
      onChange(new Date(year, date.getMonth() - 1, 1));
    }
  }
  const handleNextMonthClick = (): void => {
    if (date.getMonth() + 1 > 11) {
      onChange(new Date(year + 1, 0, 1))
    } else {
      onChange(new Date(year, date.getMonth() + 1, 1))
    }
  }

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const renderDays = useMemo(() => {
    let nextMonthStartDay = 1;
    const arr = [];
    let startDay = 1;
    for (let i = 0; i < 6; i++) {
      let sub = [];
      // week days from 1 to 7
      for (let j = 1; j < 8; j++) {
        if (startDay <= daysInMonth) {
          if (firstDay === 1 && i === 0) {
            sub.unshift(<td key={`${i}_${j}`} className='text_grey'>{prevMonthLastDay}</td>)
            prevMonthLastDay--;
          } else if (firstDay !== 1 && i === 0 && firstDay > j) {
            sub.unshift(<td key={`${i}_${j}`} className='text_grey'>{prevMonthLastDay}</td>)
            prevMonthLastDay--;
          } else {
            sub.push(<td key={`${i}_${j}`}>{startDay}</td>);
            startDay++;
          }
        } else {
          sub.push(<td key={`${i}_${j}`} className='text_grey'>{nextMonthStartDay}</td>);
          nextMonthStartDay++;
        }

      }
      arr.push(<tr key={i}>{sub}</tr>)
    }
    return arr;
  }, [date]);

  console.log(firstDay);


  return (
    <div className="App">
      <h1>{monthName}  {year} </h1>

      <div className='calendar'>
        {/* CALENDAR HEADER  */}
        <div className='calendar-header'>
          <div className='title'></div>
          <div className='btn-group'>
            <div className="left">
              <button >Prev Year</button>
              <button onClick={handlePrevMonthClick}>Prev Month</button>
            </div>
            <div className="right">
              <button onClick={handleNextMonthClick}>Next Month</button>
              <button>Next Year</button>
            </div>
          </div>
        </div>
        {/* CALENDAR BODY */}

        <div className="calendar-body">
          <table>

            <thead>
              <tr>
                {Dayname.map(day => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {renderDays}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}


