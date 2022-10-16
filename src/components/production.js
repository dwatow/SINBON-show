export default function production(app) {
  this.backgroundUrl = './src/assets/background-triangle.png';
  const routeHash = location.hash.split('#/')[1];
  const routeToBacktroundTitle = {
    'electric-vehicle': './src/assets/background-title-E-mobility.png',
    'robotics': './src/assets/background-title-SmartFactory.png',
    'patient-monitoring': './src/assets/background-title-Medical.png',
  }
  let api_data = window.sinbon.production;
  let index = 0;

  function current_data(index) {
    return api_data[index];
  }

  this.mounted = function () {
    document.querySelector('.transition-next-page').classList.add('scale-0')

    setTimeout(() => {
      document.querySelectorAll('.initial').forEach(item => {
        item.classList.remove('initial')
      })
    }, 10)
  }

  this.destroy = function () {
  }

  this.bindingEvent = () => {
    // after render
    document.querySelector('.icon-close').addEventListener('click', () => {
      app.$router.push('/product-category')
    })
  }

  this.render = () => `
    <div class="production ${ routeHash }">
      <img class="icon-close" src="./src/assets/close-white.png" alt="">
      <div class="background-title initial">
        <img src="${routeToBacktroundTitle[routeHash]}" alt="">
      </div> 
      <div class="container">
        <div class="title">
          <h2 class="initial">${current_data(index).fields.Product}</h2>
          <h1 class="initial">${current_data(index).fields.Name}</h1>
          <div class="photo initial">
            <img src="${current_data(index).fields.image[0].url}" alt="">
          </div>
        </div>
        <div class="content">
          <div class="pagination">
            <div class="prev">
              <img src="./src/assets/slider_prev.png" alt="">
            </div>
            <span>${index + 1}/${api_data.length}</span>
            <div class="next">
              <img src="./src/assets/slider_next.png" alt="">
            </div>
          </div>
          <div class="text">
            <p>
              <b>Features</b>
              <pre>${current_data(index).fields.Features}</pre>
            </p>
            <p>
              <b>Specification</b>
              <pre>${current_data(index).fields.Specification}</pre>
            </p>
          </div>
        </div>
      </div>
    </div>`
}