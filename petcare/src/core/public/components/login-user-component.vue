<script >
//import {AuthApiService} from "@/services/aut-api.service.js";

export default {
  name: 'login-user',
  data() {
    return {
      email: '',
      password: '',
      //userApiService: new AuthApiService()
    }
  },
  /* methods: {
     login(){
       let storage = sessionStorage;
       storage.setItem('email',this.email)
       //storage.setItem('password',this.password)

       let body ={
         email: this.email,
         password: this.password
       }

       this.userApiService.login(body).then(response=>{
         storage.setItem('jwt',response.data.accessToken)
       })
     },
     logout(){
       let storage = sessionStorage;
       storage.removeItem('password')
       // storage.clear()
     }

   },
   created() {
     let storage = sessionStorage;
     this.email = storage.getItem('email')
     this.password = storage.getItem('password')
   }*/

}
</script>

<template>
  <div class="login-header"/>

  <div class="container">
    <div class="login-box">
      <div class="login-title">
        <h1>Bienvenido Usuario Pet&Care</h1>
      </div>
      <div class="row">
        <label>Correo Electrónico</label><br />
        <pv-input-text id="email" v-model="email" class="input-field"></pv-input-text><br/>
        <label>Contraseña</label><br/>
        <pv-input-text id="password" type="password" v-model="password" class="input-field"></pv-input-text><br/>
        <div class="register-link">
          <RouterLink to="/">
            <span>Regresar</span>
          </RouterLink>
        </div>
      </div>
      <div class="button-container">
        <pv-button id="btLogin" class="login-button">Iniciar Sesión</pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-header{
  height: 10vh;
  margin-bottom: 15px;
  background-color: #376eec;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: #f0f0f0;

}

.login-box {
  display: inline-block;
  background-color: white;
  padding: 5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
}

.login-title h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #376eec;
}

.row {
  margin-bottom: 15px;
  text-align: left;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.register-link {
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  margin-top: 10px;
}

span{
  color: darkorange;
}

.button-container {
  text-align: center;
}

.login-button {
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.login-button:hover {
  background-color: white;
  color: #007bff;
}
</style>