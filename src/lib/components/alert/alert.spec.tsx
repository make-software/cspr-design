import React from 'react';
import {render} from '@testing-library/react';

import Alert, {AlertStatus} from './alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Alert message="test" status={AlertStatus.Success} />
    );
    expect(baseElement).toBeTruthy();
  });
});
