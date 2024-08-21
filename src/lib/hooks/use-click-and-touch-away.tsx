import { useRef, useEffect } from 'react';

interface ClickAndTouchAwayProps {
  callback: (event: any) => void;
}

export function useClickAndTouchAway({ callback }: ClickAndTouchAwayProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);

  return { ref };
}
