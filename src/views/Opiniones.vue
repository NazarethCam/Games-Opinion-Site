<template>
  <div class="container">
    <h1 class="my-5 text-center">Lista de opiniones</h1>

    <div class="opiniones" v-if="opiniones.length > 0">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div
          class="accordion-item"
          v-for="(opinion, index) in opiniones"
          :key="index"
        >
          <h2 class="accordion-header" :id="`flush-${index}`">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#flush-collapse-${index}`"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Opinión creada por: {{ opinion.nombre }}. Para el juego:
              {{ opinion.juego }}
            </button>
          </h2>
          <div
            :id="`flush-collapse-${index}`"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <strong>Opinión:</strong> {{ opinion.opinion }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>
      No existen opiniones por mostrar.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    opiniones() {
      return this.$store.state.opiniones;
    },
  },
};
</script>