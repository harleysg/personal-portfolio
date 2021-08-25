// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const menu = [
    { link: '#about', text: 'About' },
    { link: '#works', text: 'works' },
    { link: '#contact', text: 'contacto' }
  ];

  const sections = {
    one: {
      indicator: 'Somos, un estudio de diseño Colombiano.',
      enfasis: 'Creamos',
      content: 'Productos digitales y marcas del futuro'
    },
    two: {
      indicator: 'indicador',
      enfasis: 'enfasis',
      content: 'contenido'
    },
    three: {
      indicator: 'indicador',
      enfasis: 'enfasis',
    },
  };

  const meta = {
    title: '',
    description: ''
  }

  res.status(200).json({
    sections,
    menu,
    meta,
  });
}
