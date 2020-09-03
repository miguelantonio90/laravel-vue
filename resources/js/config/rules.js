const nameRules = [
  (v) => !!v || 'Name is required',
  (v) => v.length <= 10 || 'Name must be less than 10 characters'
]
const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+/.test(v) || 'E-mail must be valid'
]
const passwordRules = [
  (v) => !!v || 'Password is required'
]
const usernameRules = [
  (v) => !!v || 'Username is required',
  (v) => v.length <= 25 || 'Username must be less than 25 characters'
]
const nidRules = [
  (v) => !!v || 'No. Id is required'
]

export default {
  nameRules: nameRules,
  emailRules: emailRules,
  passwordRules: passwordRules,
  usernameRules: usernameRules,
  nidRules: nidRules
}
