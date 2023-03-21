import React from 'react';
import { render } from '@testing-library/react';

import A from './a';

describe('A', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<A />);
    expect(baseElement).toBeTruthy();
  });
});
