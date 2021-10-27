// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler () {
  const menu = [
    { link: '/', text: 'home' },
    { link: '#', text: 'welcome' }
  ]

  const data = {
    orca: {
      multimedia: {
        images: [
          { id: 1, url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/1.jpg', alt: '', btnText: 'More about Orca', action: '/projects/orca' }
        ],
        videos: [
          { id: 1, source: 'https://harleysg.github.io/portfolio-cubioStudio/assets/videos/origen/reel.mp4' }
        ]
      }
    },
    origen: {},
    betksnate: {},
    valientes: {}
  }

  const sections = {
    intro: {
      indicator: '           ',
      content: 'Proyecto',
      enfasis: 'orca',
      megaHeadding: 'ProyectoOrca',
      space: true
    },
    preview: {
      enfasis: 'Projects',
      space: true,
      data: {
        videos: [
          {
            id: 1,
            sources: [
              {
                src: 'https://harleysg.github.io/portfolio-cubioStudio/assets/videos/orca/reel.mp4',
                type: 'video/mp4'
              }
            ],
            poster: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/projects/slider/1.jpg'
          }
        ]
      }
    }
  }

  const meta = {
    title: 'harleysg portfolio',
    description: 'Personal portfolio by harley Santos Garzón'
  }

  return {
    data,
    menu,
    meta,
    sections
  }
}
