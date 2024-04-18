import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

function Calendar() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
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
        />
    );
}

export default Calendar;