<template>
    <header class="exercise-header">
        <h2 class="exercise-title">Exercise Plan</h2>
        <nuxt-link class="back-btn" to="/plan">Dashboard</nuxt-link>
    </header>
</template>

<script>


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
    justify-content: space-between;
    align-items: center;
}

.exercise-header button {
    background-color: inherit;
    color: white;
}

.back-btn {
    display: block;
    background-color: #202124;
    border: 1px solid #aaa;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.exercise-title {
    color: white;
    margin-left: 30px;
}
</style>

