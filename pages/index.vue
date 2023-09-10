<template>
    <main>
        <section class="add-plans">
            <div class="plan-header">
                <img class="plan-img-logo" src="../assets/istockphoto-1248698782-612x612.jpg" alt="exercise">
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
    </main>
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
main {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
}

.add-plans {
    width: 90%;
    margin-top: 50px;
    background: rgba( 220, 220, 220, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:stretch;

}

.plan-header {
    background-color: #d3dbe5;
    padding: 20px 30px;
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.plan-img-logo {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: 2px solid black;
    border-radius: 5px;
}

.plan-name {
    background-color: inherit;
    width: 80%;
    border: none;
    border-bottom: 2px solid black;
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

/*  */

.list-container {
    border: 2px solid black;
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

.search-bar-exercise {
    width: 70%;
    height: 40px;
    background-color: inherit;
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px 20px;
}

.sort-exercise {
    background-color: inherit;
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px 20px;
}


</style>