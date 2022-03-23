<template>
    <form v-on:submit.prevent="registerRequest" class="login">
        <h1>Register</h1>
        <p>Username</p>
        <input id="register-username" class="small-input" v-model="username" type="text">
        <p>Password</p>
        <input id="register-password" class="small-input" v-model="password" type="password">
        <p>Repeat password</p>
        <input id="register-repeat" class="small-input" v-model="repeat" type="password">
        <input type="submit" class="button" value="Register">
        <NuxtLink to="/register">or log in here</NuxtLink>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',

     data() {
        return {
            username: '',
            password: '',
            repeat: '',
            feedbackText: '',
        };
    },

    methods: {
        
        async registerRequest() {
            if (this.password === this.repeat) {
                await axios.put(this.$config.API_URL + `auth/register`, {username: this.username, password: this.password}, { 
                    withCredentials: true
                    })
                .then(response => {
                    // const cookies = SetCookieParser.parse(response);
                    console.log(response.status)
                    // cookies.forEach((cookie) => {
                    //     const { name, value, ...options } = cookie;
                    //     $cookies.set(name, value, options);
                    // });
                    if (response.status = 200) {
                        this.$router.push('/login')
                    }
                    this.feedbackText = response.data.feedback;
                    
            })
            .catch(err => {
                console.log(err)
            })
            } else {
                this.password = '';
                this.repeat = '';
                this.feedbackText = 'These passwords do not match';
            }
            
        }
    }

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