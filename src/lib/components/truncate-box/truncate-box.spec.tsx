import React from 'react';
import { render } from '@testing-library/react';

import TruncateBox from './truncate-box';

describe('TruncateBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TruncateBox />);
    expect(baseElement).toBeTruthy();
  });
});
