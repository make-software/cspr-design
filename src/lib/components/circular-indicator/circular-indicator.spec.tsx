import React from 'react';
import { render } from '@testing-library/react';

import CircularIndicator from './circular-indicator';

describe('CircularIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircularIndicator size={'medium'} progress={30} textSize={2} />);
    expect(baseElement).toBeTruthy();
  });
});
