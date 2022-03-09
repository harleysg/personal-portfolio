// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler () {
  const menu = [
    { link: '/', text: 'Home' },
    { link: '#typography', text: 'typography' },
    { link: '#form', text: 'forms' },
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
      indicator: 'indicator',
      content: 'content',
      enfasis: 'emphasis',
      megaHeadding: 'megaHeading',
      space: true
    },
    guide_typo: {
      indicator: 'Guide lines',
      enfasis: 'Typo',
      content: 'graphy',
      space: false
    },
    guide_form: {
      indicator: 'Guide lines',
      enfasis: 'Form',
      content: 'components',
      space: true,
      data: {
        cards: [author]
      }
    },
    guide_gallery: {
      enfasis: 'Projects',
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
