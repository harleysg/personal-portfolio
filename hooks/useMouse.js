import { useEffect } from 'react';

function setPosition(position) {
  document.documentElement.style.setProperty('--mouse-x', `${position.x}px`);
  document.documentElement.style.setProperty('--mouse-y', `${position.y}px`);
}

function showMouse() {
  document.documentElement.style.setProperty('--mouse-visible', 'block');
}

function handleMouseListener(event) {
  getPosition(event, setPosition);
}

function eventMousePosition(action) {
  if (action === 'start') {
    document.addEventListener('mousemove', handleMouseListener);
    document.addEventListener('touchmove', handleMouseListener);

    return true;
  }
  if (action === 'end') {
    document.removeEventListener('mousemove', handleMouseListener);
    document.removeEventListener('touchmove', handleMouseListener);

    return false;
  }
}

function getPosition(event, cb) {
  const type = event.type;
  switch (type) {
    case 'touchmove':
      cb({
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      });
      break;
    case 'mousemove':
      cb({ x: event.clientX, y: event.clientY });
  }
}

export default function useMouse() {
  useEffect(() => {
    eventMousePosition('start') && showMouse();

    return () => {
      eventMousePosition('end');
    };
  }, []);
}
