<template>
    <nav class="navbar">
        <div class="navbar-container">
            <nuxt-link class="nav-link" to="/plan" exact>Plans</nuxt-link>
            <nuxt-link class="nav-link" to="/calendar" exact>Calendar</nuxt-link>
            <nuxt-link class="nav-link" to="/profile" exact>Profile</nuxt-link>
        </div>
    </nav>
</template>

<script>


</script>

<style> 
.navbar {
    position: fixed;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    z-index: 100;
}

.navbar-container {
    font-size: 15px;
    display: flex;
    justify-content: center;
    background: #202124;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.nav-group {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nav-link {
    justify-self: stretch;
    list-style-type: none;
    margin: 0;
    padding: 20px 25px;
    width: 100px;
    text-align: center;
    text-decoration: none;
}

.nuxt-link-exact-active {
    background-color: white;
    color: #202124;
    border-radius: 4px;
}

.nav-link.nuxt-link-exact-active {
    background-color: white;
    color: #202124;
    border-radius: 4px;
}

.nav-link {
    color: white;
}

</style>

