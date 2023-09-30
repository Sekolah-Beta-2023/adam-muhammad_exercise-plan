<template>
    <div class="plan-container">
        <section class="plan-list_container">
            <h1 class="plan-list_title">Your Plan</h1>
            <div class="plan-list">
                <div class="exercise-plan" >
                    <nuxt-link class="add-plan" to="/plan/form">+</nuxt-link>
                </div>
                <div v-for="plan in plans" class="exercise-plan">
                    <nuxt-link class="exercise-plan_link" :to="`/plan/exercise/${plan.plan_name}`" >{{plan.plan_name}}</nuxt-link>
                </div>
            </div>
        </section>
        <section class="plan-list_container">
            <h1 class="plan-list_title">Recommendations</h1>
            <div v-for="plan in recommendation" class="plan-recommend_container">
                <h2 class="plan-list_recommend">{{plan.plan_name}}</h2>
                <div class="plan-list">
                    <div v-for="workout in plan.workout_list" class="exercise-plan" >
                        <nuxt-link class="exercise-plan_link" :to="`/plan/recommend_plan/${workout.workout_name}`">{{workout.workout_name}}</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { fetchExercises } from '~/store/exercises.js'; // Gantilah dengan nama actions yang sesuai


export default {
    layout: 'dashboard',
    computed: {
        ...mapGetters({
            getPlans: 'plans/getPlans',
            getRecommendation: 'recommendation/getRecommendation',
            getExercises: 'exercises/getAllExercises'
        }),
        ...mapActions({
            fetch: 'exercises/fetchExercises'
        }),
        plans() {
            return this.getPlans
        },
        recommendation() {
            return this.getRecommendation
        },
        datafetch() {
            return this.fetch
        },
        exercisess() {
            return this.getExercises
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('exercises/fetchExercises')
            await this.$store.dispatch('plans/loadPlansFromLocalStorage')
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }
}
</script>

<style>
.plan-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #202124;
    color: white;
    height: 100%;
    padding: 10px 0px 100px 0px;
}

.plan-list_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 40px;
    margin-bottom: 50px;
    width: 100%;
}

.plan-list_title {
    margin-bottom: 20px;
}

.plan-recommend_container {
    margin-bottom: 20px;
}

.plan-list_recommend {
    margin-bottom: 10px;
    font-size: 20px;
}

.plan-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.plan-list::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.exercise-plan {
    background-color: #202124;
    margin-right: 20px;
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.exercise-plan_link {
    color: white;
    text-decoration: none;
    text-align: center;
}

.add-plan {
    border-radius: 10px;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
</style>