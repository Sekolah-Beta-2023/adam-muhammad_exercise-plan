<template>
    <nav class="navbar">
        <div class="logo-container">
            <span class="logo-font">Exercise logo</span>
        </div>
        <div class="navbar-container">
            <ul class="nav-group">
                <li class="nav-item active-nav">
                    <a class="nav-link active">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active">Calendar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active">Profile</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>


</script>

<style>
.navbar {
    width: 80%;
    position: fixed;
    left: 0;
    right: 0;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
}

.logo-container {
    background-color: white;
    box-shadow: 1px 6px 25px 4px rgba(0,0,0,0.14);
    padding: 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-font {
    background-color: #E9FAE3;
    padding: 10px 20px;
    border-radius: 30px;
}

.navbar-container {
    right: 10px;
    background-color: white;
    box-shadow: 1px 6px 25px 4px rgba(0,0,0,0.14);
    padding: 10px 10px;
    border-radius: 50px;
    font-size: 15px;
}

.nav-group {
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
}

.nav-item {
    list-style-type: none;
    margin: 0;
    padding: 10px 25px;
    border-radius: 40px;
}

.active-nav {
    background-color: #E9FAE3;  
}

.nav-link {
    color: #703D57;
}

</style>

