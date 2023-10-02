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
            <input v-model="set.reps" type="number" name="repetition" :id="`${exercise.name}repetition${index}`">
          </label>
          <label :for="`${exercise.name}weight${index}`">weight(kg)
            <input v-model="set.weight" type="number" name="weight" :id="`${exercise.name}weight${index}`">
          </label>
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
        nama_plan: this.$route.params.session,
        body_weight: 0,
        location: "",
        start_time: "", // Format akan diatur ke "YYYY-MM-DDTHH:mm:ss"
        end_time: "", // Format akan diatur ke "YYYY-MM-DDTHH:mm:ss"
        exercises: []
      },
      stopwatch: null,
      stopwatchDisplay: "00:00:00" // Tampilan awal waktu stopwatch
    }
  },
  created() {
    this.sets()

    // Memulai stopwatch saat halaman selesai dimuat
    this.form.start_time = new Date().toISOString();
    this.startStopwatch();
  },
  beforeDestroy() {
    // Menghentikan stopwatch saat komponen dihancurkan
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
    save() {
      // Menghentikan stopwatch saat tombol "Save" ditekan
      this.stopStopwatch();

      // Menghitung durasi dengan mengurangkan start_time dari end_time
      if (this.form.start_time && this.form.end_time) {
        const duration = new Date(this.form.end_time) - new Date(this.form.start_time);
        // Menyimpan durasi ke dalam form.end_time
        this.form.end_time = new Date(duration).toISOString();
      }

      // Sekarang Anda dapat melakukan penyimpanan atau aksi lainnya dengan data di form
      console.log(this.form);
    },
    startStopwatch() {
      // Memulai stopwatch dengan interval 1 detik
      this.stopwatch = setInterval(() => {
        this.form.end_time = new Date().toISOString();
        // Mengupdate tampilan waktu stopwatch jika Anda ingin menampilkannya di UI
        this.updateStopwatchDisplay();
      }, 1000);
    },
    stopStopwatch() {
      // Menghentikan stopwatch
      clearInterval(this.stopwatch);
    },
    updateStopwatchDisplay() {
      // Fungsi ini menghitung dan memformat waktu stopwatch
      if (this.form.start_time) {
        const start = new Date(this.form.start_time);
        const end = new Date(this.form.end_time);
        const duration = end - start;
        const hours = Math.floor(duration / 3600000);
        const minutes = Math.floor((duration % 3600000) / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        // Format waktu ke dalam format "HH:MM:SS"
        this.stopwatchDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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