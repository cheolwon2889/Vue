<template>
  <header>
    <nav>
      <h1><router-link to="/">My Portfolio</router-link></h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projeck" >Projeck</router-link></li>
        <li><router-link to="/contact" >Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
header a {
  font-size: 18px;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-weight: 500;
  margin-left: 20px;
  transition: 0.3s;
}

header ul a:active,
header ul a:hover,
header ul a.router-link-active {
  color: #0ef;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  font-size: 24px;
  opacity: 0;
  animation: slideRight 1s ease forwards;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: slideTop 1s ease forwards;
}

li {
  margin: 0 0.5rem;
}

@keyframes slideRight {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideTop {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
