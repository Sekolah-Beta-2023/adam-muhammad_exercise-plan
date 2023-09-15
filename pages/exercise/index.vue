<template>
    <div class="exercise-container">
        <header class="exercise-header">
            <nuxt-link class="back-btn" to="/plan">
                <img class="back-img" src="~/assets/pngwing.com (1).png" alt="back">
            </nuxt-link>
            <h2 class="exercise-title">Full Body</h2>
        </header>
        <div class="exercise-list-container">
            <div>
                <img src="" alt="">
                
            </div>
        </div>
    </div>
</template>
<script>
</script>

<style>
.exercise-container {
    background-color: #202124;
    width: 100%;
    height: 100vh;
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
    justify-content: flex-start;
    align-items: center;
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

</style>