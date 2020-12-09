<template>
  <header>
    <router-link to="/">
    <img class="back" src="@/assets/icons/back.svg" alt="Voltar a pagina inicial">
    </router-link>
    <img class="logo" src="@/assets/logo.svg" alt="Proffy">
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
    justify-content: space-around;
    align-items: center;
    background:rgb(145 107 234);
  }

  header a .back {
    width: 100px;
    height: 30px;
  }

  header .logo {
    width: 80px;
    height: 20px;
  }
</style>