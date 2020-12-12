<template>
  <div class="wrapper">
  <Header />
  <TitleList />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TitleList from '@/components/TitleList.vue';
export default {
name: 'TeacherList',
components: {
  Header,
  TitleList
}
}
</script>

<style scoped>
.wrapper {
  background:rgb(145 107 234);
}
</style>
