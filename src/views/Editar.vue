<template>
  <div class="container">
    <h2 class=" my-4  text-center titulo">Editando la opinión de:{{ juego }}</h2>
    <form >
      <div class=" mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nombre:
        </label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="exampleInput1"
        />
      </div>
      <div class=" mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Opciones:</label
        >
        <textarea
          v-model="opinion"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="text-start">
        
      <router-link to="/administracion"
          ><button type="button" class="btn btn-primary" @click="regresar">Regresar</button></router-link>
      
        <button type="button" class="btn btn-info" @click="guardar">Guardar</button>
      </div>
    </form>
   
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      nombre: "",
      opinion: "",
      juego: "",
    };
  },
  methods: {
     regresar() {
            this.$router.go(-1);
        },
    guardar(){
       let data ={
         index: this.id-1,
         opinion: {
           nombre: this.nombre,
           opinion: this.opinion,
           juego: this.filtrarOpiniones.juego,
         },
        
       }
       this.$store.commit("editarOpiniones", data)
       this.nombre = "";
      this.opinion = "";
    }

  },

  computed: {
    traerId() {
      return this.$route.params.id-1;
    },
    filtrarOpiniones() {
      return this.$store.getters.filtrarOpiniones(this.traerId);
    },
  },
  mounted(){
    this.nombre = this.filtrarOpiniones.nombre;
    this.opinion = this.filtrarOpiniones.opinion;
    this.juego = this.filtrarOpiniones.juego;
  },
};
</script>

<style>
.titulo {
  margin-top: 7vh;
}
</style>
