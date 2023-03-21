import React from 'react';
import { render } from '@testing-library/react';

import TabMenuItem from './tab-menu-item';

describe('TabMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
