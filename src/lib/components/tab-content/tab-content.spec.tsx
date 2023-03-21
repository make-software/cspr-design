import React from 'react';
import { render } from '@testing-library/react';

import TabContent from './tab-content';

describe('TabContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabContent />);
    expect(baseElement).toBeTruthy();
  });
});
