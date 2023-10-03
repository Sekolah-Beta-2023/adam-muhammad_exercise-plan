<template>
    <div>
        <h1>{{session}}</h1>
        <FullCalendar :options='calendarOptions' />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import FullCalendar from '@fullcalendar/vue'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
    layout: 'dashboard',
    components: {
    FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [interactionPlugin, timeGridPlugin],
                initialView: 'timeGridWeek',
                nowIndicator: true,
                editable: true,
                initialEvents: [
                    { title: 'nice event', start: new Date() }
                ]
            }
        }
    },
    computed: {
        ...mapGetters({
            getSessions: 'session/getSessions',
        }),
        session() {
            console.log(this.getSession)
            return this.getSessions
        },
        calculateDuration() {
            const data = this.session
            const startTime = new Date(data.start.dateTime);
            const endTime = new Date(data.end.dateTime);

            // Menghitung selisih waktu dalam milidetik
            const durationInMilliseconds = endTime - startTime;

            // Mengonversi durasi dalam milidetik ke dalam jam, menit, dan detik
            const millisecondsPerHour = 60 * 60 * 1000;
            const millisecondsPerMinute = 60 * 1000;
            const millisecondsPerSecond = 1000;

            const hours = Math.floor(durationInMilliseconds / millisecondsPerHour);
            const minutes = Math.floor((durationInMilliseconds % millisecondsPerHour) / millisecondsPerMinute);
            const seconds = Math.floor((durationInMilliseconds % millisecondsPerMinute) / millisecondsPerSecond);

            console.log(hours, minutes, seconds)
            return { hours, minutes, seconds };
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('session/loadSessionFromLocalStorage')
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }
}
</script>