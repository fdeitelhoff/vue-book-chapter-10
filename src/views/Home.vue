<template>
  <div>
    <p>Home</p>
  </div>
  <div>
    <button @click="onRedirectToAbout">Zu "Über uns"</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async onRedirectToAbout() {
      console.log('on redirect to about click');

      await this.$router.push('/about');
    },
  },
};
</script>
