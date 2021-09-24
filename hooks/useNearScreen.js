import { useRef, useState, useEffect } from 'react';

export default function useNearScreen({
  distance = '100px',
  threshold = 0,
  extRef = null,
  once = false,
  rootElm = null
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const $elRef = useRef();
  const [element, setExtRef ] = useState(null)
  const [direction, setDirection] = useState(null);

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
        root,
        threshold
      });
      element && observer.observe(element);
    });

    return () => observer && observer.disconnect();
    
    function onChange(entries, observer) {
      const el = entries[0];
      const {
        isIntersecting: onViewport,
        intersectionRect: rect,
        intersectionRatio: ratio
      } = el;

      const top = rect.top
      const height = rect.height

      if (onViewport) {
        setShow(true);
        top >= height && setDirection('fadeInDown');
        top <= height && setDirection('fadeInUp');
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    }
  }, [element, distance, extRef, once, rootElm, threshold, direction]);

  return { isNearScreen, fromRef: element, direction };
}
