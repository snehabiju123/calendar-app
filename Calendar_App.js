import {useState ,useEffect} from 'react';
const Calendar_App = () =>
{
    const [date,setdate]=useState(new Date());
    const [month,setmonth]=useState(date.getMonth());
    const [year,setyear] = useState(date.getFullYear());
    const [calendarData,setcalendarData]=useState([]);

useEffect(()=>{
  const lastdayofMonth= getLastDayOfMonth(month,year);
  const firstdayofMonth=getFirstDayOfMonth(month,year);
  const calendar=createCalendar(lastdayofMonth,firstdayofMonth);
  setcalendarData(calendar);
},[month,year]);

const getLastDayOfMonth = (month,year) =>
    { 
       return new Date(year,month+1,0).getDate();
    };

const getFirstDayOfMonth=(month,year) =>
    {
        return new Date(year,month,1).getDay();
    };

const createCalendar=(lastdayofMonth,firstdayofMonth) =>
    {
        const calendar = [];
        let day = 1;
        let weekday=firstdayofMonth
    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 7; j++) {
        if (i == 0 && j < weekday) {
          row.push(<td key={j} />);
        } else if (day <= lastdayofMonth) {
          row.push(<td key={day}>{day}</td>);
          day++;
          weekday=(weekday+1) % 7;
        } else {
          row.push(<td key={j} />);
        }
      }
      calendar.push(<tr key={i}>{row}</tr>);
    }
    return calendar;
};

const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      if(month==0)
      {setmonth(11);
      setyear(year-1);
    } else {
      setmonth(month - 1);
    }}
    else
    {
      if(month==11)
        {
          setmonth(0);
          setyear(year+1);
        }
        else
        {setmonth(month+1);}
    }
  };

  const handleYearChange = (direction) => {
    if (direction === 'prev') {
      setyear(year - 1);
    } else {
      setyear(year + 1);
    }
  };

  return(
    
    <div className="calendar">
        <div className="calendar__header">
            <button className="cal_btn" onClick={()=>handleMonthChange('prev')}>Prev</button>
            <span>{getMonthName(month)} {year}</span>
            <button className="cal_btn" onClick={()=>handleMonthChange('next')}>Next</button>
        </div>
    <table>
        <thead>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
       </thead>
        <tbody>
            {calendarData}
        </tbody>
    </table>
    
    </div>
  );
};
const getMonthName=(month) => 
    {
       const months= [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    return months[month];
    };

    export default Calendar_App;

        
  






















