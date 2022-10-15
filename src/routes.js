import animationBegin from './components/animation-begin.js'
import navPage from './components/nav-page.js'
import productCategory from './components/product-category.js'
import production from './components/production.js'
import caseStudy from './components/case-study.js'
import aboutSimbon from './components/about-sinbon.js'
import page404 from './components/page404.js'

export default [{
  name: 'animation-beign',
  path: '/', // not be '/', that is not init page
  component: animationBegin
}, {
  name: 'nav-page',
  path: '/main-nav',
  component: navPage
}, {
  name: 'product-category',
  path: '/product-category',
  component: productCategory
}, {
  name: 'electric-vehicle',
  path: '/electric-vehicle',
  component: production
}, {
  name: 'robotics',
  path: '/robotics',
  component: production
}, {
  name: 'patient-monitoring',
  path: '/patient-monitoring',
  component: production
}, {
  name: 'case-study',
  path: '/case-study',
  component: caseStudy
}, {
  name: 'about',
  path: '/about',
  component: aboutSimbon
}, {
  name: '404',
  path: '*',
  component: page404
}]

