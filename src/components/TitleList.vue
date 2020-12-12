<template>
  <div class="wrapper">
      <h1>Esses são os proffys disponíveis.</h1>


    <div class="input-wrapper">
      <div class="select-box">
        <label for="subject">Matéria</label>
        <select name="subject" id="subject">
          <option v-for="(subject, index) in subjects" :key="index">{{subject}}</option>
        </select>
      </div>

      <div class="select-box">
        <label for="days">Dias</label>
        <select name="days" id="days">
          <option v-for="(day,index) in days" :key="index">{{day}}</option>
        </select>
      </div>

      <div class="select-box">
        <label for="time">Matéria</label>
        <input type="time" name="time" id="time">
      </div>

      <button class="submit">Procurar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleList",
  data() {
    return {
      subjects:["Artes", "Português", "Matemática", "Ciências"],
      days:["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"]
    }
  }

}
</script>

<style scoped>

  .wrapper {
    width:100vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper h1 {
    color: white;
    text-align: center;
    margin-bottom: 50px;
  }

  .wrapper .input-wrapper {
    display:flex;
    justify-content: center;
    width: 80vw;
  }

  .wrapper .select-box {
    display:flex;
    flex-direction: column;
    width: 20%;
    margin: 0 10px;
  }

  .wrapper .select-box label {
    color:white;
  }
  
  .wrapper .select-box select, input {
    outline: none;
    height: 30px;
    border-radius: 5px;
    color: rgb(145 107 234);
    font-size: 0.9rem;
    cursor: pointer;
    border:none;
  }
  
  .wrapper .input-wrapper .submit{
    width: 20%;
    height: 40px;
    border-radius:5px;
    background-color: #04D361;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s all;
    margin-top: 20px;
  }

  .wrapper .input-wrapper .submit:hover {
    background-color: #04BF58;
  }
</style>