<template>
<div class="session_container">
    <header class="session_header-container">
        <div class="session_header-back-btn">&#10005;</div>
        <h2 class="session_header-title">11:22:33</h2>
    </header>
    <form class="session_form-container">
    <div class="session_form-head">
        <p class="title">Workout A</p>
        <div class="session_weight-location">
            <input type="number" placeholder="body weight (kg)">
            <input type="text" placeholder="location">
        </div>
    </div>
    <div class="session_form-body">
        <div class="session_exercise-container">
            <div class="session_exercise">
                <div class="session_exercise-desc">
                <img class="session_exercise-img" src="https://v2.exercisedb.io/image/MB13H6J3mjKTQt" alt="exercise.name">
                <p>barbell deadlift</p>
                </div>
                <p>&#65086;</p>
            </div>
            <div class="session_rep-weight">
                <div>
                    <input type="number" name="repetition" placeholder="Rep" required>
                    <input  type="number" name="weight" placeholder="Weight" required>
                </div>
                <div>
                    <button class="session_btn delete" type="button" >&#10005;</button>
                    <button class="session_btn done" type="button" >&#10004;</button>
                </div>
            </div>
            <div class="session_rep-weight">
                <div>
                    <input type="number" name="repetition" placeholder="Rep" required>
                    <input  type="number" name="weight" placeholder="Weight" required>
                </div>
                <div>
                    <button class="session_btn delete" type="button" >&#10005;</button>
                    <button class="session_btn done" type="button" >&#10004;</button>
                </div>
            </div>

            <button type="button" >add</button>
        </div>
        <div class="session_exercise-container">
            <div class="session_exercise">
                <div class="session_exercise-desc">
                <img class="session_exercise-img" src="https://v2.exercisedb.io/image/MB13H6J3mjKTQt" alt="exercise.name">
                <p>barbell deadlift</p>
                </div>
                <p>&#65086;</p>
            </div>
            
            <div class="session_rep-weight">
                <div>
                    <input type="number" name="repetition" placeholder="Rep" required>
                    <input  type="number" name="weight" placeholder="Weight" required>
                </div>
                <div>
                    <button class="session_btn delete" type="button" >&#10005;</button>
                    <button class="session_btn done" type="button" >&#10004;</button>
                </div>
            </div>
            <div class="session_rep-weight">
                <div>
                    <input type="number" name="repetition" placeholder="Rep" required>
                    <input  type="number" name="weight" placeholder="Weight" required>
                </div>
                <div>
                    <button class="session_btn delete" type="button" >&#10005;</button>
                    <button class="session_btn done" type="button" >&#10004;</button>
                </div>
            </div>

            <button type="button" >add</button>
        </div>
        <div class="session_exercise-container">
            <div class="session_exercise">
                <div class="session_exercise-desc">
                <img class="session_exercise-img" src="https://v2.exercisedb.io/image/MB13H6J3mjKTQt" alt="exercise.name">
                <p>barbell deadlift</p>
                </div>
                <p>&#65086;</p>
            </div>
            
                <div class="session_rep-weight">
                    <div>
                        <input type="number" name="repetition" placeholder="Rep" required>
                        <input  type="number" name="weight" placeholder="Weight" required>
                    </div>
                    <div>
                        <button class="session_btn delete" type="button" >&#10005;</button>
                        <button class="session_btn done" type="button" >&#10004;</button>
                    </div>
                </div>
                <div class="session_rep-weight">
                    <div>
                        <input type="number" name="repetition" placeholder="Rep" required>
                        <input  type="number" name="weight" placeholder="Weight" required>
                    </div>
                    <div>
                        <button class="session_btn delete" type="button" >&#10005;</button>
                        <button class="session_btn done" type="button" >&#10004;</button>
                    </div>
                </div>
            <button type="button" >add</button>
        </div>
    </div>

    <button >save session</button>
    </form>
</div>
</template>
<script>
// import { mapGetters } from "vuex"

