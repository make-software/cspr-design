import React from 'react';
import { render } from '@testing-library/react';

import Label from './label';

describe('Label', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Label size={2} />);
    expect(baseElement).toBeTruthy();
  });
});
