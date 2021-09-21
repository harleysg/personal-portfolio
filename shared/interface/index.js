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
};

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
  space: false,
}

export const ISection = {
  IHeading,
  megaHeadding: '',
  data: {}
}

export const IData = {
  meta: IMeta,
  menu: IMenu,
  sections: {
    welcome: ISection,
    guide_typo: ISection,
    guide_card: ISection,
    guide_gallery: ISection,
    guide_form: ISection,
  }
}