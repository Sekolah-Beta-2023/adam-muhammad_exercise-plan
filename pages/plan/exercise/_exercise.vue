<template>
    <div class="session-container">
        <Header :title="this.$route.params.exercise" />
        <div class="plan-exercises-container">
            <ExerciseList :plan="plan" />
            <div class="btn_container">
                <button class="delete-plan_btn" @click="deletePlan">Delete</button>
                <nuxt-link class="start-session_btn" :to="`/plan/exercise/session/${this.$route.params.exercise}`">Start</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import Header from "@/components/Header"
import ExerciseList from "@/components/ExerciseList.vue"

export default {
    layout: 'plain',
    components: {
        Header, ExerciseList
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
    padding: 80px 0 150px 0;
}

/*  */

.session_container {
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: white;
padding: 80px 0 150px 0;
}

.plan-exercises-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    padding: 80px 0 150px 0;
}

.delete-plan_btn {
    background-color: white;
    border: 3px solid black;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
}

.start-session_btn {
    color: black;
    text-decoration: none;
    border: 3px solid black;
    padding: 10px 20px;
}

.btn_container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 10px 10px 10px;
}

</style>