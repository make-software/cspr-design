import React from 'react';
import { render } from '@testing-library/react';

import TabMenu from './tab-menu';

describe('TabMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabMenu />);
    expect(baseElement).toBeTruthy();
  });
});
