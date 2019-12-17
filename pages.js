const pages = [
  {
    path: '/',
    keys: ['root', 'projects', 'threePartBlock'],
    component: '/index.js'
  },
  {
    path: '/agency',
    keys: ['agency'],
    component: '/agency/index.js'
  },
  {
    path: '/capabilities',
    keys: ['capabilities'],
    component: '/capabilities/index.js'
  },
  {
    path: '/contact',
    keys: [],
    component: '/contact/index.js'
  },
  {
    path: '/projects',
    keys: ['projects'],
    component: '/projects/index.js'
  },
  {
    path: '/process',
    keys: [],
    component: '/process/index.js'
  },
  {
    path: '/prototypes',
    keys: [],
    component: '/prototypes/index.js'
  },
  {
    path: '/the-launch',
    keys: [],
    component: '/the-launch/index.js'
  },
  {
    path: '/resume',
    keys: [],
    component: '/resume/index.js'
  }
]
module.exports = { pages }