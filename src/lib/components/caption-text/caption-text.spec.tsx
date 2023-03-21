import React from 'react';
import { render } from '@testing-library/react';

import CaptionText from './caption-text';

describe('CaptionText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CaptionText size={2} />);
    expect(baseElement).toBeTruthy();
  });
});
