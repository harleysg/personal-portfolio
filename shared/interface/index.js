
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

export const IMeta = {
  title: '',
  descriptions: ''
}

export const IMenu = {
  link: '',
  text: ''
}

export const IHeading = {
  indicator: '',
  content: '',
  enfasis: '',
  space: false
}

export const ISection = {
  IHeading,
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
    welcome: ISection,
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

export const ISlider = {
  mediaQuery: IMediaQueryList,
  slides: [],
  className: '',
  Children: <></>
}
