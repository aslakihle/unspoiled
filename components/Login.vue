<template>
    <div class="login">
        <h1>Log in</h1>
        <p>Username</p>
        <input id="login-username" class="small-input" type="text">
        <p>Password</p>
        <input id="login-password" class="small-input" type="password">
        <div class="button" >Log in</div>
        <NuxtLink to="/register">or register here</NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>


.login {
    width: 20rem;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    flex-wrap: wrap;
}

.login h1 {
    color: white;
    margin: 0;
    padding: 0;
}

.login p {
    margin: 0;
    padding: 0;
    padding-top: .5rem;
    width: 100%;
}

.login input {
    width: 100%;
}

.button {
    width: 100%;
    background-color: var(--light-green);
}

.login a {
    text-align: center;
    margin: auto;
    color: white;
}

</style>