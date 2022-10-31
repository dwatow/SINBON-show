export default function navMain(app) {

  this.mounted = function () {
    // document.querySelector('.nav-main').classList.remove('display-none')
    document.querySelector('.transition-next-page').classList.add('scale-0')
    setTimeout(() => {
      document.querySelectorAll('.nav-main-item').forEach(item => item.classList.remove('scale-0'))
    }, 100)
  }

  this.bindingEvent = () => {
    // 點擊選項，播放動畫
    // document.querySelectorAll('.nav-main-item').forEach(item => {
    //   item.addEventListener('click', () => {
    //     console.log('click');
    //     document.querySelector('.transition-next-page').classList.remove('scale-0')
    //     if (item.querySelector('.triangle') != null) {
    //       setTimeout(() => {
    //         app.$router.push('product-category');
    //       }, 300)
    //     } else if (item.querySelector('.circle') != null) {
    //       setTimeout(() => {
    //         app.$router.push('case-study');
    //       }, 300)
    //     } else if (item.querySelector('.rectangle') != null) {
    //       setTimeout(() => {
    //         app.$router.push('about');
    //       }, 300)
    //     }
    //   })
    // })
    document.querySelector('.triangle').addEventListener('click', () => {
      document.querySelector('.transition-next-page').classList.remove('scale-0')
      setTimeout(() => {
        app.$router.push('product-category');
      }, 300)
    })
    document.querySelector('.circle, .cover-for-click').addEventListener('click', () => {
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

    <div class="cover-for-click"></div>
    <div class="nav-main">
      <div class="head">
        <!-- 前後兩個元素隱藏 -->
        <div></div>
        <img class="sinbon-logo" src="./src/assets/logo.png" alt="">
        <div></div>
      </div>
      <div class="nav-main">
        <div class="nav-main-item shape scale-0">
          <img class="triangle" src="./src/assets/triangle-green.png" alt="">
          <div class="text triangle-text-fix">Product</div>
        </div>
        <div class="nav-main-item shape scale-0">
          <img class="circle" src="./src/assets/circle-orange.png" alt="">
          <div class="text">Case<br />Study</div>
        </div>
        <div class="nav-main-item shape scale-0">
          <img class="rectangle" src="./src/assets/rectangle-blue.png" alt="">
          <div class="text">About<br />SINBON</div>
        </div>
      </div>
    </div>`
}