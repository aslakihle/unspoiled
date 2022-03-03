<template>
    <div class="login">
        <h1>Register</h1>
        <p>Username</p>
        <input id="register-username" class="small-input" type="text">
        <p>Password</p>
        <input id="register-password" class="small-input" type="password">
        <p>Repeat password</p>
        <input id="register-repeat" class="small-input" type="password">
        <div class="button" >Register</div>
        <NuxtLink to="/register">or log in here</NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'Register'
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