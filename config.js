const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cardano.org',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: '/images/acme.svg',
    logoLink: '/',
    title:
      "<h1>DOCS</h1>",
    githubUrl: 'https://github.com/input-output-hk/docs-starter-gatsby-mdx-github',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/cardano" target="_blank" rel="noopener noreferrer">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/UjUP8nz" target="_blank" rel="noopener noreferrer">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: 'Foo', link: '/' }],
    search: {
      enabled: true,
      indexName: 'test_cardano-docs',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/01-introduction/', // add trailing slash if enabled above
      // '/02-getting-started/'
    ],
    collapsedNav: [ // add headings here if to be collapsed by default
      // '/02-getting-started/', // add trailing slash if enabled above
      '/getting-started/installing',
    ],
    links: [{ text: 'Helpful link', link: 'https://www.wikipedia.org/' }],
    frontLine: true, // This toggles collapse arrows
    ignoreIndex: true,
    title:
      "<a href='https://www.bbc.co.uk/news' target='_blank' rel='noopener noreferrer'>BBC </a><div class='accentCircle'></div><a href='https://edition.cnn.com/' target='_blank' rel='noopener noreferrer'>CNN</a>",
  },
  siteMetadata: {
    title: 'Documentation Starter',
    description: 'Documentation for X ',
    ogImage: null,
    docsLocation: 'https://github.com/input-output-hk/docs-starter-gatsby-mdx-github/tree/master/content',
    favicon: 'pwa-512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Documention',
      short_name: 'Docs',
      start_url: '/',
      background_color: '#1d1e21',
      theme_color: '#3A86FF',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};
module.exports = config;
