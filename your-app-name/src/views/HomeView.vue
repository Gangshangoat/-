<template>
  <div>
    <!-- 主页的HTML内容 -->
    <header>
      <a href="https://www.kmtth.org.tw/web/KMTTHInterWeb/InterWeb/Home" class="logo">血流感測器</a>
      <ul class="navlist">
        <li><a href="#">主頁</a></li>
        <li><a href="#">關於</a></li>
        <li><a href="#">大廳</a></li>
        <li><a href="#">相關連結</a></li>
      </ul>
      <div class="bx bx-menu" id="menu-icon"></div>
    </header>
    <section class="hero">
      <div class="hero-text">
        <h1>大同醫院</h1>
        <h4>血流線上感測器</h4>
        <p>by Yang</p>
        <!-- 使用 router-link 替换注册按钮 -->
        <router-link to="/register">註冊</router-link>
        <!-- 使用 router-link 替换登录按钮 -->
        <router-link to="/login" class="ctaa"><i class="ri-play-fill"></i>登入</router-link>
      </div>
      <div class="hero-img">
        <img src="heartbeat.png">
      </div>
    </section>
    <div class="icons">
      <a href="https://www.isu.edu.tw/newsite/homepage.php?dept_mno=818&dept_id=1&_pages=2"><i class="ri-school-line"></i></a>
      <a href="https://www.isu.edu.tw/newsite/deptfa.php?dept_mno=818&dept_id=22&aid=19053"><i class="ri-building-line"></i></a>
      <a href="https://media.tenor.com/x_IgoSdRecYAAAAC/walking-walking-duck.gif"><i class="ri-vip-crown-2-line"></i></a>
    </div>
    <div class="scroll-down">
      <a href="#"><i class="ri-skip-down-fill"></i></a>
    </div>
  </div>
</template>


<script>
export default {
name: 'HomeView',
mounted() {
  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist');

  menu.onclick = () => {
      console.log('菜单图标被点击了');
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('open');
  };

  const sr = new ScrollReveal  ({
      distance:'65px',
      duration:2600,
      delay:450,
      reset:true
  });

  sr.reveal('.hero-text',{delay:200, origin:'top'});
  sr.reveal('.hero-img',{delay:450, origin:'top'});
  sr.reveal('.icons',{delay:500, origin:'left'});
  sr.reveal('.scroll-down',{delay:450, origin:'right'});
}
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  list-style: none;
  text-decoration: none;
}
header{
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between ;
  padding: 33px 9%;
  background: transparent;
}
.logo{
  font-size: 30px;
  font-weight: 700;
  color: white;
}
.navlist{
  display: flex;
}
.navlist a{
  color: white;
  margin-left:60px;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all .55s ease;
}
.navlist a:hover{
  border-bottom: 1px solid white;
}
#menu-icon{
  color: white;
  font-size: 30px;
  z-index: 10001;
  cursor: pointer;
  display: none;
}
.hero{
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(245.59deg,#1c6e83 0%, #206288 28.53%, #1e2672 75.52%);
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  gap: 2rem;
}
section{
  padding: 0 19%;
}

.hero-text h1{
  font-family: 'Permanent Marker',cursive;
  font-size: 90px;
  line-height: 1;
  color:white;
  margin: 0 0 45px;
}
.hero-text h4{
  font-size: 18px;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
}
.hero-text p{
  color: white;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 40px;
}
.hero-img img{
 width: 700px;
 height: auto;
}
.hero-text a{
  display: inline-block;
  color:white;
  background: #1b46d3;
  border: 1px solid transparent;
  padding: 12px 30px;
  line-height: 1.4;
  font-size: 14px;
  font-weight: 500;
  border-radius: 30px;
  text-transform: uppercase;
  transition: all .55s ease;
}
.hero-text a:hover{
  background: transparent;
  border: 1px solid white;
  transform: translateX(8px);
}
.hero-text a.ctaa{
  background: transparent;
  border: 1px solid white;
  margin-left: 20px;
}
.hero-text a.ctaa i{
  vertical-align: middle;
  margin-right: 5px;
}
.icons{
  position: absolute;
  top:50%;
  padding: 0 9%;
  transform: translateY(-50%);
}
.icons i{
  display: block;
  margin: 26px 0;
  font-size: 24px;
  color: white;
  transition: all .50s ease;
}
.icons i:hover{
  color: #10c4ca;
  transform: translateY(-5px);
}
.scroll-down{
  position: absolute;
  bottom: 6%;
  right: 9%;
}
.scroll-down i{
  display: block;
  padding: 12px;
  font-size: 25px;
  color: white;
  background: #0860a8;
  border-radius: 30px;
  transition: all .50s ease;
}
.scroll-down i:hover{
  transform: translateY(-5px);
}

@media(max-width:1535px){
  header{
      padding:15px 3%;
      transition: .2s;
  }
  .icons{
      padding: 0 3%;
      transition: .2s;
  }
  .scroll-down{
      right: 3%;
      transition: .2s;
  }
}

@media(max-width:1460px){
  section{
      padding:0 12%;
      transition: .2s;
  }
}

@media(max-width:1340px){
  .hero-img{
      width:100%;
      height: auto;
  }
  .hero-text h1{
      font-size: 75px;
      margin: 0 0 30px;
  }
  .hero-text h5{
      margin-bottom: 25px;
  }
}

@media(max-width:1195px){
  section{
      padding:0 3%;
      transition: .2s;
  }
  .hero-text{
      padding-top: 115px;
  }
  .hero-img{
      text-align: center;
  }
  .hero-img img{
      width: 560px;
      height: auto;
  }
  .hero{
      height: 100%;
      gap: 1rem;
      grid-template-columns: 1fr;
  }
  .icons{
      display: none;
  }
      .scroll-down{
          display: none;
      }
}

@media(max-width:990px){
  #menu-icon{
      display: block;
  }
  .navlist{
      position: absolute;
      top: 100%;
      right: -100%;
      width: 300px;
      height: 40vh;
      background: #0860a8;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 20px;
      transition: all .55s ease;
  }
  .navlist a{
      display: block;
      margin-left: 0;
      margin: 20px 0;
  }
  .navlist .open{
      right:0 ;
  }
}

@media(max-width:680px){
  .hero-img img{
      width: 100%;
      height: auto;
  }
}
</style>