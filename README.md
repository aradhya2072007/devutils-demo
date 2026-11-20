# DevUtils Playground ⚡️

An interactive, dark-themed developer playground and demonstration dashboard for the [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm) utility toolkit.

**🌐 Live Production Application:** [https://devutils-demo-nu.vercel.app](https://devutils-demo-nu.vercel.app)  
**📦 Published NPM Package:** [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm)  
**📂 Package Source Repository:** [github.com/aradhya2072007/npm-package-asd-project](https://github.com/aradhya2072007/npm-package-asd-project)

Built as the second submission repository for the **Advanced Software Development (ASD)** evaluation: *"Publish an NPM Package"*.

---

## 🌟 Highlights

- **Live NPM Package Integration**: Installs and uses `@aradhya2072007/devutils-npm` directly from the public NPM registry.
- **Zero Local Copies**: 100% of utility operations are executed by the installed package without replicating source code.
- **All 31 Functions Interactive**: Live input controls, parameter adjustments, execution timers, and formatted outputs for every utility.
- **Modern Developer SaaS UI**: Deep dark mode theme, elegant purple/blue glowing accents, responsive layouts, and accessible controls.
- **Copy & Share Outputs**: One-click output copy with real-time feedback toast notifications.
- **Defensive Error Display**: Gracefully renders validation errors when invalid parameters or edge cases are triggered.

---

## 📦 Installed Package Details

| Property | Value |
| :--- | :--- |
| **Package Name** | [`@aradhya2072007/devutils-npm`](https://www.npmjs.com/package/@aradhya2072007/devutils-npm) |
| **Version** | `1.0.0` |
| **Package Repository** | [github.com/aradhya2072007/npm-package-asd-project](https://github.com/aradhya2072007/npm-package-asd-project) |
| **Demo Repository** | [github.com/aradhya2072007/devutils-demo](https://github.com/aradhya2072007/devutils-demo) |
| **Installation** | `npm install @aradhya2072007/devutils-npm` |
| **Author** | Aradhya Tiwari |

---

## 🛠 Demonstrated Utilities (31 Functions)

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

## 🌐 Deployment (Vercel / Netlify)

This repository is ready for one-click deployment:

### Deploying to Vercel
1. Import repository `aradhya2072007/devutils-demo` on [Vercel](https://vercel.com).
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect repository `aradhya2072007/devutils-demo` on [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy site**.

---

## 📄 License

MIT © 2026 Aradhya Tiwari
