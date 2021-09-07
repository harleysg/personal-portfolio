import { useRef, useEffect } from 'react';
import useNearScreen from 'hooks/useNearScreen';

import css from './index.module.scss';

function _getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

export default function MegaHeadding({ text }) {
  const HeaddingRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    extRef: HeaddingRef,
    once: false,
    distance: `${100}px`
  });

  useEffect(() => {
    function handleHeaddingMovement() {
      const scrollSize = _getScrollTop();
      const mega_headding = HeaddingRef.current;

      if (isNearScreen) {
        setTimeout(() => {
          mega_headding
            ? (mega_headding.style.left = `-${scrollSize / 3}px`)
            : null;
        }, 90);
      }
    }

    document.addEventListener('scroll', handleHeaddingMovement);

    return () => {
      document.removeEventListener('scroll', handleHeaddingMovement);
    };
  }, [isNearScreen]);
  return (
    <div className={`${css['c-mega_headding-wrapper']}`}>
      <div className={`${css['c-mega_headding']}`} ref={HeaddingRef}>{text}</div>
    </div>
  );
}
