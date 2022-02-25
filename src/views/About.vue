<template>
  <div>
    <p>About</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    const resolved = this.$router.resolve({
      name: 'Profiles',
      params: { id: 123 },
    });

    console.log(resolved, resolved.href); // -> '/profiles/123'
  },
};
</script>
