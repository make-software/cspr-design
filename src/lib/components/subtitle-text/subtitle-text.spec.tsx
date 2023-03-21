import React from 'react';
import { render } from '@testing-library/react';

import SubtitleText from './subtitle-text';

describe('SubtitleText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubtitleText size={2} />);
    expect(baseElement).toBeTruthy();
  });
});
