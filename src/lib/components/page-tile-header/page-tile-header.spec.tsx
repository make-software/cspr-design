import React from 'react';
import { render } from '@testing-library/react';

import PageTileHeader from './page-tile-header';

describe('PageTileHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageTileHeader />);
    expect(baseElement).toBeTruthy();
  });
});
