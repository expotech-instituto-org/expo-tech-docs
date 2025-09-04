import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ExpoDocs",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Gerais', link: '/docs-gerais/' },
      { text: 'Front', link: '/front/' },
      { text: 'Back', link: '/back/' },
      { text: 'Arquitetura', link: '/arquitetura/' },
      { text: 'DevOps', link: '/devops/' },
      { text: 'UX', link: '/ux/' },
      { text: 'Exemplos', link: '/markdown-exemples' },
    ],

    editLink: {
      pattern:
        'https://github.com/expotech-instituto-org/expo-tech-docs/edit/main/docs/:path',
      text: '✏️ Editar esta página no GitHub'
    },

    sidebar: {
      '/docs-gerais/': [
        {
          text: 'Documentações Gerais',
          link: '/docs-gerais/',
          items: [
            { text: 'Exemplo', link: '/docs-gerais/exemplo' }
          ]
        }
      ],
      '/front/': [
        {
          text: 'Front',
          link: '/front/',
          items: [
            { text: 'Exemplo', link: '/front/exemplo' }
          ]
        }
      ],
      '/back/': [
        {
          text: 'Back',
          link: '/back/',
          items: [
            { text: 'Exemplo', link: '/back/exemplo' }
          ]
        }
      ],
      '/arquitetura/': [
        {
          text: 'Arquitetura',
          link: '/arquitetura/',
          items: [
            { text: 'Exemplo', link: '/arquitetura/exemplo' }
          ]
        }
      ],
      '/devops/': [
        {
          text: 'DevOps',
          link: '/devops/',
          items: [
            { text: 'Exemplo', link: '/devops/exemplo' }
          ]
        }
      ],
      '/ux/': [
        {
          text: 'UX',
          link: '/ux/',
          items: [
            { text: 'Exemplo', link: '/ux/exemplo' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
