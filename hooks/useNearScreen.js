import { useRef, useState, useEffect } from 'react';

export default function useNearScreen({
  distance = '100px',
  extRef = null,
  once = true,
  rootElm = null
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const $elRef = useRef();
  const [element, setExtRef ] = useState(null)
  const [top, setTop] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(function () {
    setExtRef(extRef ? extRef.current : $elRef.current);
    const root = rootElm ? rootElm.current : null;
    let observer;

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
        root
      });
      element && observer.observe(element);
    });

    return () => observer && observer.disconnect();

    function onChange(entries, observer) {
      const el = entries[0];
      const {
        isIntersecting: onViewport,
        intersectionRect: rect
      } = el;

      setTop(rect.top)
      setheight(rect.height);

      if (onViewport) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    }
  }, [element, distance, extRef, once, rootElm, top, height]);

  return { isNearScreen, fromRef: element, top, height };
}
