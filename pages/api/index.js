// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler() {
  const repositories = fetch('https://api.github.com/users/harleysg/repos').then(data => data.json())

  const menu = [
    { link: '#projects', text: 'Projects' },
    { link: '/demo', text: 'Demo' }
  ]

  const author = {
    id: 7086723,
    name: 'Harley Santos Garzón',
    title: 'Frontend Developer',
    description:
      'Productor multimedia, diseñador gráfico, desarrollador Frontend, músico empirico y bajista.',
    mail: 'harley.santos.garzon@mail.com',
    socialMedia: {}
  }

  const projects = [
    {
      id: '1',
      options: {
        max_content: true
      },
      url: 'https://api.github.com/repos/harleysg/googleapi.sheet',
      page: 'googleapi-sheet.vercel.app',
      title: 'googleapi.sheet',
      name: 'googleapi.sheet',
      description: null
    },
    {
      id: 463390642,
      options: {
        max_content: true
      },
      created_at: '2022-02-25T03:59:52Z',
      description: 'Prueba de googleapi sheet como data base usando nextJs',
      full_name: 'harleysg/googleapi.sheet',
      homepage: 'googleapi-sheet.vercel.app',
      html_url: 'https://github.com/harleysg/googleapi.sheet',
      title: 'JavaScript - NextJs - googleapi',
      languages_url:
        'https://api.github.com/repos/harleysg/googleapi.sheet/languages',
      name: 'googleapi.sheet',
      node_id: 'R_kgDOG57Hsg',
      updated_at: '2022-03-21T16:07:19Z',
      url: 'https://api.github.com/repos/harleysg/googleapi.sheet'
    },
    {
      id: 327182545,
      options: {
        max_content: true
      },
      created_at: '2021-01-06T02:55:17Z',
      description:
        'Caso de estudio de Directorio de contactos con favoritos. Basado en ReacjJs y manejo de estados',
      full_name: 'harleysg/sessions-html-1-contact-list',
      homepage: null,
      html_url: 'https://github.com/harleysg/sessions-html-1-contact-list',
      title: 'Javascript, reactJs - dark mode',
      languages_url:
        'https://api.github.com/repos/harleysg/sessions-html-1-contact-list/languages',
      name: 'sessions-html-1-contact-list',
      node_id: 'MDEwOlJlcG9zaXRvcnkzMjcxODI1NDU=',
      updated_at: '2021-01-06T03:15:59Z',
      url: 'https://api.github.com/repos/harleysg/sessions-html-1-contact-list'
    },
    {
      id: 309536436,
      options: {
        max_content: true
      },
      created_at: '2020-11-03T01:11:45Z',
      description: 'Desarrollo del curso de platzi react-avanzado',
      full_name: 'harleysg/reactjs-petgram',
      homepage: 'https://petgram-sg.vercel.app/',
      html_url: 'https://github.com/harleysg/reactjs-petgram',
      title: 'JavaScript, ReactJs',
      languages_url:
        'https://api.github.com/repos/harleysg/reactjs-petgram/languages',
      name: 'reactjs-petgram',
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDk1MzY0MzY=',
      updated_at: '2022-03-21T16:07:34Z',
      url: 'https://api.github.com/repos/harleysg/reactjs-petgram'
    },
    {
      id: 262483559,
      options: {
        max_content: true
      },
      created_at: '2020-05-09T03:48:56Z',
      description: null,
      full_name: 'harleysg/reactJs.giphy',
      homepage: 'giffy-six.vercel.app',
      html_url: 'https://github.com/harleysg/reactJs.giphy',
      title: 'JavaScript, ReacJs',
      languages_url:
        'https://api.github.com/repos/harleysg/reactJs.giphy/languages',
      name: 'reactJs.giphy',
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjI0ODM1NTk=',
      updated_at: '2022-03-21T16:35:47Z',
      url: 'https://api.github.com/repos/harleysg/reactJs.giphy'
    },
    {
      id: 255231250,
      created_at: '2020-04-13T04:31:02Z',
      description:
        'Librería - uso del API multimedia para control de audios y videos HTML5',
      full_name: 'harleysg/esmodules.syncMultimedia',
      homepage: null,
      html_url: 'https://github.com/harleysg/esmodules.syncMultimedia',
      title: 'TypeScript',
      languages_url:
        'https://api.github.com/repos/harleysg/esmodules.syncMultimedia/languages',
      name: 'esmodules.syncMultimedia',
      node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyMzEyNTA=',
      updated_at: '2022-03-21T16:07:46Z',
      url: 'https://api.github.com/repos/harleysg/esmodules.syncMultimedia'
    },
    {
      id: 54899657,
      created_at: '2016-03-28T14:51:52Z',
      description: 'Personal portfolio',
      full_name: 'harleysg/personal-portfolio',
      homepage: 'https://personal-portfolio-harleysg.vercel.app/',
      html_url: 'https://github.com/harleysg/personal-portfolio',
      title: 'NextJs',
      languages_url:
        'https://api.github.com/repos/harleysg/personal-portfolio/languages',
      name: 'personal-portfolio',
      node_id: 'MDEwOlJlcG9zaXRvcnk1NDg5OTY1Nw==',
      updated_at: '2021-11-23T03:11:52Z',
      url: 'https://api.github.com/repos/harleysg/personal-portfolio'
    }
  ]

  const sections = {
    welcome: {
      indicator: 'Frontend Developr + Graphic designer',
      enfasis: 'Harley',
      content: 'Santos Garzón',
      megaHeadding: 'Welcome',
      space: true,
      data: {
        author
      }
    },
    projects: {
      anchor: 'projects',
      design: {
        indicator: '',
        enfasis: 'Design',
        content: 'Projects',
        space: true,
        data: {
          projects
        }
      },
      web: {
        indicator: '',
        enfasis: 'Web',
        content: 'Projects',
        space: true
      }
    }
  }

  const meta = {
    title: 'harleysg portfolio',
    description: 'Personal portfolio by harley Santos Garzón'
  }

  return {
    sections,
    menu,
    meta,
    author,
    repositories
  }
}
