const path = require(`path`)
const { pages } = require('./pages.js')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  pages.forEach((page) => {
    let context = {}
    createPage({
      path: page.path,
      component: path.resolve(`src/templates${page.component}`),
      context
    })
  })
}