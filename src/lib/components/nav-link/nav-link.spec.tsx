import React from 'react';
import { render } from '@testing-library/react';

import NavLink from './nav-link';

describe('NavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLink to="" />);
    expect(baseElement).toBeTruthy();
  });
});
