<template>
 <main>
   <article>
     <header>
       <div class="img"></div>
       <h2>Vinicius Muller</h2>
     </header>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde architecto excepturi quae, modi similique vel dicta quia, soluta numquam facere dolorem d, delectus?</p>
     <footer>
       <p>Preço/Hora <strong>R$20,00</strong></p>
       <button><img src="@/assets/icons/whatsapp.svg" alt="Entrar em contato no whatsapp"></button>
     </footer>
   </article>
 </main>
</template>

<script>
export default {
  name: "TeacherBox"
}
</script>

<style scoped>

article {
  width: 60vw;
  background-color: white;
  border-radius: 10px;
  padding:10px;
}

header {
  width:100vw;
  display: flex;
  align-items: center;
}

header .img {
  width: 100px;
  height:100px;
  border-radius: 50%;
  background-color: #eee;
}
</style>