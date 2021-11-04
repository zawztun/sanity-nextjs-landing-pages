export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618341893eb7402bb2c8532a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bi2jzcdz',
                  apiId: 'fb9d7cf2-dfa9-4227-8e7a-4c4e56eb4552'
                },
                {
                  buildHookId: '61834189bdb8d42964365308',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e2bp5tsy',
                  apiId: '6c821f52-d4bf-4beb-afe1-08e621ff454f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zawztun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e2bp5tsy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
