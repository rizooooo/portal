<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-5 col-sm-5 mx-auto">
      <div class="card mt-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9 mx-auto">
            <h3 class="text-center mt-3 card-title">Please Login</h3>
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control form-control-sm" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control form-control-sm" v-model="password" placeholder="Password">
           <div class="row">
             <div class="col-md-6">
           <a class="password-help" href="#">Forgot Password?</a>
             </div>
             <div class="col-md-6 text-right">
             <a class="password-help" href="#">Reset Password?</a>
             </div>
           </div>
        </div>
        <div class="row mb-3">
          <div class="col-xs-6 mx-auto">
           <vue-recaptcha  @verify="getRecaptchaToken" :sitekey=recaptcha_sitekey></vue-recaptcha>
          </div>
        </div>
      <div class="text-center">
        <button type="button" @click="login" class="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
     <div class="col-xs-12 mt-5">
        <p class="text-justify"><strong>UNAUTHORIZED ACCESS TO ANY STATE OR FEDERAL COMPUTING SYSTEM CONTAINING US GOVERNMENT OR STATE INFORMATION IS A CRIMINAL VIOLATION OF THE PENAL CODE SECTION 502 AND/OR APPLICABLE LAWS AND IS SUBJECT TO CIVIL AND CRIMINAL SANCTIONS.</strong></p>
        <p class="text-justify text-muted">Whoever knowingly or intentionally accesses a computing system without authorization or exceeding authorized access, and by means of such conduct, obtains, alters, damages, destroys, or discloses on, or prevents authorize users of any data or computing resource owned by or operated for State of California shall be subject to disciplinary action, prosecution or both. Use in a manner other than as intended by the State of California may result in the forfeiture of access privileges.All computing system activities may be recorded and monitored. Individuals using these systems expressly consent to such monitoring and shall have no expectation of privacy in their use. Evidence of possible misconduct or abuse may be provided to appropriate officials and/or law enforcement. No warranty is made for the computing resources that are subject to this policy. Additionally, the State of California takes no responsibility of damages for the intentional misuse of these resources by any party.</p>
     </div>
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
      password: null
    }
  },
  mixins: [ reCaptchaMixin ],
  components: {
    VueRecaptcha
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password,
          recaptchaToken: this.$data.recaptchaToken
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
        this.$router.push({
          name: 'dashboard'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.password-help {
  font-size: 12px;
}
</style>
