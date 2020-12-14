<template>
  <section class="wrapper-view">
    <Header />
    <div class="title-box">
      <h1>Que incrivel que você quer dar aula</h1>
      <p>O primeiro passo, é preencher esse formlário de inscrição</p>
    </div>
    <form>
      <h2>Seus Dados</h2>
      <div class="spacer"></div>
      <label for="name">Nome</label>
      <input type="text" id="name" name="name">
      <label for="picture">Link para sua foto  <small>(comece com https://)</small></label>
      <input type="text" id="picture" name="picture">
      <label for="whatsapp">Whatsapp</label>
      <input type="number" id="whatsapp" name="whatsapp">
      <label for="description">Fale sobre sua história</label>
      <textarea name="description" id="description" cols="30" rows="10"></textarea>
      <h2>Sobre a aula</h2>
      <div class="spacer"></div>
      <label for="subject">Matéria</label>
      <select name="subject" id="subject">
        <option value="1">Artes</option>
        <option value="2">Português</option>
        <option value="3">Matemática</option>
        <option value="4">Ciências</option>
      </select>
      <label for="price">Custo da hora/aula</label>
      <input type="number">
      <h2>Horários disponíveis</h2>
      <div class="spacer"></div>
      <div class="schedules-box">
        <label for="day">Dia da semana</label>
        <select name="day" id="day">
          <option value="1">Segunda-feira</option>
          <option value="2">Terça-feira</option>
          <option value="3">Quarta-feira</option>
          <option value="4">Quinta-feira</option>
          <option value="5">Sexta-feira</option>
          <option value="6">Sabádo</option>
          <option value="7">Domingo</option>
        </select>
        <label for="from">Das</label>
        <input type="time" name="from" id="from">
        <label for="to">Até</label>
        <input type="time" id="to" name="to">
      </div>
      <div class="form-end">
        <img src="@/assets/icons/warning.svg" alt="Preencha todos os dados">
        <span>Preencha todos os dados</span>
        <input type="submit" class="submit" value="Salvar cadastro">
      </div>
    </form>
  </section>
</template>

<script>import Header from '@/components/Header.vue';
export default {
name: 'TeacherForm',
components: {
  Header
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

.wrapper-view .title-box {
  width: 100vw;
  height: 200px;
  background-color: rgb(145 107 234);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper-view .title-box h1 {
  color: white;
  margin-bottom: 10px;
}

.wrapper-view .title-box p {
  color:white;
}

form {
  width: 80%;
  background-color: white;
}

</style>