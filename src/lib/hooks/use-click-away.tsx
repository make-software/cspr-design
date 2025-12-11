import { useCallback, useEffect, useRef } from 'react';

export type ClickAwayProps = {
  eventType?: 'click';
  callback: () => void;
};

export function useClickAway({ eventType = 'click', callback }: ClickAwayProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (ref && ref.current) {
        if (!ref.current.contains(event.target)) {
          callback();
        }
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return { ref };
}
