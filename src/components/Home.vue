<template>
  <div class="home">
    <div class="form-container" v-show="showForm">
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>
      <p class="error" v-show="showError">Please check the information you have entered. Be sure to fill in all fields.</p>
      <form v-on:submit.prevent="validateForm">
        <p>
          <label for="username">Username
            <input type="text" id="username" v-model="username">
          </label>
        </p>
        <p>
          <label for="email"> Email
            <input type="email" id="email" v-model="email">
          </label>
        </p>
        <p>
          <label for="password">Password
            <input type="password" id="password" v-model="password">
          </label>
        </p>
        <p>
          <label for="passwordVerify">Verify Password
            <input type="password" id="passwordVerify" v-model="passwordVerify">
          </label>
        </p>
        <p><input type="submit" value="Submit"></p>
      </form>
    </div>
    <div class="success-message" v-show="!showForm">
      <h1>Thank you for signing up!</h1>
      <p>Please take our new member survey. <router-link to="/survey">Click here</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function () {
      if ((this.username != '') &&
          (this.email != '') &&
          (this.password === this.passwordVerify)){
        // Form data is valid, so turn off the form to show the success message.
        this.showForm = false;
      } else {
        // Form data is NOT valid, so show the error message.
        this.showError = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
