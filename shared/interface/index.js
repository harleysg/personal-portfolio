import types from 'prop-types'

export const ICard = {
  name: '',
  title: '',
  description: '',
  mail: '',
  image: {
    url: '',
    width: 0,
    height: 0
  }
}

const IAuthor = {
  id: '01',
  name: 'Harley Santos Garzon',
  title: 'Frontend Developer',
  description: 'Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón.',
  mail: 'harley.santos.garzon@mail.com'
}

export const IMeta = {
  title: '',
  description: ''
}

export const IMenu = types.arrayOf(types.shape({
  link: types.string.isRequired,
  text: types.string,
  id: types.string
}))


export const IHeading = {
  indicator: '',
  content: '',
  enfasis: '',
  space: false
}

export const ISection = {
  IHeading,
  anchor: types.string,
  megaHeadding: '',
  data: {
    images: [],
    videos: []
  }
}

export const IData = {
  meta: IMeta,
  menu: IMenu,
  data: {},
  sections: { }
}

export const IDemoPage = {
  ...IData,
  sections: {
    welcome: ISection,
    guide_typo: ISection,
    guide_gallery: ISection,
    guide_form: ISection
  }
}

export const IHomePage = {
  ...IData,
  sections: {
    welcome: {
      ...ISection,
      data: {
        author: IAuthor
      }
    },
    projects: ISection
  }
}

export const IProjectPage = {
  ...IData,
  sections: {
    intro: {
      ...ISection,
      data: {
        title: IHeading,
        description: ''
      }
    },
    preview: ISection,
    branding: {
      ...ISection,
      data: {
        background: {
          image: ISection.data.images
        }
      }
    }
  }
}

export const IMediaQueryList = { media: '', label: '', match: false }

export const IOGImage = {
  url: '',
  width: '',
  height: '',
  type: 'image/png'
}

export const IOGData = {
  title: '',
  type: '',
  url: '',
  description: '',
  image: IOGImage
}

export const ISlider = {
  mediaQuery: IMediaQueryList,
  slides: [],
  className: '',
  Children: <></>
}
