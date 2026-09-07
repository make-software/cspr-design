import React, { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { themeConfig, Tooltip } from '../../dist/cspr-design.es.js';
function App() {
  const ref = useRef<HTMLButtonElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  return (
    <ThemeProvider theme={themeConfig.light}>
      <div
        style={{ padding: 100, overflow: 'hidden', height: 40 }}
        data-testid="container"
      >
        <Tooltip
          ref={tipRef}
          tooltipContent="Wallet details"
          caption="Caption"
          additionalBlock={<span>Additional details</span>}
          limitWidth="300px"
          padding="12px"
        >
          <button
            ref={ref}
            onFocus={() => {
              document.body.dataset.focused = 'yes';
            }}
            onClick={() => {
              document.body.dataset.clicked = ref.current?.textContent || '';
              document.body.dataset.tooltipRef =
                tipRef.current?.getAttribute('role') || '';
            }}
          >
            Wallet
          </button>
        </Tooltip>
        <button>Next</button>
        <Tooltip tooltipContent="Text details">
          <span>Text anchor</span>
        </Tooltip>
      </div>
    </ThemeProvider>
  );
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
