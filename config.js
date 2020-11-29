const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://mantis-docs-staging.netlify.app/',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: '/images/mantis-docs-logo.svg',
    logoLink: '/first-steps',
    title: "",
    githubUrl: 'https://github.com/input-output-hk/mantis-docs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/cardano" target="_blank" rel="noopener noreferrer">
		      <div class="btn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt='Twitter'/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/UjUP8nz" target="_blank" rel="noopener noreferrer">
		      <div class="btn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt='Discord'/>
		      </div>
		    </a>
      </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: 'test_mantis-docs',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/00-first-steps/', // add trailing slash if enabled above
      // '/02-getting-started/'
    ],
    collapsedNav: [ // add headings here if to be collapsed by default
      // '/02-getting-started/', // add trailing slash if enabled above
      '/install',
      '/learn',
      '/how-tos',
      '/resources',
    ],
    links: [{  }],
    frontLine: true, // This toggles collapse arrows
    ignoreIndex: true,
    title:
      "<span class='doc-title'>Documentation</span>",
  },
  siteMetadata: {
    title: 'Mantis Documentation',
    description: 'Mantis Documentation ',
    ogImage: null,
    docsLocation: 'https://github.com/input-output-hk/mantis-docs/tree/master/content',
    favicon: 'pwa-512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Mantis Documention',
      short_name: 'Docs',
      start_url: '/',
      background_color: '#000000',
      theme_color: '#33ff99',
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
