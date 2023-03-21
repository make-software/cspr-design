import React from 'react';
import { render } from '@testing-library/react';

import BodyText from './body-text';

describe('BodyText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BodyText size={2} />);
    expect(baseElement).toBeTruthy();
  });
});
