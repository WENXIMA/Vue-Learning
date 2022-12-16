<template>

    <nav class="navbar navbar-expand-lg navbar-light" id="navi-container">
        <div class="d-flex flex-grow-1">
            

            <h3 class="navbar-brand d-none d-lg-inline-block">Navigation</h3>
            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul class="navbar-nav ms-auto flex-nowrap">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/coaches" class="nav-link">Coach</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/request" class="nav-link">Request</router-link>
                </li>
                <li class="nav-item">
                    
                    <router-link to="/register" class="nav-link">Join Us</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">LogIn/SignUp</router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar{
    background-color: #F2DEBA;
    font-weight: bolder;
}
.nav-item:hover{
    background-color: #FFEFD6;
    
}
</style>