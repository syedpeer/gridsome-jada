# jada [![Netlify Status](https://api.netlify.com/api/v1/badges/ab389147-4a61-4967-967c-a2d3c0020f98/deploy-status)](https://app.netlify.com/sites/gridsome-jada/deploys)

A simple blog starter template for [Gridsome](https://gridsome.org/)

![Preview](https://github.com/Microflash/jada/raw/master/preview.png)

## Demo

<https://gridsome-jada.netlify.com>

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Microflash/jada)

## Features

- Clean and simple design
- Blog with Markdown content
- Inbuilt [Sass](https://sass-lang.com/) integration
- Theme Switcher for Dark and Light modes (with system preference detection)
- Search with [Fuse.js](https://fusejs.io/) and [vue-fuse](https://github.com/shayneo/vue-fuse)
- Smooth scrolling to sections with [vue-scrollto](https://github.com/rigor789/vue-scrollTo)
- Tags and Pagination for blog posts
- Syntax highlighting with [Shiki](https://github.com/octref/shiki)
- Automatic or manual post summary
- Table of Content generation for blog posts
- Accessible shortcuts for Table of Contents and Back to top
- GitHub edit URL generation for a blog post
- Custom 404 page
- RSS, Atom and JSON feeds (By default, `jada` generates only RSS feeds)
- Sitemap in XML

## Installation

### Using Gridsome CLI

```sh
npx gridsome create my-blog https://github.com/Microflash/jada.git
```

Gridsome will remove `.git` directory and install dependencies for you.

### Using Git

Clone this repository.

```sh
git clone https://github.com/Microflash/jada.git my-blog

# navigate to the directory
cd my-blog

# remove the git folder
rm -rf .git

# install dependencies
npm install
```

### Using GitHub Templates

You can directly [generate](https://github.com/Microflash/jada/generate) a new project from this repository on GitHub.

## Configuration

### Authors

Edit [authors.json](./data/authors.json) to customize authors. You can use `id` in the frontmatter to add the authors of the post.

### Site

Edit [site.json](./data/site.json) to customize the site information. 

### GitHub Edit URL

`jada` generates the GitHub edit url based on the assumption that blog posts are located under `content/blog/YYYY` directory where `YYYY` is the year of publishing. You can modify this location and edit the [url generation logic](https://github.com/Microflash/jada/blob/419dcba706576d90de3879bd98091dc35fffcade/src/templates/Post.vue#L76). Also, make sure to edit the `postEditUrl` key in [site.json](./data/site.json) so that GitHub edit links point to the correct files.

### Summary Generation

Automatic summary generation picks up everything before an `h3` header. 

> `jada` uses `### Table of Contents` to inject the table of contents, and thereby picks everything before the table of contents to generate a summary. 

You can tweak this behavior [here](https://github.com/Microflash/jada/blob/73285b674e0b9ffc075093168362dc9ea850823f/gridsome.server.js#L10). If you want more control, you can manually provide a summary with `summary` key in the frontmatter of the posts.

### Search

The search only indexes post title and summary. You can customize this behavior [here](https://github.com/Microflash/jada/blob/419dcba706576d90de3879bd98091dc35fffcade/src/components/SearchBox.vue#L61). When you execute `gridsome build`, a `search.json` gets created with generated index.

### Styles

`jada` comes with [mixins](./src/assets/scss/_mixins.scss) for responsive layout, flexbox grid generation and @font-face generation. Feel free to customize the Sass files or integrate your favorite framework.

### Gridsome

For Gridsome configurations, check [Gridsome docs](https://gridsome.org/docs/).

## License

Licensed under [MIT](https://github.com/Microflash/microflash.github.io/blob/release/LICENSE.md)

## Footnotes

- `jada` is based on [Microflash](https://github.com/Microflash/microflash.github.io), my personal site.
- Icons are from [Feather Icons](https://feathericons.com/).
- Illustrations are from [unDraw](https://undraw.co/).
- Many of the ideas and implementations were inspired from the [official Gridsome site](https://github.com/gridsome/gridsome.org) and [Gridsome Portfolio Starter](https://github.com/drehimself/gridsome-portfolio-starter).
- In case you were wondering, `jada` (`جاد`) means **earnest** in Arabic.
