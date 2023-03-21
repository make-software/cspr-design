import React from 'react';
import { render } from '@testing-library/react';

import TableHead from './table-head';

describe('TableHead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableHead />);
    expect(baseElement).toBeTruthy();
  });
});
