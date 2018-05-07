export default {
  data () {
    return {
      recaptcha_sitekey: '6LftqVYUAAAAABhiTh3pE0DZOXpwQM9MLTqS8Klw',
      recaptchaToken: null
    }
  },
  created () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    getRecaptchaToken (token) {
      this.recaptchaToken = token
    }
  }
}
