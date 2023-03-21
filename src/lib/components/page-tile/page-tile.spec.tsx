import React from 'react';
import { render } from '@testing-library/react';

import PageTile from './page-tile';

describe('PageTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageTile />);
    expect(baseElement).toBeTruthy();
  });
});
