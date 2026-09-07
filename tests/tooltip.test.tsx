import React, { createRef, StrictMode } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from '../src/lib/theme-config';
import Tooltip from '../src/lib/components/tooltip/tooltip';
afterEach(cleanup);
const wrap = (child: React.ReactNode) => (
  <StrictMode>
    <ThemeProvider theme={themeConfig.light}>{child}</ThemeProvider>
  </StrictMode>
);
it('passes through absent content and accepts absent children', () => {
  const { rerender } = render(
    wrap(
      <Tooltip tooltipContent={null}>
        <button>Plain</button>
      </Tooltip>,
    ),
  );
  expect(screen.getByRole('button')).not.toHaveAttribute('aria-describedby');
  expect(screen.queryByRole('tooltip')).toBeNull();
  rerender(wrap(<Tooltip tooltipContent="Details" />));
  expect(screen.queryByRole('button')).toBeNull();
});
it('preserves child refs, handlers, name and existing description', () => {
  const ref = createRef<HTMLButtonElement>();
  const onClick = vi.fn();
  render(
    wrap(
      <Tooltip id="details" tooltipContent="Details">
        <button
          ref={ref}
          onClick={onClick}
          aria-label="Named trigger"
          aria-describedby="existing"
        >
          Trigger
        </button>
      </Tooltip>,
    ),
  );
  const anchor = screen.getByRole('button', { name: 'Named trigger' });
  expect(ref.current).toBe(anchor);
  expect(anchor).toHaveAttribute('aria-describedby', 'existing details');
  fireEvent.click(anchor);
  expect(onClick).toHaveBeenCalledTimes(1);
});
