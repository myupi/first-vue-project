<template>
  <h1>Регистрация</h1>
  <div class="form">
    <form @submit="register">
      <input placeholder="Введите email..." v-model.trim="email">
      <input placeholder="Введите пароль..." v-model.trim="password" type="password">
      <input placeholder="Введите пароль снова..." v-model.trim="passwordAgain" type="password">
      <p v-if="isTrue">Пароли не совпадают</p>
      <button>Зарегестрироваться</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data(){
    return {
      email: "",
      password: "",
      passwordAgain: "",
      isTrue: false
    }
  },
  methods: {
    ...mapActions(["registration"]),
    register(event){
      event.preventDefault()
      if(this.password !== this.passwordAgain){
        this.isTrue = true
        return 0
      }
      this.registration({email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 40px;
  text-align: center;
  margin: 10px;
}
.form, form{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
input{
  padding: 10px;
  border: 2px solid #274d00;
  border-radius: 10px;
  text-align: center;
  width: 50%;
  transition: all 0.3s linear;
}
input:focus{
  outline: 5px rgba(39, 77, 0, 0.3);
}
button{
  padding: 10px;
  border: 2px solid #274d00;
  border-radius: 10px;
  text-align: center;
  width: 50%;
  background: #274d00;
  color: white;
  transition: all 0.3s linear;
  cursor: pointer;
}

button:hover{
  opacity: 0.75;
}
p{
  font-size: 20px;
  color: red;
  text-align: center;
}
</style>