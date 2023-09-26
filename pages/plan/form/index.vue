<template>
    <div class="form-container">
        <header class="exercise-header">
            <nuxt-link class="back-btn" to="/plan">&#8249;</nuxt-link>
            <h2 class="exercise-title">Build Plan</h2>
        </header>
        <form class="add-plans" v-on:submit.prevent="handleSubmit">
                <div class="plan-header">
                    <img class="plan-img-logo" src="~/assets/istockphoto-1248698782-612x612.jpg" alt="exercise">
                    <input v-model="form.plan_name" class="plan-name" type="text" placeholder="Exercise Name" required>
                </div>
                <div class="input-container">
                    <input class="search-bar-exercise" type="search" name="search" id="search" v-model="searchText">
                    <select class="sort-exercise" name="target" id="target" v-model="selectedTarget">
                        <option value="">select target</option>
                        <option v-for="target in allTarget" :value="target">{{ target }}</option>
                    </select>
                </div>
                <div class="list-container">
                    <label v-for="exercise in filteredExercises" class="exercise-label" :for="exercise.name" :key="exercise.id">
                        <input class="exercise-check" type="checkbox" :name="exercise.name" :value="exercise" :id="exercise.name" v-model="form.exercises">
                        <img class="exercise-img" :src="exercise.gifUrl" :alt="exercise.name">
                        <div class="title-desc-container">
                            <h3 class="title-exercise">{{ exercise.name }}</h3>
                            <p class="desc-exercise">{{ exercise.target }}</p>
                        </div>
                    </label>
                    <button class="add-30" @click="addExercise" v-if="hasMoreExercises">Load More</button>
                </div>
                <button type="submit" class="save-btn" :disabled="!form.plan_name || !isAtLeastOneCheckboxSelected">Save</button>
        </form>
    </div>
</template>

<script>
import ListItem from "@/components/List/ListItem.vue"
import allTargetMuscles from "@/assets/all_muscles.json"
import allExercisesData from "@/assets/all_exercise.json"

export default {
    layout: 'dashboard',
    components: {
        ListItem
    },
    data() {
        return{
            allExercises: allExercisesData,
            allTarget: allTargetMuscles,
            searchText: "",
            selectedTarget: "",
            exerciseLimit: 30,
            form: {
                plan_name: '',
                exercises: []
            }
        }
    },
    computed: {
        filteredExercises() {
            let filteredExercises = this.allExercises
            if (this.searchText) {
                filteredExercises = filteredExercises.filter((exercise) =>
                    exercise.name.toLowerCase().includes(this.searchText.toLowerCase())
                )
            }
            if(this.selectedTarget) {
                filteredExercises = filteredExercises.filter((item) => item.target === this.selectedTarget)
            }
            return filteredExercises.slice(0, this.exerciseLimit)
        },
        hasMoreExercises() {
            return this.exerciseLimit <= this.filteredExercises.length;
        },
        isAtLeastOneCheckboxSelected() {
            return this.form.exercises.length > 0
        },
    },
    methods: {
        handleSubmit() { 
            this.$store.dispatch('plans/addPlan', this.form);
            this.$router.go(-1)
        },
        addExercise() {
            if (this.hasMoreExercises) {
                this.exerciseLimit += 30;
            }
        }
    }

}
</script>

<style>

.exercise-header {
    background-color: #202124;
    border: 1px solid #aaa;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.exercise-header button {
    background-color: inherit;
    color: white;
}

.back-btn {
    display: block;
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

.back-img {
    width: 50px;
    -webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
}

.exercise-title {
    color: white;
    margin-left: 30px;
}

/*  */

.form-container {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #202124;
    padding: 80px 0 150px 0;
}

.add-plans {
    width: 90%;
    border-radius: 4px;
    border: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:stretch;

}

.plan-header {
    padding: 20px 30px;
    display: flex;
    border-bottom: 1px solid #aaa;
}

.plan-img-logo {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.plan-name {
    background-color: inherit;
    width: 80%;
    border: none;
    border-bottom: 2px solid #aaa;
    align-self: flex-end;
    height: 40px;
    margin-left: 20px;
    padding: 0 10px;
    font-size: large;
    color: white;
}

.plan-name:focus {
    border: none;
    border-bottom: 2px solid black;
}

/* search, sort */
.input-container {
    display: flex;
    justify-content: space-around;
    padding: 30px 10px;
}


.search-bar-exercise {
    width: 80%;
    height: 40px;
    background-color: inherit;
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 5px 20px;
    color: white;
}

.sort-exercise {
    background-color: inherit;
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 5px 20px;
    color: white;
}

/*  */

.list-container {
    border: 1px solid #aaa;
    border-radius: 4px;
    align-self: stretch;
    margin: 0 10px 10px 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.list-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.save-btn {
    color: white;
    background-color: inherit;
    border: 1px solid #aaa;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 0 10px 10px 0;
    aspect-ratio: 3/2;
    align-self: flex-end;
    cursor: pointer;
}

.add-30 {
    background-color: #202124;
    border: 1px solid #aaa;
    color: white;
    font-size: larger;
    padding: 10px;
    border-radius: 0px 0px 4px 4px;
}

</style>