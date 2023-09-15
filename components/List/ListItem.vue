<template>
    <label class="exercise-label" :for="exercise.name">
        <input class="exercise-check" type="checkbox" :name="exercise.name" :value="exercise.id" :id="exercise.name">
        <img class="exercise-img" :src="exercise.gifUrl" alt="training">
        <div class="title-desc-container">
            <h3 class="title-exercise">{{ exercise.name }}</h3>
            <p class="desc-exercise">{{ exercise.target }}</p>
        </div>
    </label>
</template>

<script>
export default {
    props: {
        exercise: Object,
        required: true,
    }
}
</script>

<style>
.exercise-label {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #aaa;
}

.exercise-img {
    margin-left: 10px;
    width: 50px;
    border-radius: 5px;
}

.title-desc-container {
    margin-left: 20px;
    color: white;
}

.title-exercise {
    font-size: 15px;
}

.desc-exercise {
    font-size: 13px;
}

.exercise-container {
    background-color: whitesmoke;
    width: 90%;
    height: 60px;
    display: flex;
    padding: 10px 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 3px;
}



</style>