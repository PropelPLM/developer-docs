module.exports = {
  title: 'Propel Developer Docs',
  tagline: 'Build enterprise integrations and extend the Propel Platform.',
  url: 'https://developer.propelplm.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/spinner-trans.png',
  organizationName: 'PropelPLM', // Usually your GitHub org/user name.
  projectName: 'developer-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Developer Docs',
      logo: {
        alt: 'Propel Developer Docs',
        src: 'img/spinner-trans.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'none/',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/erp',
          activeBasePath: 'none/',
          label: 'Use Cases',
          position: 'left',
        },
        {
          href: 'https://github.com/propelplm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/propelplm',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PropelPLM, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/PropelPLM/developer-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
