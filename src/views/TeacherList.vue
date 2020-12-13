<template>
  <div class="wrapper-view">
  <Header />
  <TitleList />
  <TeacherBox />
  <TeacherBox />
  <TeacherBox />
  </div>
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
