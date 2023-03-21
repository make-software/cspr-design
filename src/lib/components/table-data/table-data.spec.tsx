import React from 'react';
import { render } from '@testing-library/react';

import TableData from './table-data';

describe('TableData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableData />);
    expect(baseElement).toBeTruthy();
  });
});
