// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyCompanySA',
  tagline: 'Always working to change the world',
  url: 'https://blog.jmyounghoyos.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Youngermaster', // Usually your GitHub org/user name.
  projectName: 'jmyounghoyos-blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'author',
          content: 'MyCompanySA'
        },
        {
          name: 'description',
          content: 'This is the site of MyCompanySA, where you can find more of his work, such as CTFs, pentesting, IoT development and Competitive Programming.'
        },
        {
          name: 'keywords',
          content: 'MyCompanySA, Hacking, CTF, Hack The Box, Competitive Programming, Juan Manuel Young'
        },
        {
          property: 'og:image',
          content: 'https://blog.jmyounghoyos.com/img/thumbnail.png',
          itemprop: 'image',
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '720'
        }
      ],
      navbar: {
        title: 'MyCompanySA',
        logo: {
          alt: 'MyCompanySA Logo',
          src: 'img/avatar.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Youngermaster',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Hack The Box',
                to: 'docs/category/hack-the-box',
              },
              {
                label: 'Vulnhub',
                to: 'docs/category/vulnhub',
              },
              {
                label: 'Try Hack Me - coming soon...',
                to: 'docs/category/try-hack-me',
              },
              {
                label: 'Competitive Programming - coming soon...',
                to: 'docs/category/programming',
              },
            ],
          },
          {
            title: 'Tech',
            items: [
              {
                label: 'Hack The Box',
                href: 'https://app.hackthebox.com/profile/643960',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Youngermaster',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/Youngermaster',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/9752901/youngermaster',
              },

              {
                label: 'WeChall',
                href: 'https://www.wechall.net/profile/Youngermaster',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn'
                , href: 'https://www.linkedin.com/in/juan-manuel-young-hoyos/'
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/jmyounghoyos',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/jmyounghoyos',
              },
              {
                label: 'Discord',
                href: 'https://discords.com/bio/p/youngermaster',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juan Manuel Young Hoyo's blog built using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
