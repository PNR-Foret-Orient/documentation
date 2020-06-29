module.exports = {
  title: 'Documentation PnrFO',
  tagline: 'Documentation de la configuration de GeoNature et outils associés',
  url: 'https://PNR-Foret-Orient.github.io',
  baseUrl: '/documentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'PNR-Foret-Orient', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentation PnrFO',
      logo: {
        alt: 'Logo du parc',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/PNR-Foret-Orient/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Syndicat mixte du parc naturel régional de la Forêt d'Orient, ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'configuration',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/PNR-Foret-Orient/documentation/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