export default {
layout: 'plain',
// data() {
//     return{
//     form: {
//         session_name: this.$route.params.session,
//         body_weight: 0,
//         location: "",
//         start: {
//         dateTime: "",
//         timeZone: ""
//         },
//         end: {
//         dateTime: "",
//         timeZone: ""
//         },
//         exercises: []
//     },
//     stopwatch: null,
//     stopwatchDisplay: "00:00:00" 
//     }
// },
// created() {
//     this.sets()
//     this.form.start.dateTime = new Date().toISOString();
//     this.setAutoTimeZone();
//     this.startStopwatch();
// },
// beforeDestroy() {
//     this.stopStopwatch();
// },
// computed: {
//     ...mapGetters({
//     getPlanByName: 'plans/getPlanByName',
//     getExercisesByNames: 'exercises/getExercisesByNames'
//     }),
//     plan() {
//     const plan = this.getPlanByName(this.$route.params.session)

//     if (plan) {
//         const dataExercise = this.getExercisesByNames(plan.exercises);
//         const hasilData = dataExercise.map(exercise => {
//         const matchingPlan = this.form.exercises.find(plan => plan.exercise_name === exercise.name);
//         if (matchingPlan) {
//             exercise.sets = matchingPlan.sets;
//         }
//         return exercise;
//         });

//         return hasilData;
//     } else {
//         return [];
//     }
//     }
// },
// methods: {
//     sets() {
//     const plan = this.getPlanByName(this.$route.params.session)
    
//     plan.exercises.forEach(exercise => this.form.exercises.push({
//         exercise_name: exercise,
//         sets: [
//         {
//             reps: 0,
//             weight: "",
//             rest_time: "",
//         }
//         ]
//     }))
//     },
//     tambahSet(exerciseName) {
//     const matchingExercise = this.form.exercises.find(exercise => exercise.exercise_name === exerciseName);
//     if (matchingExercise) {
//         matchingExercise.sets.push({
//         "reps": 0,
//         "weight": "",
//         "rest_time": ""
//         });
//     }
//     },
//     deleteSet(exercise, set) {
//     const matchingExercise = this.form.exercises.find(item => item.exercise_name === exercise.name);
//     if (matchingExercise) {
//         // Temukan indeks set yang akan dihapus
//         const setIndex = matchingExercise.sets.indexOf(set);
//         if (setIndex !== -1) {
//         // Hapus set dari array sets
//         matchingExercise.sets.splice(setIndex, 1);
//         }
//     }
//     },
//     save() {
//     this.stopStopwatch();
//     this.form.end.dateTime = new Date().toISOString();
//     console.log(this.form);
//     this.$store.dispatch("session/saveSession", this.form);
//     },
//     startStopwatch() {
//     this.stopwatch = setInterval(() => {
//         this.form.end.dateTime = new Date().toISOString();
//         this.updateStopwatchDisplay();
//     }, 1000);
//     },
//     stopStopwatch() {
//     clearInterval(this.stopwatch);
//     },
//     updateStopwatchDisplay() {
//     if (this.form.start.dateTime) {
//         const start = new Date(this.form.start.dateTime);
//         const end = new Date(this.form.end.dateTime);
//         const duration = end - start;
//         const hours = Math.floor(duration / 3600000);
//         const minutes = Math.floor((duration % 3600000) / 60000);
//         const seconds = Math.floor((duration % 60000) / 1000);
//         this.stopwatchDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//     }
//     },
//     setAutoTimeZone() {
//     this.form.start.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     this.form.end.timeZone = this.form.start.timeZone;
//     }
// }
        }
</script>  
<style>
.session_header-container {
    border: 3px solid black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    color: black;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.session_header-back-btn {
    font-size: 30px;
    background-color: white;
    border: 3px solid black;
    width: 50px;
    aspect-ratio: 1;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.session_header-title {
    color: black;
    font-family: var(--ff-heading);
    font-size: 30px;
    margin-left: 30px;
}

.session_container {
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: white;
padding: 80px 0 150px 0;
}

.session_form-container {
    width: 90%;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:stretch;
}

.session_form-head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    padding: 20px;
}

.session_form-head > .title {
    font-family: var(--ff-heading);
    font-size: 30px;
}

.session_weight-location > input {
    border: 1px solid black;
}

.session_exercise-container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.session_exercise {
    border: 3px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    align-self: stretch;
}

.session_exercise-desc {
display: flex;
align-items: center;
}

.session_exercise-img {
border: 1px solid black;  
width: 50px;
aspect-ratio: 1;
margin-right: 10px;
}

.session_rep-weight {
    border: 3px solid black;
    padding: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.session_btn {
background-color: inherit;
border: 1px solid black;
border-radius: 0;
}

.delete {
background-color: red;
}

.done {
background-color: greenyellow;
}

</style>