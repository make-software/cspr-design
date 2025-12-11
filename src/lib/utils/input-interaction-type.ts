import { useEffect, useRef } from 'react';

export enum InputInteractionType {
  'mouse' = 'mouse',
  'keyboard' = 'keyboard',
}

export const useGetInputInteractionType = () => {
  const inputInteractionTypeRef = useRef<InputInteractionType>(
    InputInteractionType.mouse,
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['Tab', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        inputInteractionTypeRef.current = InputInteractionType.keyboard;
      }
    };

    const handleMouseDown = () => {
      inputInteractionTypeRef.current = InputInteractionType.mouse;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return inputInteractionTypeRef;
};
