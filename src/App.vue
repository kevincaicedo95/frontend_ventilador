<template>
    <div id="app">
      <body class="text-center">
        <form class="form-signin">
          <img src="./assets/udea.png" class="mb-4" alt width="128" height="160">
          <h1 class="h3 mb-3 font-weight-normal">TRAZABILIDAD VENTILADOR</h1>
          <hr>
        </form>
        <router-view>
          '/'
        </router-view>
      </body>
    </div> 
</template>

<script>
export default {
}
</script>

<style>
form.form-signin{
  margin-left: 1%;
  margin-right: 1%;
}
h1{
  color: #10641b;
}
</style>
