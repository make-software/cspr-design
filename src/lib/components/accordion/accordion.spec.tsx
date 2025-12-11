import React from 'react';
import { render } from '@testing-library/react';

import Accordion from './accordion';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Accordion
        renderContent={() => <div>content</div>}
        children={() => <div>child</div>}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
