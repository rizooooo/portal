<template>
<nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <img class="ptpc_logo py-0" src="../../assets/ptpc_logo.jpg" />
    </a>
     <a class="navbar-brand" href="#">
     <h3 class="">{{ title }}</h3>
    </a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbarColor03" style="">
      <ul class="navbar-nav ml-auto" v-if="!$store.state.isUserLoggedIn">
        <li class="nav-item active">
          <router-link class="nav-link py-0" :to="{ path: '/'}" replace>{{ login }}</router-link>
        </li>
        <li class="nav-item">
          <!-- <router-link v-on:click.native="showTerms" to="/">{{ register }}</router-link> -->
           <router-link class="nav-link py-0" v-on:click.native="showTerms" to="#">{{ register }}</router-link>
        </li>
      </ul>
        <ul class="navbar-nav ml-auto" v-if="$store.state.isUserLoggedIn">
        <li class="nav-item">
          <router-link class="nav-link py-0" :to="{ path: '/register'}" replace @click.native="logout">{{ logoutLabel }}</router-link>
        </li>
      </ul>
    </div>
    <terms-conditions-modal />
  </nav>
</template>

<script>
import TermsConditionsModal from '@/components/modals/TermsConditionsModal'
import $ from 'jquery'
export default {
  name: 'Header',
  components: {
    TermsConditionsModal
  },
  data () {
    return {
      title: 'Service Management Portal',
      login: 'Login',
      register: 'Register',
      logoutLabel: 'Logout'
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    },
    showTerms () {
      $('#exampleModal').modal('toggle')
    }
  },
  mounted () {
    // $('#exampleModal').modal('toggle')
  }
}
</script>

<style scoped>
.shrpe_logo {
  width: auto;
  height: 45px;
}
.navbar {
  padding: 1px;
}
.ptpc_logo {
    width: 157px;
    height: 45px;
}
.navbar-light {
  background-color: #f8f8f8;
}
</style>
