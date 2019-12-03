const path = require('path')
const fs = require('fs')
const siteData = require('./data/site.json')
const authorDataSource = './data/authors.json'
const authorData = require(authorDataSource)
const { GraphQLString } = require('gridsome/graphql')
const marked = require('marked')
const plainTextRenderer = require('./marked.config').plainTextRenderer

const summarize = (content) => {
  const idxOfFirstHeader = content.indexOf('###')
  const firstParagraph = content.substr(0, idxOfFirstHeader)
  return marked(firstParagraph, { renderer: plainTextRenderer, sanitize: false }).replace('&#39;', '\'')
}

module.exports = function (api, options) {
  api.loadSource(({ addSchemaResolvers, addCollection, addMetadata }) => {
    const authors = addCollection('Author')
    authorData.forEach(({ id, name: title, ...fields }) => {
      authors.addNode({
        id,
        title,
        internal: {
          origin: authorDataSource
        },
        ...fields
      })
    })

    addMetadata('postEditUrl', siteData.postEditUrl)

    addSchemaResolvers({
      Post: {
        summary: {
          type: GraphQLString,
          resolve(post) {
            return post.summary ? post.summary : summarize(post.content)
          }
        }
      }
    })
  })

  api.beforeBuild(({ store }) => {

    const { collection } = store.getCollection('Post')

    const posts = collection.data.map(post => {
      return {
        title: post.title,
        path: post.path,
        summary: post.summary ? post.summary : summarize(post.content)
      }
    })

    const output = {
      dir: './static',
      name: 'search.json',
      ...options.output
    }

    const outputPath = path.resolve(process.cwd(), output.dir)
    const outputPathExists = fs.existsSync(outputPath)
    const fileName = output.name.endsWith('.json') ? output.name : `${output.name}.json`

    if (!outputPathExists) {
      fs.mkdirSync(outputPath)
    }

    fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(posts))
  })
}
