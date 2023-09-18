<template>
    <div class="plan-container">
        <section class="plan-list-container">
            <h1 class="plan-list-title">Your Plan</h1>
            <div class="plan-list">
                <div class="exercise-plan" >
                    <nuxt-link class="add-plan" to="/plan/form">+</nuxt-link>
                </div>
                <div v-for="plan in plans" class="exercise-plan" >
                    <nuxt-link class="exercise-plan-link" :to="`/plan/exercise/${plan.plan_name}`">{{ plan.plan_name }}</nuxt-link>
                </div>
            </div>
        </section>
        <section class="plan-list-container">
            <h1 class="plan-list-title">Recommendations</h1>
            <div class="plan-recommend-container">
                <h2 class="plan-list-recommend">StrongLifts 5 x 5</h2>
                <div class="plan-list">
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Workout A</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Workout B</a>
                    </div>
                </div>
            </div>
            <div class="plan-recommend-container">
                <h2 class="plan-list-recommend">Power Hypertrophy Upper Lower</h2>
                <div class="plan-list">
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Upper Power</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Lower Power</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Upper Hypertrophy</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Lower Hypertrophy</a>
                    </div>
                </div>
            </div>
            <div class="plan-recommend-container">
                <h2 class="plan-list-recommend">Power Hypertrophy Upper Lower</h2>
                <div class="plan-list">
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Upper Power</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Lower Power</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Upper Hypertrophy</a>
                    </div>
                    <div class="exercise-plan" >
                        <a class="exercise-plan-link" href="#">Lower Hypertrophy</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    layout: 'dashboard',
    computed: {
        ...mapGetters({
            getPlans: 'plans/getPlans'
        }),

        plans() {
            return this.getPlans
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

.plan-list-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 40px;
    margin-bottom: 50px;
    width: 100%;
}

.plan-list-title {
    margin-bottom: 20px;
}

.plan-recommend-container {
    margin-bottom: 20px;
}

.plan-list-recommend {
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

.exercise-plan-link {
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