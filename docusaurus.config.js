module.exports = {
  title: 'Documentation PnrFO',
  tagline: 'Documentation de la configuration de GeoNature et outils associés',
  url: 'https://PNR-Foret-Orient.github.io',
  baseUrl: '/documentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'PNR-Foret-Orient', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: 'Documentation PnrFO',
      logo: {
        alt: 'Logo du parc',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/PNR-Foret-Orient/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Syndicat mixte du parc naturel régional de la Forêt d'Orient. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/PNR-Foret-Orient/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
