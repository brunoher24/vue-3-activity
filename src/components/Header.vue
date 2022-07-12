<template>
  <div class="header">
    <header id="page-header">
      <h1>Mon super site</h1>
      <nav>
        <ul>
          <li :class="{ active: selected === 'home' }">
            <RouterLink @click="selected = 'home'" to="/">
              Accueil
              <!-- Add Icons using String format -->
              <font-awesome-icon
                class="home-icon"
                icon="fa-solid fa-home-alt"
              ></font-awesome-icon>
            </RouterLink>
          </li>
          <li :class="{ active: selected === 'about' }">
            <RouterLink @click="selected = 'about'" to="/a-propos"
              >A propos</RouterLink
            >
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
.home-icon {
    font-size: 14px;
    padding-bottom: 1px;
    padding-left: 5px;
}

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
