<template>
  <div class="container">
    <h1 class="my-5 text-center">Administrando la lista de Opiniones</h1>
    <table v-if="opiniones.length > 0" class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Persona</th>
          <th>Juego</th>
          <th>Opinión</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, index) in opiniones" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ opinion.nombre }}</td>
          <td>{{ opinion.juego }}</td>
          <td>{{ opinion.opinion }}</td>
          <td>
            <button class="btn btn-danger me-5" @click="borrar(index)">Eliminar</button>
              <router-link :to="{name: 'editar', params:{id: index+1}}">
              <button class="btn btn-primary">Editar</button></router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-danger" role="alert" v-else>
      No existen opiniones por administrar.
    </div>
  </div>
</template>

<script>
export default {
  
  methods:{

    borrar(index) {
      this.$store.commit("borrar",index);
    },
  },
  computed: {
    opiniones() {
      return this.$store.state.opiniones;
    },
    
   
  },
};
</script>