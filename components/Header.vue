<template>
    <div class="container">
        <div class="menu">
            <NuxtLink to="/"><span>un</span>spoiled</NuxtLink>
        </div>
        <div class="search">
            <input type="text">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"/>
        </div>
        <div class="login">
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/register">Register</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>


<style scoped>
    .container {
        width: 100vw;
        height: 5.5rem;
        /* background-color: var(--dark-grey); */
        /* background: blue; */
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu {
        width: 33vw;
    }
    .menu a {
        color: white;
        
    }

    .menu:first-child {
        font-size: 3rem;
        font-weight: bold;
    }

    .menu span {
        color: var(--light-green);
    }

    .search {
        display: flex;
        align-items: center;
        width: 20vw;
        justify-content: space-between;
    }

    .search svg {
        width: 1.5rem;
        color: white;
        height: 1.5rem;
        
    }

    .search input {
        background-color: var(--dark-grey);
        border: 0;
        border-bottom: solid 1px white;
        height: 1.5rem;
        width: 17vw;
        color: white;
    }

    .search input:focus {
        /* outline: none;
        border-bottom: solid 2px white; */
        border: 0;
    }

    .login {
        width: 33vw;
        /* background-color: red; */
        height: 1rem;
        display: flex;
        gap: 2rem;
        justify-content: flex-end;
        padding-right: 1rem;
    }

    
    
    
</style>