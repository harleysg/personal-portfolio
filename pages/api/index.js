// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler () {
  const menu = [
    { link: '#', text: 'welcome' },
    { link: 'demo', text: 'Demo' }
  ]

  const author = {
    id: '01',
    name: 'Harley Santos Garzon',
    title: 'Frontend Developer',
    description: 'Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón.',
    mail: 'harley.santos.garzon@mail.com'
  }

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
      indicator: 'Projects',
      enfasis: 'Graphic',
      content: 'design',
      space: true,
      data: {
        images: [
          { id: 1, url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/1.jpg', alt: '', btnText: 'More about Orca', action: '/projects/orca' },
          { id: 2, url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/2.jpg', alt: '', btnText: 'More about Origen', action: '/projects/origen' },
          { id: 3, url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/3.jpg', alt: '', btnText: 'More about Valientes', action: '/projects/valientes' },
          { id: 3, url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/4.jpg', alt: '', btnText: 'More about Betsknate', action: '/projects/betsknate' }
        ]
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
    meta
  }
}
