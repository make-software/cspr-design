import React from 'react';
import { render } from '@testing-library/react';

import { MultiSelectInput } from './multiselect-input';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiSelectInput items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
