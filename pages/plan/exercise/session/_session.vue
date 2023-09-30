<template>
    <div>
      <h1>{{ formattedTime }}</h1>
      <div class="controls">
        <button @click="startTimer" :disabled="isTimerRunning">Start</button>
        <button @click="stopTimer" :disabled="!isTimerRunning">Stop</button>
        <button @click="resetTimer">Reset</button>
        <button @click="resumeTimer" :disabled="isTimerRunning">Resume</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'dashboard',
    data() {
      return {
        timer: null,
        startTime: null,
        elapsedTime: 0,
        isTimerRunning: false,
      };
    },
    computed: {
      formattedTime() {
        const totalMilliseconds = this.elapsedTime;
        const hours = Math.floor(totalMilliseconds / 3600000);
        const remainingMilliseconds = totalMilliseconds % 3600000;
        const minutes = Math.floor(remainingMilliseconds / 60000);
        const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
      },
    },
    methods: {
      startTimer() {
        if (!this.isTimerRunning) {
          this.startTime = Date.now() - this.elapsedTime;
          this.timer = setInterval(this.updateTimer, 1000);
          this.isTimerRunning = true;
        }
      },
      stopTimer() {
        if (this.isTimerRunning) {
          clearInterval(this.timer);
          this.timer = null;
          this.isTimerRunning = false;
          this.elapsedTime += Date.now() - this.startTime; // Menambahkan waktu yang telah berlalu
        }
      },
      resetTimer() {
        this.stopTimer();
        this.elapsedTime = 0;
      },
      resumeTimer() {
        if (!this.isTimerRunning) {
          this.startTime = Date.now() - this.elapsedTime;
          this.timer = setInterval(this.updateTimer, 1000);
          this.isTimerRunning = true;
        }
      },
      updateTimer() {
        this.elapsedTime = Date.now() - this.startTime;
      },
      pad(value) {
        return value < 10 ? `0${value}` : value;
      },
    },
    beforeDestroy() {
      this.stopTimer();
    },
  };
  </script>

<!-- <template>
    <div>
        <h2>{{  }}</h2>
        <h1>{{ this.$route.params.session }}</h1>
        <ul>
            <li v-for="exercise in plan">
                <img class="session-exercise_img" :src="exercise.gifUrl" :alt="exercise.name">
                <p>{{ exercise.name }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
    layout: 'dashboard',
    computed: {
        ...mapGetters({
            getPlanByName: 'plans/getPlanByName',
            getExercisesByNames: 'exercises/getExercisesByNames'
        }),
        plan() {
            const plan = this.getPlanByName(this.$route.params.session)
            if (plan) {
                const data = this.getExercisesByNames(plan.exercises);
                return data;
            } else {
                return [];
            }
        }
    },
}
</script>
<style>
.session-exercise_img {
    width: 30px;
    aspect-ratio: 1;
}

</style> -->