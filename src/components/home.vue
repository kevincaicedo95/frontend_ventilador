<template>
  <div>
      <enlaces_emp></enlaces_emp>
      <h4><strong>Bienvenido al sistema de trazabilidad</strong></h4>
      <img src="../assets/ventilador.jpg" class="img-fluid" alt="Responsive image">
  </div>
</template>

<script>
import enlaces_emp from './enlaces_emp'
export default {
    name: 'home',
    components: {
        enlaces_emp
    }
}
</script>

<style>
h4{
    color: #034403;
    margin-bottom: 2%;
    margin-top: 5%;
}
img.img-fluid{
    margin-bottom: 2%;
    margin-top: 5%;
}
</style>