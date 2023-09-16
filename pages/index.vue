<template>
    <div class="plan-container">
        <section class="plan-list-container">
            <h1 class="plan-list-title">Your Plan</h1>
            <div class="plan-list">
                <div class="exercise-plan" >
                    <nuxt-link class="add-plan" to="/form">+</nuxt-link>
                </div>
                <div class="exercise-plan" >
                    <nuxt-link class="exercise-plan-link" to="/exercise">Strong Lifts 5x5</nuxt-link>
                </div>
                <div class="exercise-plan" >
                    <a class="exercise-plan-link" href="#">Strong Lifts 5x5</a>
                </div>
            </div>
        </section>
        <section class="plan-list-container">
            <h1 class="plan-list-title">Your Plan</h1>
            <div class="plan-list">
                <div class="exercise-plan" >
                    <a class="exercise-plan-link" href="#">Strong Lifts 5x5</a>
                </div>
                <div class="exercise-plan" >
                    <a class="exercise-plan-link" href="#">Strong Lifts 5x5</a>
                </div>
                <div class="exercise-plan" >
                    <a class="exercise-plan-link" href="#">Strong Lifts 5x5</a>
                </div>
                <div class="exercise-plan" >
                    <a class="exercise-plan-link" href="#">Strong Lifts 5x5</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style>
.plan-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #202124;
    color: white;
    height: 100vh;
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