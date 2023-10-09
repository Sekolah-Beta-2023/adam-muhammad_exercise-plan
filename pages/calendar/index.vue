<template>
    <div class="calendar_container">
        <FullCalendar
            :options="calendarOptions"
            @eventClick="showSession"
        />
        <div class="session-details" v-if="selectedSession">
            <h2>{{ selectedSession.session_name }}</h2>
            <p>Body Weight: {{ selectedSession.body_weight }} kg</p>
            <p>Location: {{ selectedSession.location }}</p>
            <p>Start Time: {{ selectedSession.start.dateTime }}</p>
            <p>End Time: {{ selectedSession.end.dateTime }}</p>
            <h3>Exercises:</h3>
            <ul>
                <li v-for="exercise in selectedSession.exercises" :key="exercise.exercise_name">
                <strong>{{ exercise.exercise_name }}</strong>
                <ul>
                    <li v-for="set in exercise.sets" :key="set.reps">
                    Reps: {{ set.reps }} - Weight: {{ set.weight }} kg
                    </li>
                </ul>
                </li>
            </ul>
        </div>
        <button @click="listUpcomingEvents">event</button>
        <pre id="content" style="white-space: pre-wrap;"></pre>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import FullCalendar from '@fullcalendar/vue'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    layout: 'dashboard',
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [interactionPlugin, dayGridPlugin],
                initialView: 'dayGridMonth',
                nowIndicator: true,
                editable: false,
                weekends: true,
                initialEvents: []
            },
            selectedSession: null,
        }
    },
    computed: {
        ...mapGetters({
            getSessions: 'session/getSessions',
        }),

    },
    methods: {
        showSession(info) {
            // Ketika event di kalender diklik, tampilkan detail sesi
            this.selectedSession = info.event.extendedProps.sessionData;
            console.log(this.selectedSession)
        },
        updateCalendarEvents() {
            const events = this.getSessions.map((session) => ({
                title: session.session_name,
                start: new Date(session.start.dateTime),
                end: new Date(session.end.dateTime),
                extendedProps: {
                    sessionData: session, // Menyimpan data sesi sebagai properti tambahan
                },
            }));
            this.calendarOptions.events = events;
        },
        async listUpcomingEvents() {
            let response = null
            try {
                response = await gapi.client.calendar.calendarList.list()
            } catch (err) {
                document.getElementById('content').innerText = err.message;
                return;
            }

            console.log(response)
            const hasPlanExApp = response.result.items.some(item => item.summary === "PlanEx App");

            if (hasPlanExApp) {
                console.log("Ada yang memiliki summary 'PlanEx App'");
            } else {
                try {
                    const buatCalendar = await gapi.client.calendar.calendars.insert({"summary": "PlanEx App"})
                    console.log(buatCalendar)
                } catch(err) {
                    console.log(err)
                }
                console.log("Tidak ada yang memiliki summary 'PlanEx App'");

            }
            // const events = response.result.items;
            // if (!events || events.length == 0) {
            // document.getElementById('content').innerText = 'No events found.';
            // return;
            // }
            // // Flatten to string to display
            // const output = events.reduce(
            //     (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
            //     'Events:\n');
            // document.getElementById('content').innerText = output;
        }
    },
    created() {
        // Panggil metode untuk menginisialisasi events di kalender
        this.updateCalendarEvents();
    },
}
</script>
<style>
.calendar_container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: 80px 0 150px 0;
}

.calendar_calendar-container {
    max-width: 500px;
}

.fc {
    font-family: var(--ff-primary);
}

.fc-toolbar-title {
    font-family: var(--ff-heading);
}

.fc .fc-button-primary {
    background-color: inherit;
    border: 2px solid black;
    color: black;
    border-radius: 0;
}

.fc-theme-standard .fc-scrollgrid {
    border: 1px solid black;
}

</style>