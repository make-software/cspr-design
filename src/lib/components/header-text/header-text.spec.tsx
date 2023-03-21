import React from 'react';
import { render } from '@testing-library/react';

import HeaderText from './header-text';

describe('HeaderText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderText size={2} />);
    expect(baseElement).toBeTruthy();
  });
});
