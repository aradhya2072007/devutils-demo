# UtilityForge ⚡️

> ### **Forge better JavaScript workflows.**  
> A modern interactive workspace for exploring and executing 31 reusable JavaScript utility functions.  
> **Powered by the [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm) utility toolkit.**

**🌐 Live Production Application:** [https://devutils-demo-nu.vercel.app](https://devutils-demo-nu.vercel.app)  
**📦 Published NPM Package:** [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm)  
**📂 Package Source Repository:** [github.com/aradhya2072007/npm-package-asd-project](https://github.com/aradhya2072007/npm-package-asd-project)

[![Live Demo](https://img.shields.io/badge/Live_Demo-devutils--demo--nu.vercel.app-6366f1?style=for-the-badge&logo=vercel)](https://devutils-demo-nu.vercel.app)
[![NPM Package](https://img.shields.io/badge/NPM-@aradhya2072007%2Fdevutils--npm-cb3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@aradhya2072007/devutils-npm)
[![GitHub Source](https://img.shields.io/badge/GitHub-npm--package--asd--project-181717?style=for-the-badge&logo=github)](https://github.com/aradhya2072007/npm-package-asd-project)

Built as the second submission repository for the **Advanced Software Development (ASD)** evaluation: *"Publish an NPM Package"*.

---

## 🌟 Highlights

- **Powered by DevUtils**: Runs on the live, published [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm) package from the public NPM registry.
- **Zero Local Copies**: 100% of utility operations are executed by the installed package without duplicating source code.
- **All 31 Functions Interactive**: Live input controls, parameter adjustments, execution timers, and formatted outputs for every utility.
- **Modern Developer SaaS UI**: Deep charcoal dark theme, elegant purple/indigo glowing accents, responsive layouts, and accessible controls.
- **Copy & Share Outputs**: One-click output copy with real-time feedback toast notifications.
- **Defensive Error Display**: Gracefully renders validation errors when invalid parameters or edge cases are triggered without application crashes.

---

## 📦 Installed Package Details

| Property | Value |
| :--- | :--- |
| **Application Name** | **UtilityForge** |
| **Tagline** | *Forge better JavaScript workflows.* |
| **Live Demo Website** | [https://devutils-demo-nu.vercel.app](https://devutils-demo-nu.vercel.app) |
| **Engine / Library** | **DevUtils** |
| **NPM Package Name** | [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm) |
| **Package Version** | `1.0.0` |
| **Package Repository** | [github.com/aradhya2072007/npm-package-asd-project](https://github.com/aradhya2072007/npm-package-asd-project) |
| **Demo Repository** | [github.com/aradhya2072007/devutils-demo](https://github.com/aradhya2072007/devutils-demo) |
| **Installation** | `npm install @aradhya2072007/devutils-npm` |
| **Author** | Aradhya Tiwari |

---

## 🛠 Demonstrated Utilities (31 Functions Across 6 Categories)

### 1. String Utilities (6)
- `capitalize(str, options?)` — Capitalizes initial letter with optional casing preservation.
- `reverseString(str)` — Reverses strings safely handling emojis and multi-byte graphemes.
- `slugify(str, options?)` — Generates URL-friendly slugs with diacritic normalization.
- `truncate(str, length, suffix?)` — Shortens text to an exact length boundary.
- `countWords(str)` — Accurately counts words filtering irregular whitespace and newlines.
- `isPalindrome(str, options?)` — Verifies palindromes with configurable case/whitespace rules.

### 2. Array Utilities (6)
- `removeDuplicates(arr, iteratee?)` — Removes duplicates preserving order for primitives or objects.
- `chunkArray(arr, size)` — Slices arrays into evenly sized chunks.
- `flattenArray(arr, depth?)` — Recursively flattens nested arrays.
- `findMax(arr, key?)` — Finds maximum numeric value or object with highest property.
- `findMin(arr, key?)` — Finds minimum numeric value or object with lowest property.
- `shuffleArray(arr)` — Produces an unbiased randomized permutation via Fisher-Yates.

### 3. Validation Utilities (5)
- `isValidEmail(email)` — Validates RFC 5322 compliant email formats.
- `isValidPhone(phone)` — Validates international and national phone formats (E.164).
- `isStrongPassword(password, options?)` — Evaluates password complexity criteria.
- `isEmpty(val)` — Robust emptiness check across all data types.
- `isValidURL(url, allowedProtocols?)` — Validates absolute URLs and scheme protocols.

### 4. Object Utilities (5)
- `deepClone(obj)` — Creates an independent deep clone without retained references.
- `pick(obj, keys)` — Creates an object containing only the selected keys.
- `omit(obj, keys)` — Creates an object excluding the specified keys.
- `isEmptyObject(obj)` — Verifies if an object has zero own enumerable properties.
- `mergeObjects(...objects)` — Deeply combines multiple objects without mutating sources.

### 5. Number Utilities (5)
- `clamp(num, min, max)` — Restricts value within lower and upper bounds.
- `roundTo(num, decimals?)` — Accurately rounds numbers avoiding floating point bugs.
- `randomNumber(min?, max?, integer?)` — Generates random numbers within a designated range.
- `isEven(num)` — Checks if an integer is even.
- `isOdd(num)` — Checks if an integer is odd.

### 6. Date Utilities (4)
- `isValidDate(date)` — Checks if input is a valid Date instance or timestamp.
- `formatDate(date, formatStr?)` — Formats dates using token templates (`YYYY-MM-DD HH:mm:ss`).
- `timeAgo(date, now?)` — Computes relative time strings (`"5 minutes ago"`, `"2 days ago"`).
- `getDaysBetween(startDate, endDate)` — Calculates whole calendar days between two dates.

---

## 💻 Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Core Library**: [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Pure CSS3 Design System (zero CSS framework overhead)
- **Deployment**: [Vercel](https://vercel.com/) (Hobby Tier)

---

## 📁 Project Structure

```
devutils-demo/
├── index.html                   # Entry HTML with UtilityForge branding & SEO metadata
├── package.json                 # Project configuration & NPM dependencies
├── package-lock.json            # Deterministic dependency lockfile
├── vite.config.js               # Vite configuration with React plugin
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Main application container & category filter logic
│   ├── index.css                # UtilityForge design system, variables & responsive breakpoints
│   ├── components/
│   │   ├── Header.jsx           # Top navbar with UtilityForge branding & search bar
│   │   ├── Hero.jsx             # Hero banner with install command & package stats
│   │   ├── Sidebar.jsx          # Left sidebar with category filters & counts
│   │   ├── UtilityCard.jsx      # Interactive card component with input controls & run action
│   │   └── Toast.jsx            # Toast notification component
│   └── data/
│       └── utilityDefinitions.js # Declarative definitions for all 31 package utilities
└── README.md                    # Project documentation
```

---

## 🚀 Local Development Setup

Clone the repository:
```bash
git clone https://github.com/aradhya2072007/devutils-demo.git
cd devutils-demo
```

Install dependencies (including `@aradhya2072007/devutils-npm`):
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 📄 License

MIT © 2026 Aradhya Tiwari
