import React from 'react';
import { render } from '@testing-library/react';

import TableBody from './table-body';

describe('TableBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableBody />);
    expect(baseElement).toBeTruthy();
  });
});
