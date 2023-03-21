import React from 'react';
import { render } from '@testing-library/react';

import FlexBox from './flex-box';

describe('FlexBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlexBox />);
    expect(baseElement).toBeTruthy();
  });
});
