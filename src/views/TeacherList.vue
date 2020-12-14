<template>
  <section class="wrapper-view">
  <Header />
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
      fone:"981010207",
      price:"20,00"
    },
    Mayk: {
      name:"Mayk Brito",
      description:"Oi meu nome é Mayk",
      fone:"981010208",
      price:"30,00"
    },
    Diego: {
      name:"Diego Fernandes",
      description:"Oi meu nome é Diego",
      fone:"981010209",
      price:"40,00"
    }
    }
  }
}
}
</script>

<style scoped>
.wrapper-view {
  min-height: 100vh;
  width: 100vw;
  background-color: #F0F0F7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
