<template>

  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">

       
      <li class="lista-fotos lista-fotos-item" v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>

    </ul>

  </div>

</template>

<script>

// agora temos apenas a propriedade `fotos` que é um array que possui dois objetos que possuem as propriedades `url` e `titulo`, cada um com seu valor.
export default {

  data() {
    return {
      titulo: 'Alurapic',
      fotos: []

    }
  },

  created(){
      let promise = this.$http.get('http://localhost:3000/v1/fotos');
      promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
</style>