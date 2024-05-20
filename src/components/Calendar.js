import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import './Calendar.sass';

function Calendar() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listWeek,listDay'
            }}
            views={{
                listDay: { buttonText: 'list day' },
                listWeek: { buttonText: 'list week' }
            }}
            events={{
                googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,
                googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY
            }}
        />
    );
}

export default Calendar;
