<template>
  <div>
    <p>Profil mit ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['id'],
};
</script>
