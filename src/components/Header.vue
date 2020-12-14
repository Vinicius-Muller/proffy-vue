<template>
  <header>
    <router-link to="/">
    <img class="logo" src="@/assets/logo.svg" alt="Proffy">
    </router-link>
    <slot></slot>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  header {
    width: 100vw;
    height: 50px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    background:rgb(145 107 234);
  }

  header a .logo {
    width: 100px;
    height: 50px;
  }

</style>