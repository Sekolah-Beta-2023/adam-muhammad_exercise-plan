<template>
    <header class="home-header_container">
        <h2 class="home-header_title fs-600">PlanEx</h2>
        <nuxt-link class="home-header_btn" to="/plan">Dashboard</nuxt-link>
    </header>
</template>

<script>


</script>

<style>
.home-header_container {
    background-color: #ffffff;
    border: 3px solid #000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.home-header_title {
    color: black;
    font-family: var(--ff-heading);
    font-size: var(--fs-700);
    margin-left: 30px;
}

.home-header_btn {
    font-family: var(--ff-primary);
    padding: 10px 20px;
    border: 4px solid black;
    text-decoration: none;
}


</style>

