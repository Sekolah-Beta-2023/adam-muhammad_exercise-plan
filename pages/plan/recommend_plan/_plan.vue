<template>
    <div class="exercise-container">
        <Header :title="this.$route.params.plan"/>
        
        <div class="exercise-list-container">
            <div v-for="exercise in recommendPlan" class="exercise-list">
                <img class="exercise-img" :src="exercise.gifUrl" :alt="exercise.name">
                <div class="exercise-desc">
                    <h2>{{exercise.name}}</h2>
                    <p>{{exercise.target}}</p>
                </div>
            </div>
            <button class="add_plan" @click="addPlan">Add to Plan</button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import Header from "@/components/Header.vue"

export default {
    layout: 'plain',
    components: {
        Header
    },
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