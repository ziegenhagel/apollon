<script lang="ts" setup></script>

<template>
  <nav>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
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
}

li {
  list-style: none;
}

a {
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #fff;
}

</style>
