<template>
  <header>
    <div class="nav container">
      <router-link to="/" class="logo"> Port<span>folio</span> </router-link>
      <div class="navbar">
        <router-link to="/home" class="nav-link">
          <i class="bx bx-home"></i>
          <span class="nav-link-title">Home</span>
        </router-link>
        <router-link to="/Project" class="nav-link">
          <i class='bx bx-window-alt'></i>
          <span class="nav-link-title">Project</span>
        </router-link>
        <router-link to="/Explore" class="nav-link">
          <i class='bx bxs-user-detail'></i>
          <span class="nav-link-title">Introduction</span>
        </router-link>
        <router-link to="/Contact" class="nav-link">
          <i class='bx bx-phone-call' ></i>
          <span class="nav-link-title">Contact</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  width: 100%;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
.bx {
  cursor: pointer;
}
.logo {
  font-size: 1.4rem;
  color: #fcfeff;
  font-weight: 600;
  margin: 0 auto 0 0;
}
.logo span {
  color: #ffb43a;
}

.navbar {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 2.1rem;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d7d7d7;
}

.nav-link:hover,
a.router-link-active {
  color: #0ef;
  transition: 0.3s all linear;
  transform: scale(1.2);
}

.nav-link .bx {
  font-size: 1.6rem;
}

.nav-link-title {
  font-size: 0.7rem;
}
</style>
