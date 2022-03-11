<template>
    <form v-on:submit.prevent="loginRequest" class="login">
        <div class="feedback" v-html="feedbackText"></div>
        <h1>Log in</h1>
        <p>Username</p>
        <input id="login-username" class="small-input form-control" v-model="username" type="text">
        <p>Password</p>
        <input id="login-password" class="small-input form-control" v-model="password" type="password">
        <!-- <button type='button' class="button">Log in</button>  -->
        <input type="submit" class="button" value="Log in">
        <NuxtLink to="/register">or register here</NuxtLink>
    </form>
</template>

<script>
import SetCookieParser from 'set-cookie-parser';
import axios from 'axios'
import util from '../assets/js/util'
require('dotenv').config();
export default {
    
    name: 'Login',

    data() {
        return {
            username: 'Bob',
            password: 'password',
            feedbackText: '',
        };
    },

    methods: {
    //Would like to use the button to do this:
        async loginRequest() {
            await axios.post(process.env.baseURL + 'user/login', {username: this.username, password: this.password}, { 
                withCredentials: true
                })
            .then(response => {
                // const cookies = SetCookieParser.parse(response);
                console.log(response.headers)
                // cookies.forEach((cookie) => {
                //     const { name, value, ...options } = cookie;
                //     $cookies.set(name, value, options);
                // });
                this.feedbackText = response.data.feedback;
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}

</script>



<style scoped>
.feedback {
    width: 20rem;
    height: 30px;
    text-align: center;
    position: relative;
    top: 20px;
}

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