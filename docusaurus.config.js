const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ENV = process.env.ENV || 'production';
const IS_DEV_ENV = ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Forge Tutorials',
    tagline: 'Getting started with Autodesk Forge',
    url: IS_DEV_ENV ? 'https://autodesk-forge.github.io' : 'https://forge-tutorials.autodesk.io',
    baseUrl: IS_DEV_ENV ? '/forge-tutorials-website/' : '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'autodesk-forge',
    projectName: 'forge-tutorials-website',
    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                docsRouteBasePath: '/',
                indexDocs: true,
                indexBlog: false,
                indexPages: false,
                hashed: true
            }
        ]
    ],
    themeConfig: {
        navbar: {
            logo: {
                alt: 'Autodesk Forge',
                src: 'https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20220404193108/images/autodesk-logo-primary-rgb-black.svg' // 'img/logo.png'
            },
            items: [
                {
                    href: 'https://forge.autodesk.com/platform-vision',
                    label: 'Platform Vision',
                    position: 'left'
                },
                // {
                //     href: 'https://forge.autodesk.com/developer/documentation',
                //     label: 'Solutions',
                //     position: 'left',
                //     type: 'dropdown',
                //     items: []
                // },
                {
                    href: 'https://forge.autodesk.com/developer/getting-started',
                    label: 'Getting Started',
                    position: 'left'
                },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
                    label: 'Documentation',
                    position: 'left'
                },
                // {
                //     href: 'https://forge.autodesk.com/developer/documentation',
                //     label: 'Commnunity',
                //     position: 'left',
                //     type: 'dropdown',
                //     items: []
                // },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
                    label: 'Support',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'API Status',
                            href: 'https://health.autodesk.com/',
                        },
                        {
                            label: 'Get Help',
                            href: 'https://forge.autodesk.com/en/support/get-help',
                        },
                        {
                            label: 'FAQ',
                            href: 'https://forge.autodesk.com/FAQ',
                        }
                        // ... more items
                    ]

                },
                {
                    href: 'https://forge.autodesk.com/pricing',
                    label: 'Pricing',
                    position: 'left'
                }
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                // },
                // {
                //     href: 'https://github.com/petrbroz/forge-samples-docs',
                //     label: 'GitHub',
                //     position: 'right'
                // }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorials',
                            to: '/'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/autodesk-forge'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/autodeskforge'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Developer Portal',
                            href: 'https://forge.autodesk.com'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Autodesk-Forge'
                        },
                        {
                            label: 'Showroom',
                            href: 'https://forge-showroom.autodesk.io'
                        },
                        {
                            label: 'Learn Forge v1',
                            href: 'https://learnforge.autodesk.io'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Autodesk, Inc. Built with Docusaurus.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['csharp']
        },
        hideableSidebar: true
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/petrbroz/forge-samples-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
                gtag: {
                    trackingID: 'G-5DQ48W5MB1',
                    anonymizeIP: true
                },
                blog: false
            }
        ]
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    }
};
