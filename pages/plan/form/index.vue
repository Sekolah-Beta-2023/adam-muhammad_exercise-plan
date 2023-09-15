<template>
    <div class="form-container">
        <section class="add-plans">
            <div class="plan-header">
                <img class="plan-img-logo" src="" alt="exercise">
                <input class="plan-name" type="text" placeholder="Exercise Name">
            </div>
            <div class="input-container">
                <input class="search-bar-exercise" type="search" name="search" id="search">
                <select @change="updatedList()" class="sort-exercise" name="target" id="target" v-model="selectedTarget">
                    <option value="All">select target</option>
                    <option value="abs">abs</option>
                    <option value="quads">quads</option>
                    <option value="lats">lats</option>
                    <option value="calves">calves</option>
                    <option value="pectorals">pectorals</option>
                    <option value="glutes">glutes</option>
                </select>
            </div>
            <div class="list-container">
                <ListItem v-for="exercise in sortedExercise" :exercise="exercise" :key="exercise.id"/>                
            </div>
        </section>
    </div>
</template>

<script>
import ListItem from "@/components/List/ListItem.vue"
import exerciseData from "@/assets/exercise.json"

export default {
    components: {
        ListItem
    },
    data() {
        return{
            exerciseData: exerciseData,
            sortedExercise: exerciseData,
            selectedTarget: "All",
        }
    },
    mounted() {
        this.sortedExercise = this.exerciseData
    },
    methods: {
        updatedList() {
            if(this.selectedTarget === "All") {
                this.sortedExercise = this.exerciseData
            } else {
                this.sortedExercise = this.exerciseData.filter((item) => item.target === this.selectedTarget)
            }
        }
    }

}
</script>

<style>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202124;
    padding-bottom: 150px;
    padding-top: 50px;
}

.add-plans {
    width: 90%;
    border-radius: 4px;
    border: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
}

.plan-name:focus {
    border: none;
    border-bottom: 2px solid black;
}

/* search, sort */
.search-bar-exercise {
    width: 70%;
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
    align-self: center;
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
    margin-bottom: 20px;
}

.input-container {

    display: flex;
    justify-content: space-around;
    padding: 30px;
}



</style>