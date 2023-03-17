<template>
  <section class="projeck">
    <base-card>
      <div class="main">
        <div>
          <img src="@/assets/main-img.png" alt="" class="img" />
        </div>
        <div>
          <img src="@/assets/main-img.png" alt="" class="img" />
        </div>
      </div>
      <div class="main">
        <div>
          <img src="@/assets/main-img.png" alt="" class="img" />
        </div>
        <div>
          <img src="@/assets/main-img.png" alt="" class="img" />
        </div>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.projeck {
  position: relative;
  width: 100%;
  display: flex;
  padding: 70px 10% 0;
  justify-content: center;
  align-items: center;
}
.main{
  display: flex;
}

.main div {
  margin: 1rem;
}

.img {
  max-width: 500px;
  width: 100%;
}
</style>
