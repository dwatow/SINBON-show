export default function navPage(app) {

  this.mounted = function () {
    // document.querySelector('.nav-page').classList.remove('display-none')
    document.querySelector('.transition-next-page').classList.add('scale-0')
    setTimeout(() => {
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('scale-0'))
    }, 100)
  }

  this.bindingEvent = () => {
    // 點擊選項，播放動畫    
    document.querySelector('.triangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('product-category');
      }, 300)

    })
    document.querySelector('.circle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('case-study');
      }, 300)
    })

    // 進入指定 router
    document.querySelector('.rectangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('about');
      }, 300)
    })
  }

  this.render = () => `
    <div class="nav-page">
      <div class="header">
        <!-- 前後兩個元素隱藏 -->
        <div></div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <div></div>
      </div>
      <div class="main-nav">
        <div class="main-nav-item shape scale-0">
          <img class="triangle" src="./src/assets/triangle-green.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="main-nav-item shape scale-0">
          <img class="circle" src="./src/assets/circle-orange.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
        <div class="main-nav-item shape scale-0">
          <img class="rectangle" src="./src/assets/rectangle-blue.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
      </div>
    </div>`
}