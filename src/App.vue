<template>
  <div id="app">
    <nav>
      <router-link to="/">Startseite</router-link> |
      <router-link to="/about" @click.native="onAboutClick"
        >Über uns</router-link
      >
      |
      <router-link :to="{ name: 'Profiles', params: { id: 12 } }"
        >Profil anzeigen</router-link
      >
      |
      <router-link to="/settings">Einstellungen</router-link>
    </nav>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade-custom" mode="out-in">
          <div>
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // Die Route hat sich verändert...
        console.log('route change...', toParams, previousParams);
      }
    );
  },
  methods: {
    onAboutClick() {
      console.log('on about click');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-custom-enter-active,
.fade-custom-leave-active {
  transition: opacity 5.5s;
}
.fade-custom-enter,
.fade-custom-leave-to {
  opacity: 0;
}
</style>
