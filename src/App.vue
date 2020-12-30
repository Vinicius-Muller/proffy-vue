<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}


h1 {
  font-size: 1.8rem;
}

a {
  margin: 0 20px;
}

.v-enter, .v-leave-to {
  opacity: 0.5;
}
 .v-leave-active, .v-leave-active {
  opacity: 0;
  transition: 0.5s opacity;
}
</style>
