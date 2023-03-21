import React from 'react';
import { render } from '@testing-library/react';

import WizardTile from './wizard-tile';

describe('WizardTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WizardTile />);
    expect(baseElement).toBeTruthy();
  });
});
