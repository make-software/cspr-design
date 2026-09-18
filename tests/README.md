# Tooltip migration verification

Use Node 20.19+ or Node 22.12+ (Vite 7), not Node 18.

```sh
npm ci --legacy-peer-deps=false --strict-peer-deps
npx playwright install --with-deps chromium
npm test
npm run test:browser
npm run test:consumer
```

The library's React peers remain unchanged (`^18.3.0`). Development and consumer
fixtures actually install React/ReactDOM 18.3.1; this is not peer-range widening.

- Unit tests cover null handling and child ref/event/name/description preservation.
- Chromium tests load rebuilt distribution JS and exercise keyboard/hover behavior,
  accessible descriptions, Escape/focus/Tab, non-button anchors, ref composition,
  portal rendering, content, opacity, padding and width.
- The consumer script builds and packs the library, installs its tarball outside
  the checkout with strict peer checks, verifies no symlink or Reakit package,
  then production-builds a Vite app and runs the same Chromium behavior tests.
  It prints the temporary fixture path for inspection. No publish occurs.

## Baseline limitations (not concealed by these tests)

At upstream base `08e1b5c`, `tsc --noEmit` reports 16 SDK/activity-feed diagnostics.
The candidate produces byte-identical output. Vite's declaration plugin prints
these errors but exits successfully; the build is not proof of a green typecheck.

Fresh styled-components 5 dependency resolution has a separate unbounded
Babel-plugin/React-Native peer conflict. Both build and consumer fixtures explicitly
provide `babel-plugin-styled-components@2.1.4`. This is not a library-wide fix or a
reason to enable legacy peers in consumers.

Native Node ESM import fails in both base and candidate at the styled-components
default import; native UMD require fails at browser-only `window` access. This
migration verifies the existing browser/Vite target, not new SSR support.

Generated bundles include upstream FormatJS template-literal trailing spaces;
source-only `git diff --check` is clean. Do not edit generated vendor strings.

## Release coordination

PR #42 (CLICK-908, `tooltip portal WIP`) overlaps this wrapper with a different
`react-tooltip` implementation, but retains Reakit in its manifest and lockfile.
This candidate uses Ariakit and removes Reakit; maintainers must choose/consolidate
these approaches rather than merge both wrappers independently.

Registry latest was 2.0.6 during verification; master already declares the next
patch 2.0.7. After review/consolidation and merge, maintainers should release 2.0.7
(or the next free patch if the registry advances). The existing NPM Publish workflow
runs on a published GitHub release or manual dispatch. Neither is part of testing.
Then update the application's direct and transitive lockfile resolutions to the
published package and rerun strict installation/build/browser verification.
`@make-software/csprclick-ui@1.12.1` depends on design `^2.0.6`, so 2.0.7 satisfies
that range without a separate CSPR.click release; confirm the actual app lockfile.
