import React from 'react';
import { render } from '@testing-library/react';

import FlexRow from './flex-row';

describe('FlexRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlexRow />);
    expect(baseElement).toBeTruthy();
  });
});
