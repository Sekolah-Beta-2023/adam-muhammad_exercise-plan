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