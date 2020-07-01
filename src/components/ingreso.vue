<template>
<div>
    <h1 class="h3 mb-3 font-weight-normal">Ingrese su usuario</h1>
    <label for="inputEmail">
        <font style="vertical-aling: inherit"></font>
    </label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Usuario" v-model="newUser.name" required autofocus >
    
    <label for="inputPassword" class="sr-only">
        <font style="vertical-aling: inherit"></font>
    </label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" v-model="newUser.contrasena" required>
    <button class="Btn btn-outline-succes" type="button" v-on:click="comparacion(user,newUser)">
        INGRESAR 
    </button>
</div>
</template>


<script>
export default {
    data(){
        return{
            user:[{
                name:'Kevin@hotmail.com',
                contrasena:'1234',
                funcion:'empleado'
            },
            {
                name:'jean@hotmail.com',
                contrasena:'12345',
                funcion:'administrador'
            }],
            newUser:{}
        }
    },
    methods:{
            comparacion(user,newUser){
                var bandera=0;
                var funcion;
                for ( const i of user){
                    if ((i.name==newUser.name)&&(i.contrasena==newUser.contrasena)){
                        bandera=1;
                        funcion=i.funcion;
                        break;                    
                    }
                }
                if (bandera==0){
                    alert('Usuario incorrecto');
                }
                else{
                    if(funcion=='administrador'){
                        this.$router.push('homead');
                    }
                    else{
                        this.$router.push('home');
                    }
                }
                this.newUser={};
            }           
    }
}
</script>

<style>

button.Btn.btn-outline-succes{
    color: #28a745;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
}
div{
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
</style>