<template>
    <nav class="navbar">
        <div class="navbar-container">
            <ul class="nav-group">
                <li class="nav-item active-nav">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Plans</a>
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
    position: fixed;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
}

.navbar-container {
    font-size: 15px;
    display: flex;
    justify-content: stretch;
    background: rgba( 220, 220, 220, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border-radius: 10px;
}

.logo-container {
    background-color: #d5fc44;
    box-shadow: 1px 6px 25px 4px rgba(0,0,0,0.09);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.nav-group {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nav-item {
    justify-self: stretch;
    list-style-type: none;
    margin: 0;
    padding: 20px 25px;
}

.active-nav {
    border-radius: 10px;
    background-color: #d5fc44;  
}

.nav-link {
    color: #000000;
}

</style>

