<template>
  <div>
    <h2>{{  }}</h2>
    <h1>{{ this.$route.params.session }}</h1>
    <p class="waktu">{{ stopwatchDisplay }}</p>
    <input v-model="form.body_weight" type="number" placeholder="body weight (kg)">
    <input v-model="form.location" type="text" placeholder="location">
    <ul>
      <li v-for="exercise in plan">
        <img class="session-exercise_img" :src="exercise.gifUrl" :alt="exercise.name">
        <p>{{ exercise.name }}</p>
        <div class="rep-weight" v-for="(set, index) in exercise.sets">
          <label :for="`${exercise.name}repetition${index}`">Rep
            <input v-model="set.reps" type="number" name="repetition" :id="`${exercise.name}repetition${index}`" required>
          </label>
          <label :for="`${exercise.name}weight${index}`">weight(kg)
            <input v-model="set.weight" type="number" name="weight" :id="`${exercise.name}weight${index}`" required>
          </label>
          <button type="button" @click="deleteSet(exercise, set)">Delete</button>
        </div>
        <button type="button" @click="tambahSet(exercise.name)">add</button>
      </li>
    </ul>
    <button @click="save">save session</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  layout: 'dashboard',
  data() {
    return{
      form: {
        session_name: this.$route.params.session,
        body_weight: 0,
        location: "",
        start: {
          dateTime: "",
          timeZone: ""
        },
        end: {
          dateTime: "",
          timeZone: ""
        },
        exercises: []
      },
      stopwatch: null,
      stopwatchDisplay: "00:00:00" 
    }
  },
  created() {
    this.sets()
    this.form.start.dateTime = new Date().toISOString();
    this.setAutoTimeZone();
    this.startStopwatch();
  },
  beforeDestroy() {
    this.stopStopwatch();
  },
  computed: {
    ...mapGetters({
      getPlanByName: 'plans/getPlanByName',
      getExercisesByNames: 'exercises/getExercisesByNames'
    }),
    plan() {
      const plan = this.getPlanByName(this.$route.params.session)

      if (plan) {
        const dataExercise = this.getExercisesByNames(plan.exercises);
        const hasilData = dataExercise.map(exercise => {
          const matchingPlan = this.form.exercises.find(plan => plan.exercise_name === exercise.name);
          if (matchingPlan) {
            exercise.sets = matchingPlan.sets;
          }
          return exercise;
        });

        return hasilData;
      } else {
        return [];
      }
    }
  },
  methods: {
    sets() {
      const plan = this.getPlanByName(this.$route.params.session)
      
      plan.exercises.forEach(exercise => this.form.exercises.push({
        exercise_name: exercise,
        sets: [
          {
            reps: 0,
            weight: "",
            rest_time: "",
          }
        ]
      }))
    },
    tambahSet(exerciseName) {
      const matchingExercise = this.form.exercises.find(exercise => exercise.exercise_name === exerciseName);
      if (matchingExercise) {
        matchingExercise.sets.push({
          "reps": 0,
          "weight": "",
          "rest_time": ""
        });
      }
    },
    deleteSet(exercise, set) {
      const matchingExercise = this.form.exercises.find(item => item.exercise_name === exercise.name);
      if (matchingExercise) {
        // Temukan indeks set yang akan dihapus
        const setIndex = matchingExercise.sets.indexOf(set);
        if (setIndex !== -1) {
          // Hapus set dari array sets
          matchingExercise.sets.splice(setIndex, 1);
        }
      }
    },
    save() {
      this.stopStopwatch();
      this.form.end.dateTime = new Date().toISOString();
      console.log(this.form);
      const exerciseSession = { ...this.form }
      this.$store.dispatch("session/saveSession", exerciseSession);
    },
    startStopwatch() {
      this.stopwatch = setInterval(() => {
        this.form.end.dateTime = new Date().toISOString();
        this.updateStopwatchDisplay();
      }, 1000);
    },
    stopStopwatch() {
      clearInterval(this.stopwatch);
    },
    updateStopwatchDisplay() {
      if (this.form.start.dateTime) {
        const start = new Date(this.form.start.dateTime);
        const end = new Date(this.form.end.dateTime);
        const duration = end - start;
        const hours = Math.floor(duration / 3600000);
        const minutes = Math.floor((duration % 3600000) / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        this.stopwatchDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
    },
    setAutoTimeZone() {
      this.form.start.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      this.form.end.timeZone = this.form.start.timeZone;
    }
  }
}
</script>  
<style>
.session-exercise_img {
    width: 30px;
    aspect-ratio: 1;
}

</style>