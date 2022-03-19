<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="my-5">Lista de juegos disponibles</h1>
      </div>
      <div
        v-for="(juego, index) in juegos"
        :key="index"
        class="col-lg-4 col-sm-6"
      >
        <div class="card mb-4">
          <img :src="juego.background_image" class="card-img-top" alt="..." height="230vh"/>
          <div class="card-body">
            <h5 class="card-title">{{ juego.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ juego.rating }}</li>
            <li class="list-group-item">Released: {{ juego.released }}</li>
            <li class="list-group-item">Updated: {{ juego.updated }}</li>
          </ul>
          <div class="card-body text-center">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modal-opinion"
              @click="cargarJuego(juego.name)"
            >
              Opinar
            </button>
          </div>
        </div>
      </div>
      <Modal :juego="juegoSeleccionado"></Modal>
    </div>
  </div>
</template>

<script>
import juegos from "../games.json";
import Modal from "../components/Modal.vue"

export default {
  components: { Modal },
  data() {
    return {
      juegos: juegos,
      juegoSeleccionado: "",
    };
  },

  methods: {
    cargarJuego(juego) {
      this.juegoSeleccionado = juego;
    },
  },
};
</script>