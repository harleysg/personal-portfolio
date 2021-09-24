import scrollEvent from './scrollEvent';

const callback = (_this, scroll) => {
  const html = document.body.parentElement;
  const activeElm = scrollEvent.isAnyPartOfElementInViewport(_this);
  if (activeElm) {
    const theme = _this.dataset.theme;
    if (scroll + 30 >= _this.offsetTop) {
      switch (theme) {
        case undefined:
          html.dataset.theme;
          break;
        case 'dark':
          html.dataset.theme = `${theme}`;
          break;
        case 'gold':
          html.dataset.theme = `${theme}`;
          break;
        case 'gray':
          html.dataset.theme = `${theme}`;
          break;
        case 'light':
          html.dataset.theme = `${theme}`;
          break;
        default:
          html.dataset.theme
          break;
      }
    }
  }
}

const selectors = [
  '[data-theme="gold"]',
  '[data-theme="gray"]',
  '[data-theme="light"]',
  '[data-theme="dark"]',
  '.o-section'
]

export default function isSectionAndHeaderIntercepting() {
  scrollEvent.handleScrollMovement([
    {
      callback,
      selectors
    }
  ]);
}