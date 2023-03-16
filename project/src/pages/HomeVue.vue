<template>
  <section class="home">
    <div class="home-content">
        <h2>안녕하세요! <span>Front-end</span> 개발자</h2>
        <h1>김철원 입니다.</h1>
        <p>저는 _____ 개발자 입니다.</p>
        <!-- jq 타이핑 애니메이션 효과 넣기 -->
        <p>1. 호기심이 많은</p>
        <p>2. 꾸준한 노력을 하는</p>
        <p>3. 도전을 좋아하는</p>
        <div class="social-media">
            <router-link to=""><i class='bx bx-link' ></i></router-link>
            <router-link to=""><i class='bx bxl-github'></i></router-link>
            <router-link to=""><i class='bx bx-envelope' ></i></router-link>
        </div>
    </div>
    <!-- 일단 아무 이미지 넣었음 -->
    <div class="home-img">
        <img src="../assets/student-g850cc71e0_1920.jpg" alt="">
    </div>
  </section>
</template>

<script>

export default {

}
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

.home-content h1 {
    font-size: 32px;
    font-weight: 700;
}

.home-content span {
    color : #0ef;
}

.home img {
    max-width: 650px;
    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    animation-delay: 0s,2s;
}

.social-media a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border : 2px solid #0ef;
    border-radius: 50%;
    color : #0ef;
    margin: 30px 15px 30px 0;
    transition: .5s ease;
}

.social-media a:hover {
    background: #0ef;
    color : #1f242d;
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