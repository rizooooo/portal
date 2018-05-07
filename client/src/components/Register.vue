<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-5 col-sm-5 mx-auto">
      <div class="card mt-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9 mx-auto">
            <h3 class="text-center mt-3 card-title">Sign Up</h3>
        <form>
            <div v-bind:class="{ 'alert-success': !hasError, 'alert-danger': hasError }" class="alert alert-dismissible fade show" role="alert" v-show=error>
  <strong>Oh snap!</strong>&nbsp;{{ error }}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control form-control-sm" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control form-control-sm" v-model="password" placeholder="Password">
        </div>
        <div class="row mb-3">
          <div class="col-xs-6 mx-auto">
           <vue-recaptcha class="g-recaptcha" @verify="getRecaptchaToken" :sitekey=recaptcha_sitekey></vue-recaptcha>
          </div>
        </div>
      <div class="text-center mb-5">
        <button type="button" class="btn btn-primary btn-lg" @click="register">Sign Up</button>
        </div>
      </form>
            </div>
          </div>
  </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import AuthService from '@/services/AuthService'
import reCaptchaMixin from '@/mixins/reCaptchaMixin'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: null,
      password: null,
      error: null,
      noError: null,
      hasError: null
    }
  },
  mixins: [ reCaptchaMixin ],
  components: {
    VueRecaptcha
  },
  methods: {
    async register () {
      if (!this.$data.recaptchaToken) {
        this.error = 'reCaptcha is not checked!'
        this.alert = 'alert-danger'
        return
      }
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password,
          recaptchaToken: this.$data.recaptchaToken
        })
        if (response.status === 200 && response.statusText === 'OK') {
          this.error = 'You have successfully registered!'
          this.hasError = false
          setTimeout(() => this.$router.push({
            name: 'login'
          }), 4000)
        }
      } catch (error) {
        this.error = error.response.data.error
        this.hasError = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
