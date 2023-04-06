import { useEffect } from 'react';
import { useLatest } from './use-latest';

export const useOutsideClick = (
  elementRef: React.RefObject<Node>,
  handler: () => void,
  attached = true
) => {
  const latestHandler = useLatest(handler);
  useEffect(() => {
    if (!attached) return;

    const handleClick = (evt: MouseEvent) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(evt.target as Node)) {
        latestHandler.current();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [elementRef, latestHandler, attached]);
};
