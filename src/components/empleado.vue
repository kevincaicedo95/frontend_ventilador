<template>
  <div>
      <enlaces_ad></enlaces_ad>
      <h2>
          <font style="vertical-aling: inherit;">
              Formulario ingreso empleados
          </font>
      </h2>
      <div class="row">
                <label for="firstName">
                    <font style="vertical-aling: inherit;">
                        Nombres
                    </font>
                </label>
                <input type="text" class="form-control" id="firsname" v-model="nuevoempleado.nombres" placeholder vaule required>
                <label for="lastName">
                    <font style="vertical-aling: inherit;">
                        Apellidos
                    </font>
                </label>
                <input type="text" class="form-control" id="firsname"  v-model="nuevoempleado.apellidos" placeholder vaule required>
                <label form="document">
                    <font style="vertical-aling: inherit;">
                        Documento
                    </font>
                </label>
                <input type="document" class="form-control" id="document" v-model="nuevoempleado.documento" placeholder vaule required>
                <label for="age">
                    <font style="vertical-aling: inherit;">
                        Edad
                    </font>
                </label>
                    <input type="age" class="form-control" id="age" v-model="nuevoempleado.edad" placeholder vaule required>
                <label for="emai">
                    <font style="vertical-aling: inherit;">
                        <font style="vertical-aling: inherit;">
                            Correo
                        </font>
                    </font>
                </label>
                <input type="email" class="form-control" id="email" v-model="nuevoempleado.correo" placeholder vaule required>
                <label for="address">
                    <font style="vertical-aling: inherit;">
                        <font style="vertical-aling: inherit;">
                            Direccion
                        </font>
                    </font>
                </label>
                <input type="address" class="form-control" id="address" v-model="nuevoempleado.direccion" placeholder vaule required>
                <label for="phone">
                    <font style="vertical-aling: inherit;">
                        <font style="vertical-aling: inherit;">
                            Telefono
                        </font>
                    </font>
                </label>
                <input type="Phone" class="form-control" id="Phone" v-model="nuevoempleado.telefono" placeholder vaule required>
                <label for="text">
                    <font style="vertical-aling: inherit;">
                        <font style="vertical-aling: inherit;">
                            EPS
                        </font>
                    </font>
                </label>
                <input type="text" class="form-control" id="EPS" v-model="nuevoempleado.eps"  placeholder vaule required>
                <div class="col text-center">
                    <button class="Btn btn-outline-succes" type="button"  v-on:click="validacion(nuevoempleado)">
                        GUARDAR
                    </button>
                </div>
        </div>
    </div>
</template>
<script>
import enlaces_ad from './enlaces_ad'
export default {
    name: 'home',
    components: {
        enlaces_ad
    },
    data(){
        return{
            nuevoempleado:{
                nombres:'',
                apellidos:'',
                documento:'',
                edad:'',
                correo:'',
                telefono:'',
                direccion:'',
                eps:''
            }
        }
    },
    methods:{
        validacion(nuevoempleado){
            var bandera=0;
            if((nuevoempleado.nombres!='') && (nuevoempleado.apellidos!='') && (nuevoempleado.documento!='')
            && (nuevoempleado.edad !='') && (nuevoempleado.correo!='' ) && (nuevoempleado.direccion!='' )
            && (nuevoempleado.telefono!='' ) && (nuevoempleado.eps!='' )){
                bandera=1;
            }
            if (bandera==0){
                alert('Por favor llenar todos los espacios')
            }
            else{
                alert('Ususario guardado')
                this.nuevoempleado.nombres='';
                this.nuevoempleado.apellidos='';
                this.nuevoempleado.documento='';
                this.nuevoempleado.edad='';
                this.nuevoempleado.correo='';
                this.nuevoempleado.telefono='';
                this.nuevoempleado.direccion='';
                this.nuevoempleado.eps='';
            }
        }
    }
}
</script>

<style>
h2{
    margin-top: 5%;
    margin-bottom: 5%;
    color: #034403;
}
div.row{
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
}
</style>