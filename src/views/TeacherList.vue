<template>
  <section class="wrapper-view">
  <Header>
    <router-link to="/TeacherForm">Cadastre-se<img class="go-to" src="@/assets/icons/back.svg" alt="Veja os proffys disponíveis"></router-link>
  </Header>

  
  <div class="title-box">
  <h1 v-if="prof.length >= 1">Esses são os proffys disponíveis.</h1>
  <h1 v-else>Não possuímos proffys disponíveis.</h1>
  <img src="@/assets/down-arrow.svg" alt="ver proffys">
  </div>

    <main v-if="prof.length >= 1">
   <article v-for="(teacher, index) in prof" :key="index">
     <header class="header">
       <img class="img" :src="`${teacher.link}`">
       <h2>{{teacher.name}}</h2>
     </header>
     <p class="description">{{teacher.description}} - <strong>{{teacher.subject}}</strong></p>
     <footer>
       <p>Preço/Hora <strong>R${{teacher.price}}</strong></p>
       <p><strong>{{teacher.day}}</strong> das {{teacher.from}} as {{teacher.to}}</p>
       <a :href='`https://api.whatsapp.com/send?phone=${teacher.fone}&text=Ol%C3%A1`'><img src="@/assets/icons/whatsapp.svg" alt="Entrar em contato no whatsapp">
       <span>Entrar em contato</span>
       </a>
     </footer>
   </article>
 </main>

 <div class="no-teachers" v-else>
   <img src="@/assets/sad.svg" alt="ainda não temos nenhum cadastro">
   <p>cadastre-se já</p>
 </div>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import {mapActions, mapState} from 'vuex';
export default {
name: 'TeacherList',
components: {
  Header
},
computed: {
  ...mapState(["prof"])
},
methods: {
  ...mapActions(['updateProf']),
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
  margin-left: 10px;
  transform: rotate(180deg);
}

.wrapper-view {
  min-height: 100vh;
  width: 100vw;
  background-color: #F0F0F7;
  display: flex;
  flex-direction: column;
  align-items: center;
}

 .title-box {
    width:100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(145 107 234);
    position:relative;
  }

  .title-box h1 {
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }

  .title-box img {
    height: 5vh;
    position:absolute;
    bottom: 0;
    animation: arrow 0.5s ease-in infinite alternate;
  }

  @keyframes arrow {
    from {
      bottom:3vh;
    }
    to {
      bottom: 0;
      }
  }

article {
  width: 60vw;
  background-color: white;
  border-radius: 10px;
  margin-top: 10vh;
}

.header {
  width:100%;
  display: flex;
  align-items: center;
  padding:20px;
}

.header h2 {
  padding-left: 40px;
}

.header .img {
  width: 100px;
  height:100px;
  border-radius: 50%;
  background-color: #eee;
}


.description {
  color: rgb(54, 54, 54);
  padding-right:20px;
  padding-left: 20px;
  padding-bottom: 20px;
}

footer {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #ccc;
  padding:20px;
}

footer a {
  width: 30%;
  height: 50px;
  border:none;
  background-color:#04D361;
  color:white;
  border-radius: 5px;
  align-self:center;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  transition:all 0.3s;
  cursor:pointer;
  text-decoration: none;
}

footer a:hover {
  background-color: #04BF58;
}

footer a img {
  width: 20px;
  height: 20px;
}

footer a span {
  font-size: 1rem;
  font-weight: bold;
}

.no-teachers {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vh;
}

.no-teachers img {
  opacity: 0.2;
  margin-bottom: 10px;
}

.no-teachers p{
  opacity: 0.3;
}

@media screen and (max-width:995px) {

  .title-box {
    height: 50vh;
  }

  footer a {
    background-color:transparent;
  }

  footer a:hover {
    background-color: transparent;
  }

  footer a span {
    display:none;
  }

  footer a img {
    width: 30px;
    height: 30px;
  }
}

@media screen and (max-width:550px){

  article {
    width: 90vw;
    text-align: center;
  }

  article .header {
    justify-content: center;
    flex-direction:column;
  }

  article .header h2 {
    padding: 0;
  }

  article .header .img {
    margin-bottom: 2vh;
  }

}

</style>
