<template>
  <section class="home">
    <div class="home-content">
      <h2><span>Front-end</span> 개발자</h2>
      <h1>김철원 입니다.</h1>
      <h2>안녕하세요!</h2>
      <p>
        저는
        <strong>
          <VueWriter :array="arr" style="display: inline-block" />
        </strong>
        개발자 입니다.
      </p>
      <div class="social-media">
        <a href="https://cheolwonkim.tistory.com/"
          ><i class="bx bxl-blogger"></i
        ></a>
        <a href="https://github.com/cheolwon2889"
          ><i class="bx bxl-github"></i
        ></a>
      </div>
    </div>
    <!-- 일단 아무 이미지 넣었음 -->
    <div class="home-img">
      <img src="../assets/student-g850cc71e0_1920.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arr: ["호기심이 많은", "꾸준히 노력을 하는", "도전을 좋아하는"],
    };
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 10% 0;
}
.home-content h2 {
  margin: 10px 0;
}
.home-content h1 {
  margin: 10px 0;
  font-size: 46px;
  font-weight: 700;
}

.home-content span {
  color: #0ef;
}

.home img {
  max-width: 750px;
  opacity: 0;
  animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
  animation-delay: 0s, 1.3s;
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: transparent;
  border: 2px solid #0ef;
  border-radius: 50%;
  color: #0ef;
  margin: 30px 15px 30px 0;
  transition: 0.5s ease;
  font-size: 40px;
  margin: 0 3rem;
}

.home-content p {
  font-size: 24px;
}
.social-media a:hover {
  background: #0ef;
  color: #1f242d;
  box-shadow: 0 0 20px #0ef;
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
