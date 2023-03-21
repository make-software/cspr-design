import React from 'react';
import { render } from '@testing-library/react';

import HeaderTabMenuItem from './header-tab-menu-item';

describe('HeaderTabMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderTabMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
