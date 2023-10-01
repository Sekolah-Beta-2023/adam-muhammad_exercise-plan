<!-- <template>
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
  </script> -->

<template>
  <div>
    <h2>{{  }}</h2>
    <h1>{{ this.$route.params.session }}</h1>
    <ul>
      <li v-for="exercise in plan">
        <img class="session-exercise_img" :src="exercise.gifUrl" :alt="exercise.name">
        <p>{{ exercise.name }}</p>
        <div class="rep-weight" v-for="(set, index) in exercise.sets">
          <label :for="`${exercise.name}repetition${index}`">Rep
            <input v-model="set.rep" type="number" name="repetition" :id="`${exercise.name}repetition${index}`">
          </label>
          <label :for="`${exercise.name}weight${index}`">weight(kg)
            <input v-model="set.weight" type="number" name="weight" :id="`${exercise.name}weight${index}`">
          </label>
        </div>
        <button type="button" @click="tambahSet(exercise.name)">add</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  layout: 'dashboard',
  data() {
    return{
      form: {
        nama_plan: this.$route.params.session,
        exercises: []
      }
    }
  },
  created() {
    this.sets()
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

        console.log(hasilData)
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
        rest_time: "",
        sets: [
            {
              reps: 0,
              weight: "",
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