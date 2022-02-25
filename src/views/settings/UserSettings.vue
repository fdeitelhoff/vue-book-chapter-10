<template>
  <hr />
  <nav>
    <router-link to="/settings">Einstellungen</router-link> |
    <router-link to="/settings/profile">Profileinstellungen</router-link> |
    <router-link to="/settings/password">Passwort ändern</router-link>
  </nav>
  <div>
    <p>User Settings</p>
    <p>Hauptseite</p>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'UserSettings',
};
</script>
