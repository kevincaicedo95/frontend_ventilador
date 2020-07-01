<template>
  <div class="nav-scroller bg-white shadow-sm">
      <nav class="nav nav-underline">
          <a class="nav-link active" href="/Home">
                <font style="vertical-aling: inherit;">
                    <font style="vertical-aling: inherit;">
                        Home
                    </font>
                </font>
            </a>
            <a class="nav-link active" href="#">
                <font style="vertical-aling: inherit;">
                    <font style="vertical-aling: inherit;">
                        Registro
                    </font>
                </font>
          </a>
          <a class="nav-link active" href="#">
                <font style="vertical-aling: inherit;">
                    <font style="vertical-aling: inherit;">
                        Consulta
                    </font>
                </font>
          </a>
          <a class="nav-link active" href="/">
                <font style="vertical-aling: inherit;">
                    <font style="vertical-aling: inherit;">
                        Salir
                    </font>
                </font>
          </a>

      </nav>
  </div>
</template>

<script>
export default {
}

</script>
<style>
nav.nav.nav-underline{
    margin-left: 5%;
    margin-right: 5%;
}
a{
    font-size:90%;
}
a.nav-link.active{
padding-left: 5%;
padding-right:5%;
}

</style>