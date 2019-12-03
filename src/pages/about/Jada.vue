<template>
  <Layout>
    <div class="decorated-links">
      <Hero>
        <span id="about" class="emphasis">Jada</span> is a
        <br/>blog starter template
        <br/>for <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer">Gridsome</a>
      </Hero>
      <div class="container post">
        <main class="article">
          <h3>Features &mdash;</h3>
          <ul class="content">
            <li>Clean and simple design</li>
            <li>Blog with Markdown content</li>
            <li>Inbuilt <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/">Sass</a> integration</li>
            <li>Theme Switcher for Dark and Light modes (with system preference detection)</li>
            <li>Search with <a target="_blank" rel="noopener noreferrer" href="https://fusejs.io/">Fuse.js</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/shayneo/vue-fuse">vue-fuse</a></li>
            <li>Smooth scrolling to sections with <a target="_blank" rel="noopener noreferrer" href="https://github.com/rigor789/vue-scrollTo">vue-scrollto</a></li>
            <li>Tags and Pagination for blog posts</li>
            <li>Syntax highlighting with <a target="_blank" rel="noopener noreferrer" href="https://github.com/octref/shiki">Shiki</a></li>
            <li>Automatic or manual post summary</li>
            <li>Table of Content generation for blog posts</li>
            <li>Accessible shortcuts for Table of Contents and Back to top</li>
            <li>GitHub edit URL generation for a blog post</li>
            <li>Custom 404 page</li>
            <li>RSS, Atom and JSON feeds (By default, <code>jada</code> generates only RSS feeds)</li>
            <li>Sitemap in XML</li>
          </ul>
        </main>
      </div>
    </div>
    <div class="to-the-top">
      <a href="#" title="Back to top" v-scroll-to="'#about'">
        <svg class="icon icon-up" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
      </a>
    </div>
  </Layout>
</template>

<page-query>
query AuthorById {
  author (id: "jada") {
    id
    title
    bio
    avatar
    twitter
  }
}
</page-query>

<script>
import Hero from '~/components/Hero'

export default {
  metaInfo() {
    return {
      title: this.$page.author.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.author.bio
        }
      ]
    };
  },
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
main, section {
  h2 {
    margin-bottom: $gap;
    font-size: $text-md;
    font-weight: $font-semibold;
  }

  h3 {
    margin-top: $gap;
    font-weight: $font-bold;
  }

  .content {
    margin-bottom: $gap-md;
  }

  ul {
    margin-left: $gap;
  }

  a {
    &:focus, &:hover {
      text-decoration: underline;
    }
  }
}

main {
  font-size: $text-md;
}

.acknowledgments {
  margin-top: $gap;

  @include tablet-landscape {
    margin-top: $gap-lg;
  }
}

.to-the-top, .to-content {
  position: fixed;
  text-align: right;
  right: $gap;
  z-index: $rise-lg;
  @include hidden;

  @include tablet-landscape {
    @include visible;
  }
}

.to-the-top {
  bottom: $gap;
}

.to-content {
  bottom: 7vh;
}
</style>
