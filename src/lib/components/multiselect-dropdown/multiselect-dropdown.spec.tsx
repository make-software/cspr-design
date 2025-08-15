import React from 'react';
import { render } from '@testing-library/react';

import { MultiselectDropdown } from './multiselect-dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiselectDropdown items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
