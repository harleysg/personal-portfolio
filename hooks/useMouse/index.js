import { useCallback, useEffect, useState } from 'react';

export default function useMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getPosition = useCallback(
    function (event) {
      const type = event.type;
      switch (type) {
        case 'touchmove':
          setX(event.changedTouches[0].clientX);
          setY(event.changedTouches[0].clientY);
          break;
        case 'mousemove':
          setX(event.clientX);
          setY(event.clientY);
      }
    },
    [setX, setY]
  );

  const eventMousePosition = useCallback(
    function (action) {
      if (action === 'start') {
        document.addEventListener('mousemove', getPosition);
        document.addEventListener('touchmove', getPosition);
      }
      if (action === 'end') {
        document.removeEventListener('mousemove', getPosition);
        document.removeEventListener('touchmove', getPosition);
      }
    },
    [getPosition]
  );

  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', x + 'px');
    document.documentElement.style.setProperty('--mouse-y', y + 'px');
  }, [x, y]);

  return {
    eventMousePosition
  };
}
