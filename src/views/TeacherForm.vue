<template>
  <section class="wrapper-view">
    <Header>
      <router-link to="/TeacherList"><img class="go-to" src="@/assets/icons/back.svg" alt="Veja os proffys disponíveis">Proffys disponíveis</router-link>
    </Header>
    <div class="title-box">
      <h1>Que incrivel que você quer dar aula</h1>
      <p>O primeiro passo, é preencher esse formlário de inscrição</p>
    </div>
    <form>
      <h2>Seus Dados</h2>
      <div class="spacer"></div>
      <label for="name">Nome</label>
      <input type="text" id="name" name="name" v-model="name">
      <label for="picture">Link para sua foto  <small>(comece com https://)</small></label>
      <input type="text" id="picture" name="picture" v-model="link">
      <label for="whatsapp">Whatsapp</label>
      <input type="number" id="whatsapp" name="whatsapp" v-model="whatsapp">
      <label for="description">Fale sobre sua história</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="bio"></textarea>
      <h2>Sobre a aula</h2>
      <div class="spacer"></div>
      <label for="subject">Matéria</label>
      <select name="subject" id="subject">
        <option value="1">Artes</option>
        <option value="2">Português</option>
        <option value="3">Matemática</option>
        <option value="4">Ciências</option>
      </select>
      <label for="price">Custo da hora/aula</label>
      <input type="number">
      <h2>Horários disponíveis</h2>
      <div class="spacer"></div>
      <div class="schedules-box">
        <div class="input-box">
        <label for="day">Dia da semana</label>
        <select name="day" id="day">
          <option value="1">Segunda-feira</option>
          <option value="2">Terça-feira</option>
          <option value="3">Quarta-feira</option>
          <option value="4">Quinta-feira</option>
          <option value="5">Sexta-feira</option>
          <option value="6">Sabádo</option>
          <option value="7">Domingo</option>
        </select>
        </div>
        <div class="input-box">
        <label for="from">Das</label>
        <input type="time" name="from" id="from">
        </div>
        <div class="input-box">
        <label for="to">Até</label>
        <input type="time" id="to" name="to">
        </div>
      </div>
      <div class="form-end">
        <div class="warning-box">
        <img src="@/assets/icons/warning.svg" alt="Preencha todos os dados">
        <span>Preencha todos os dados</span>
        </div>
        <input type="submit" class="submit" value="Salvar cadastro" @click.prevent="updateProf({name,link,whatsapp,bio,cost})">
        {{this.$store.state.prof}}
      </div>
    </form>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import {mapActions} from 'vuex';
export default {
name: 'TeacherForm',
components: {
  Header
},
methods: {
  ...mapActions(['updateProf'])
}
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

a .go-to {
  width: 30px;
  height: 25px;
  margin-right: 10px;
}

.wrapper-view {
  min-height: 100vh;
  width: 100vw;
  background-color: #F0F0F7;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper-view .title-box {
  width: 100vw;
  height: 200px;
  background-color: rgb(145 107 234);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper-view .title-box h1 {
  color: white;
  margin-bottom: 10px;
}

.wrapper-view .title-box p {
  color:white;
}

form {
  width: 60%;
  margin-top: 10vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 60px;
}

form .spacer {
  height: 1px;
  background-color: #ddd;
  margin-bottom:30px;
  margin-top:10px;
  
}
form label {
  color: #aaa;
}
form input, select {
  border-radius:10px;
  height: 40px;
  border: none;
  background-color:rgb(252, 246, 246);
  outline:none;
  margin-bottom: 30px;
  font-size: 1rem;
}
form textarea {
  border-radius: 10px;
  border:none;
  background-color:rgb(252, 246, 246);
  outline:none;
  margin-bottom: 30px;
  font-size: 1.3rem;
  height: 100px;
}

form .schedules-box {
 width: 100%;
 display: flex;
 justify-content: space-evenly;
}

form .input-box {
  display:flex;
  flex-direction: column;
  width: 30%;
}

form .form-end {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

form .form-end .submit {
  width: 30%;
  height: 40px;
  background-color: #04D361;
  color:white;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0;
  cursor: pointer;
  transition: all 0.3s;
}

form .form-end .submit:hover {
  background-color: #04BF58;
}

form .form-end .warning-box {
  display:flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width:750px) {
  form .schedules-box {
    flex-direction: column;
    align-items: center;
  }

  form .input-box {
    width: 100%;
  }

  form .form-end .warning-box {
    text-align: center;
    width: 150px;
  }

  form .form-end .submit {
    width: 50%;
  }
}

@media screen and (max-width:550px) {

  .title-box h1 {
    text-align: center;
  }

  .title-box p {
    display: none;
  }

  form {
    text-align: center;
    width: 90%;
    margin-top: 5vh;
  }
  form .form-end {
    flex-direction: column;
  }

  form .form-end .submit {
    width: 60%;
    margin-top: 20px;
  }
}
</style>