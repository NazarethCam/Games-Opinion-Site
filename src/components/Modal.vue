<template>
  <div id="modal-opinion" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Escribe tu opinión para el juego: {{ juego }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            id="nombre"
            class="form-control"
          />
          <label for="opinion" class="form-label">Opinion</label>
          <textarea
            v-model="opinion"
            name="opinion"
            id=""
            cols="30"
            rows="10"
            class="form-control"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-primary"
            @click="guardarOpinion"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["juego"],
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },

  methods: {
    guardarOpinion() {
      if (this.juego === "" || this.opinion === "") {
        return;
      }

      let data = {
        juego: this.juego,
        nombre: this.nombre,
        opinion: this.opinion,
      };

      this.$store.commit("guardarOpinion", data);

      alert("Opinión guardada");

      this.nombre = "";
      this.opinion = "";
    },
  },
};
</script>