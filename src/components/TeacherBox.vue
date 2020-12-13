<template>
 <main>
   <article v-for="(teacher, index) in Teachers" :key="index">
     <header>
       <div class="img"></div>
       <h2>{{teacher.name}}</h2>
     </header>
     <p class="description">{{teacher.description}}</p>
     <footer>
       <p>Preço/Hora <strong>R${{teacher.price}}</strong></p>
       <button><img src="@/assets/icons/whatsapp.svg" alt="Entrar em contato no whatsapp">
       <span>Entrar em contato</span>
       </button>
     </footer>
   </article>
 </main>
</template>

<script>
export default {
  name: "TeacherBox",
  props:["Teachers"]
}
</script>

<style scoped>

article {
  width: 60vw;
  background-color: white;
  border-radius: 10px;
  margin-top: 10vh;
}

header {
  width:100%;
  display: flex;
  align-items: center;
  padding:20px;
}

header h2 {
  padding-left: 40px;
}

header .img {
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

footer button {
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
}

footer button:hover {
  background-color: #04BF58;
}

footer button img {
  width: 20px;
  height: 20px;
}

footer button span {
  font-size: 1rem;
  font-weight: bold;
}

</style>