<template>
    <div class="exercise-container">
        <Header :title="this.$route.params.exercise" />
        <div class="plan-exercises-container">
            <div class="exercise-list_container">
                <div v-for="exercise in plan" class="exercise-list">
                    <img class="exercise-img" :src="exercise.gifUrl" :alt="exercise.name">
                    <div class="exercise-desc">
                        <h2>{{exercise.name}}</h2>
                        <p>{{exercise.target}}</p>
                    </div>
                </div>
            </div>
            <button class="delete_plan" @click="deletePlan">Delete</button>
            <nuxt-link class="start-session_btn" :to="`/plan/exercise/session/${this.$route.params.exercise}`">Start</nuxt-link>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import Header from "@/components/Header"

export default {
    layout: 'plain',
    components: {
        Header
    },
    computed: {
        ...mapGetters({
            getPlanByName: 'plans/getPlanByName',
            getExercisesByNames: 'exercises/getExercisesByNames'
        }),
        plan() {
            const plan = this.getPlanByName(this.$route.params.exercise)
            if (plan) {
                const data = this.getExercisesByNames(plan.exercises);
                return data;
            } else {
                return [];
            }
        }
    },
    methods: {
        deletePlan() {
            this.$store.dispatch('plans/deletePlan', this.$route.params.exercise);
            this.$router.go(-1)
        }
    }
}
</script>
<style>
.exercise-container {
    background-color: white;
    width: 100%;
    height: 100vh;
    padding-bottom: 150px;
}

/*  */

.plan-exercises-container {
    margin-top: 100px;
    width: 90vw;
    height: fit-content;
    border: 3px solid black;
}

.exercise-list_container {
    border: 3px solid black;
    color: black;
    width: 100%;
    height: 200px;
    overflow: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.exercise-list::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.exercise-list {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
}

.exercise-desc {
    margin-left: 10px;
}


.start-session_btn {
    color: black;
    text-decoration: none;
    border: 3px solid black;
    border-radius: 4px;
}


</style>