const path = require(`path`)
const fetch = require('node-fetch')
const { pages } = require('./pages.js')

const endpoints = [
  '/api/pages/__root__',
  '/api/pages/agency',
  '/api/pages/capabilities',
  '/api/aerostat_collection/3-part-blocks',
  '/api/aerostat_collection/projects'
]
const getData = () => (
  Promise.all(endpoints
    .map(path => fetch(`https://purelyfunctional.airshipcms.io${path}`)))
    .then(async ([res1, res2, res3, res4, res5]) => {
      let root = await res1.json()
      let agency = await res2.json()
      let capabilities = await res3.json()
      let threePartBlock = await res4.json()
      let projects = await res5.json()
      return [root, agency, capabilities, threePartBlock, projects]
    }).then(([root, agency, capabilities, threePartBlock, projects]) => {
      return { root, agency, capabilities, threePartBlock, projects }
    })
)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const data = await getData()
  data.projects.forEach(project => {
    createPage({
      path: `/projects/${project.permalink}/`,
      component: path.resolve('src/templates/projects/project.js'),
      context: { project }
    })
  })
  pages.forEach((page) => {
    let context = {}
    page.keys.map(key => {
      context[key] = data[key]
    })
    createPage({
      path: page.path,
      component: path.resolve(`src/templates${page.component}`),
      context
    })
  })
}