<template>
  <div>
    <h2>Login</h2>
    <form>
      <input v-model="user" type="text" name="user" id="user">
      <input v-model="password" type="password" name="password" id="password">
      <input type="submit" value="Ingresar">
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      user: '',
      password: ''
    }
  }
}
</script>