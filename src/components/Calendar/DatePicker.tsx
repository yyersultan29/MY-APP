import { useMemo, useState } from "react"

interface DatePickerProps {
  value: Date,
  onChange: (value: Date) => void
}
interface DateCellItem {
  date: number;
  month: number;
  year: number;
  isToday?: boolean;
  isSelected?: boolean
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Noc', 'Dec'];
const getDaysAmountInMonth = (year: number, month: number) => {
  const nextMonthDate = new Date(year, month + 1, 1);
  nextMonthDate.setMinutes(-1);
  return nextMonthDate.getDate();
}
const getPreviousMonthDays = (year: number, month: number,) => {
  // Первый день месяца   
  const currentMonthFirstDay = new Date(year, month, 1);

  // В каком порядке находиться этот первый день в неделе
  const dayOfTheWeek = currentMonthFirstDay.getDay();

  const prevMonthCellsAmount = dayOfTheWeek - 1;

  const daysAmountInPrevMonth = getDaysAmountInMonth(year, month - 1);

  const [cellYear, cellMonth] = month === 0 ? [year - 1, 11] : [year, month - 1];

  const dateCells: DateCellItem[] = [];
  for (let i = 0; i < prevMonthCellsAmount; i++) {
    dateCells.push({
      year: cellYear,
      month: cellMonth,
      date: daysAmountInPrevMonth - i
    })
  }
  return dateCells
}

const VISIBLE_CELLS_AMOUNT = 7 * 6;
const getNextMonthDays = (year: number, month: number) => {

  const currentMonthFirstDay = new Date(year, month, 1);
  const dayOfTheWeek = currentMonthFirstDay.getDay();
  const prevMonthCellsAmount = dayOfTheWeek - 1;

  const daysAmount = getDaysAmountInMonth(year, month);

  const nextMonthDays = VISIBLE_CELLS_AMOUNT - daysAmount - prevMonthCellsAmount;

  const [cellYear, cellMonth] = month === 11 ? [year + 1, 11] : [year, month + 1];

  const dateCells: DateCellItem[] = [];
  for (let i = 1; i <= nextMonthDays; i++) {
    dateCells.push({ year: cellYear, month: cellMonth, date: i });
  }
  return dateCells;

}
const getCurrentMonthDays = (year: number, month: number, numberOfDays: number) => {
  const dateCells: DateCellItem[] = [];
  for (let i = 1; i <= numberOfDays; i++) {
    dateCells.push({
      year, month, date: i
    })
  }
  return dateCells;
}

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [panelYear, setPanelYear] = useState(() => value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => value.getMonth());

  const [year, month, day] = useMemo(() => {
    const currentYear = value.getFullYear();
    const currentMonth = months[value.getMonth()];
    const currentDay = value.getDate();

    return [currentYear, currentMonth, currentDay];
  }, [value]);

  const dateCells = useMemo(() => {
    const items: DateCellItem[] = [];

    const daysInMonth = getDaysAmountInMonth(panelYear, panelMonth);

    const currentMonthDays = getCurrentMonthDays(panelYear, panelMonth, daysInMonth);
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth);
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth);


    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelMonth, panelYear]);
  const nextYear = () => { };
  const prevYear = () => { };
  const nextMonth = () => { };
  const prevMonth = () => { };
  return (
    <div >
      Date:
      <div>
        {day} {month} {year}
      </div>

      <div style={{ width: 700, height: 700, display: "grid", gridTemplateColumns: "repeat(7,1fr)", gridTemplateRows: "repeat(7,1fr)" }}>
        {dateCells.map(cell => (
          <div style={{ border: "1px solid lightgrey", textAlign: "center", borderCollapse: "collapse" }}>{cell.date}</div>
        ))}
      </div>

    </div>)
}