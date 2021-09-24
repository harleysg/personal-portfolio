import { useEffect } from 'react';

import isSectionAndHeaderIntercepting from '../utils/headerIntercepting';


export default function UseThemeDetector () {
  useEffect(() => {
    document.addEventListener('scroll', isSectionAndHeaderIntercepting);

    return () => {
      document.removeEventListener('scroll', isSectionAndHeaderIntercepting);
    };
  }, [])
}