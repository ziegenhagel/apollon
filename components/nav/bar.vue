<script lang="ts" setup></script>

<template>
  <nav>
    <li>
      <router-link to="/" :class="{ active: $route.path === '/' }">Startseite</router-link>
    </li>
    <li>
      <router-link to="/gallery" :class="{ active: $route.path === '/manage' }">Verwalten</router-link>
    </li>
    <li>
      <router-link to="/interaction" :class="{ active: $route.path === '/interaction' }">Interaktion</router-link>
    </li>
    <li>
      <router-link to="/moodboard" :class="{ active: $route.path === '/moodboard' }">Moodboard</router-link>
    </li>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: #222;
  color: #fff;
  border-top: 8px solid #222;
}

li {
  list-style: none;
}

a {
  display: block;
  padding: .6rem 1rem;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.2s;
  border-radius: 10px 10px 0 0;
  padding-bottom: 5px;
}

a:hover {
  background-color: #333;
}

a.active {
  background-color: #333;
}
</style>
