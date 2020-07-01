<template>
  <div>
      <enlaces_ad></enlaces_ad>
      <h4><strong>Bienvenido al sistema de trazabilidad</strong></h4>
      <img src="../assets/ventilador.jpg" class="img-fluid" alt="Responsive image">
  </div>
</template>

<script>
import enlaces_ad from './enlaces_ad'
export default {
    name: 'homead',
    components: {
        enlaces_ad
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