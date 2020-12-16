<template>
  <section class="wrapper-view">
  <Header>
    <router-link to="/TeacherForm">Cadastre-se<img class="go-to" src="@/assets/icons/back.svg" alt="Veja os proffys disponíveis"></router-link>
  </Header>
  <TitleList />
  <TeacherBox :Teachers="Teachers"/>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import TitleList from '@/components/TitleList.vue';
import TeacherBox from '@/components/TeacherBox.vue';
export default {
name: 'TeacherList',
components: {
  Header,
  TitleList,
  TeacherBox
},
data() {
  return {
    Teachers: {
    Vinicius: {
      name:"Vinícius Muller",
      description:"Oi meu nome é Vinícius",
      fone:"9810112347",
      price:"20,00"
    },
    Mayk: {
      name:"Mayk Brito",
      description:"Oi meu nome é Mayk",
      fone:"981054338",
      price:"30,00"
    },
    Diego: {
      name:"Diego Fernandes",
      description:"Oi meu nome é Diego",
      fone:"981014567",
      price:"40,00"
    }
    }
  }
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
</style>
