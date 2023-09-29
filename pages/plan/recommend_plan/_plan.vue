<template>
    <div class="exercise-container">
        <header class="exercise-header">
            <div class="back-btn_container">
                <nuxt-link class="back-btn" to="/plan">&#8249;</nuxt-link>
                <h2 class="exercise-title">{{this.$route.params.plan}}</h2>
            </div>
            <button class="add_plan" @click="addPlan">Add to Plan</button>
        </header>
        <div class="exercise-list-container">
            <div v-for="exercise in recommendPlan" class="exercise-list">
                <img class="exercise-img" :src="exercise.gifUrl" :alt="exercise.name">
                <div class="exercise-desc">
                    <h2>{{exercise.name}}</h2>
                    <p>{{exercise.target}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
    layout: 'dashboard',
    computed: {
        ...mapGetters({
            getRecommendByName: 'recommendation/getRecommendByName',
            getExercisesByNames: 'exercises/getExercisesByNames'
        }),
        recommendPlan() {
            const recommend = this.getRecommendByName(this.$route.params.plan)
            const data = this.getExercisesByNames(recommend)
            return data
        }
    },
    methods: {
        addPlan() {
            const recommend = {
                plan_name: this.$route.params.plan,
                exercises: this.getRecommendByName(this.$route.params.plan)
            }
            this.$store.dispatch('plans/savePlan', recommend);
            this.$router.go(-1)
        }
    }
}
</script>
<style>
.exercise-container {
    background-color: #202124;
    width: 100%;
    height: 100vh;
    padding-bottom: 150px;
}

.exercise-header {
    border: 1px solid #aaa;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back-btn_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.back-btn {
    font-size: 30px;
    background-color: #202124;
    border: none;
    border-right: 1px solid #aaa;
    width: 50px;
    aspect-ratio: 1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.exercise-title {
    color: white;
    margin-left: 30px;
}

.add_plan {
    font-size: 15px;
    border: 1px solid #aaa;
    justify-items: flex-end;
    width: 100px;
    height: 50px;
    cursor: pointer;
}

/*  */

.exercise-list-container {
    margin-top: 100px;
    border: 1px solid #aaa;
    border-radius: 4px;
    color: white;
    width: 100%;
    overflow: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.exercise-list::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.exercise-list {
    border-bottom: 1px solid #aaa;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
}

.exercise-desc {
    margin-left: 10px;
}





</style>