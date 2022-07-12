<template>
  <div class="header">
    <header id="page-header">
      <h1>Page with Vue logic</h1>
      <nav>
        <ul>
          <li 
          :class="{ active: selected === 'home' }">
            <RouterLink @click="selected = 'home'" to="/">Accueil</RouterLink>
          </li>
          <li  
          :class="{ active: selected === 'about' }">
            <RouterLink  @click="selected = 'about'" to="/a-propos">A propos</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
    };
  },
};
</script>

<style scoped>
#page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: #e91d63;
  color: white;
}

#page-header ul {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

#page-header li {
  padding: 30px 10px;
}

#page-header a {
  background-color: transparent;
  border-color: transparent;
  color: white !important;
  font-size: 20px;
  text-decoration: none;
}

.active {
  background-color: black;
}
</style>
