import React, { useState, PropsWithChildren } from 'react';
import { useClickAway } from '../../../hooks/use-click-away';

interface MenuProps {
  theme?: 'dark' | 'light';
  opened?: boolean;
  onClose?: () => void;
}

const BaseMenu = ({
  theme = 'light',
  children,
}: PropsWithChildren<MenuProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const { ref } = useClickAway({
    callback: () => {
      setIsOpen(false);
    },
  });

  return <div ref={ref}>{children}</div>;
};

export const Menu = ({ children, ...rest }) => {
  return (
    <div>
      <BaseMenu {...rest}>{children}</BaseMenu>
    </div>
  );
};
