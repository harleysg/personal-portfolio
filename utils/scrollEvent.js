function _getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

let scrollSize = 0;

function isAnyPartOfElementInViewport(el) {
  if (el) {
    const rect = el && el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

    return vertInView && horInView;
  }
}

const handleScrollMovement = (arrStringsDOMSelectors) => {
  scrollSize = _getScrollTop();
  arrStringsDOMSelectors.map((itemToManage) => {
    itemToManage.selectors && itemToManage.selectors.forEach(element => {
      element && document.querySelectorAll(element).forEach(el => itemToManage.callback(el, scrollSize));
    })
  });
};

const shared = {
  handleScrollMovement,
  isAnyPartOfElementInViewport
}

export default shared