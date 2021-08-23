// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const menu = [
    { link: '#about', text: 'About' },
    { link: '#works', text: 'works' },
    { link: '#contact', text: 'contacto' }
  ];

  res.status(200).json({
    menu
  });
}
