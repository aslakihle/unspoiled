<template>
  <div class="container">
    <img src="~assets/img/landing-img.jpg" alt="">
    <div class="text">
      <div><span class="lightgreen">un</span>spoiled is a dynamic wiki for book series that <span class="bold"> avoids spoilers</span><br> by showing information based on what you have <span class="bold"> already read</span></div>
    </div>

  <!-- backend get req -->

  <!-- <button @click="showMessageFromBackend">Show message from backend</button> -->

  </div>
  
</template>

<script>
export default {

  // Backend Get request
  methods: {
    async showMessageFromBackend () {

      try {
        const response = await this.$axios.post('/api/login')
        console.log(response)
      } catch (err) {
        console.log(err)
      }

    }
  }
}
</script>

<style scoped>

.container img {
  object-fit: cover;
  object-position: 0 0;
  height: 20rem;
  width: 100vw;
  overflow: hidden;
}

.text {
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 4rem;
  text-align: center;
  line-height: 1.8;
}


.lightgreen {
  color: var(--light-green)
}

.bold {
  font-weight: bold;
}



</style>