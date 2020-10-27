const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projetoTemplate = path.resolve('./src/templates/projeto.js')
  const res = await graphql(`
    query {
      allContentfulProjetos (
        sort: { order: ASC, fields: createdAt }
      ){
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const projetos = res.data.allContentfulProjetos.edges

  projetos.forEach(({ node }, index) => {
    const indexUltimoProjeto = projetos.length - 1;
    const projetoAnterior = index === 0 ? projetos[indexUltimoProjeto].node : projetos[index - 1].node
    const proximoProjeto = index === indexUltimoProjeto ? projetos[0].node : projetos[index + 1].node;

    createPage({
      component: projetoTemplate,
      path: `/portfolio/${node.slug}`,
      context: {
        slug: node.slug,
        prev: projetoAnterior,
        next: proximoProjeto
      }
    })
  })
}
