// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const menu = [
    { link: '#', text: 'welcome' },
    { link: '#typography', text: 'typography' },
    { link: '#form', text: 'forms' }
  ];

const author = {
  id:'01',
  name: 'Harley Santos Garzon',
  title: 'Frontend Developer',
  description: 'Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón.',
  mail: 'harley.santos.garzon@mail.com'
}

  const sections = {
    welcome: {
      indicator: 'Personal portofio',
      content: 'Harley',
      enfasis: 'Santos Garzón',
      megaHeadding: 'Portfolio',
      space: true
    },
    guide_typo: {
      indicator: 'Guide lines',
      enfasis: 'Typo',
      content: 'graphy',
      space: false
    },
    guide_card: {
      indicator: 'Guide lines',
      enfasis: 'Form',
      content: 'components',
      space: true,
      data: {
        cards: [author]
      }
    },
  };

  const meta = {
    title: 'harleysg portfolio',
    description: 'Personal portfolio by harley Santos Garzón'
  }

  return {
    sections,
    menu,
    meta,
  }
}
