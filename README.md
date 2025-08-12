# CSPR.design

> **Build faster with CSPR.design**

A production-ready React UI component library for Casper blockchain applications. Part of the **CSPR Products Suite**, used by [cspr.live](https://cspr.live/), CSPR.market, and other major ecosystem projects.

[![Install](https://img.shields.io/badge/npm-github%3Amake--software%2Fcspr--design-blue)](https://github.com/make-software/cspr-design)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![Production](https://img.shields.io/badge/Production-Tested-green)](https://cspr.live)

---

## Get started in 5 minutes

Install from NPM to access ready-to-use components that bring the beloved Casper community UI to your dApp. Save time on design and implementation with clean, consistent look tailored for Web3.

✅ **Battle-tested** components from production apps  
✅ **Blockchain-focused** with CSPR-specific utilities  
✅ **Consistent design** across the Casper ecosystem  
✅ **TypeScript-first** with great developer experience  
✅ **Zero configuration** - works out of the box

## Installation

```bash
npm install github:make-software/cspr-design
```

## Quick Start

```jsx
import {
  Cspr,
  BodyText,
  FlexColumn,
  AccountInfo,
  PrecisionCase
} from '@make-software/cspr-design';

const MyApp = () => (
  <FlexColumn itemsSpacing={20}>
    <BodyText size={2}>Account Balance:</BodyText>
    <Cspr
      motes="50000000000000"
      precisionCase={PrecisionCase.full}
    />
    <AccountInfo 
      accountHash="01a2b3c4d5e6f7..."
      balance="1500000000"
    />
  </FlexColumn>
);
```

## Perfect Match with CSPR Ecosystem

**🌐 [CSPR.cloud](https://docs.cspr.cloud/)** - Get blockchain data  
**🔐 [CSPR.click](https://docs.cspr.click/)** - Handle wallet connections  
**🎨 CSPR.design** - Build beautiful UIs

```jsx
// Data from CSPR.cloud + UI from CSPR.design = 🚀
const DeployInfo = ({ deploy }) => (
  <FlexColumn itemsSpacing={16}>
    <BodyText>Deploy Cost:</BodyText>
    <Cspr motes={deploy.payment_amount} />
  </FlexColumn>
);
```

## Check examples in the storybook

Explore live previews of every component, complete with usage guidelines and props. See how each UI element behaves in real-world scenarios. No guesswork, just plug and play.

```bash
# View components in Storybook
npm run build-storybook && npm run storybook

# Build library
npm run build:dist
```

### Troubleshooting

**Vite + styled-components issue?** Add to your `vite.config.js`:

```js
resolve: {
  alias: {
    'styled-components': resolve(__dirname, 'node_modules', 'styled-components'),
  },
},
```

[See styled-components FAQ →](https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page)

---

## Resources

📖 **[Full Documentation](https://docs.make.software/cspr.design/)** - Complete guide  
🎨 **[Storybook Demo](storybook-url)** - Interactive components  
🐛 **[Report Issues](https://github.com/make-software/cspr-design/issues)** - Bugs & features  
💬 **[Community](telegram-url)** - Get help & discuss

---

<div align="center">

**Built by [MAKE](https://make.services) for the Casper ecosystem**

⭐ **Star this repo if CSPR.design helped you build something cool!**

</div>
