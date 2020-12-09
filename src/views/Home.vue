<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.svg" alt="Proffy">
    <img src="@/assets/landing.svg" alt="Proffy">

    <div class="buttons-wrapper">
    <router-link class="list" to="/TeacherList">
    <img src="@/assets/icons/study.svg" alt="Encontrar professores">
    Estudar</router-link>
    <router-link class="form" to="/TeacherForm">
    <img src="@/assets/icons/give-classes.svg" alt="Cadastre-se">
    Dar aulas</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color:rgb(145 107 234);
  display:grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.home .logo {
  margin-left: 100px;
}

.buttons-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.list {
  height: 80px;
  width: 200px;
  border-radius: 5px;
  background: #9871F5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s all;
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
}

.list img {
  width:30px;
  margin:0;
  padding:0;
  }

.list:hover {
 background: #916BEA;
}

.form {
  height: 80px;
  width: 200px;
  border-radius: 5px;
  background: #04D361;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s all;
  text-decoration: none;
  font-size: 1.4rem;
}

.form img {
  width: 30px;
}

.form:hover {
 background: #04BF58;
}
</style>