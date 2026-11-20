/**
 * @fileoverview Utility definitions and execution runners for all 31 functions.
 * All functions are imported DIRECTLY from the published package: @aradhya2072007/devutils-npm
 */

import devutils from '@aradhya2072007/devutils-npm';

const {
  // String Utilities (6)
  capitalize,
  reverseString,
  slugify,
  truncate,
  countWords,
  isPalindrome,
  // Array Utilities (6)
  removeDuplicates,
  chunkArray,
  flattenArray,
  findMax,
  findMin,
  shuffleArray,
  // Validation Utilities (5)
  isValidEmail,
  isValidPhone,
  isStrongPassword,
  isEmpty,
  isValidURL,
  // Object Utilities (5)
  deepClone,
  pick,
  omit,
  isEmptyObject,
  mergeObjects,
  // Number Utilities (5)
  clamp,
  roundTo,
  randomNumber,
  isEven,
  isOdd,
  // Date Utilities (4)
  isValidDate,
  formatDate,
  timeAgo,
  getDaysBetween
} = devutils;

export const CATEGORIES = [
  { id: 'all', name: 'All Utilities', count: 31, icon: 'LayoutGrid' },
  { id: 'strings', name: 'Strings', count: 6, icon: 'Type', color: 'indigo' },
  { id: 'arrays', name: 'Arrays', count: 6, icon: 'ListOrdered', color: 'purple' },
  { id: 'validation', name: 'Validation', count: 5, icon: 'ShieldCheck', color: 'emerald' },
  { id: 'objects', name: 'Objects', count: 5, icon: 'Boxes', color: 'amber' },
  { id: 'numbers', name: 'Numbers', count: 5, icon: 'Binary', color: 'sky' },
  { id: 'dates', name: 'Dates', count: 4, icon: 'Calendar', color: 'rose' }
];

export const UTILITIES = [
  // ==========================================
  // STRINGS (6)
  // ==========================================
  {
    id: 'strings-capitalize',
    category: 'strings',
    name: 'capitalize',
    signature: 'capitalize(str, options?)',
    summary: 'Capitalizes the first character of a string with optional casing preservation.',
    inputs: [
      { key: 'str', label: 'Input Text', type: 'text', default: 'hello world from DevUtils' },
      { key: 'lowerRest', label: 'Lowercase remainder', type: 'boolean', default: true }
    ],
    execute: (inputs) => capitalize(inputs.str, { lowerRest: inputs.lowerRest })
  },
  {
    id: 'strings-reverseString',
    category: 'strings',
    name: 'reverseString',
    signature: 'reverseString(str)',
    summary: 'Reverses string correctly handling multi-byte characters and emoji graphemes.',
    inputs: [
      { key: 'str', label: 'Input Text', type: 'text', default: 'DevUtils Toolkit 🚀✨' }
    ],
    execute: (inputs) => reverseString(inputs.str)
  },
  {
    id: 'strings-slugify',
    category: 'strings',
    name: 'slugify',
    signature: 'slugify(str, options?)',
    summary: 'Converts titles to clean URL slugs, stripping accents and diacritics.',
    inputs: [
      { key: 'str', label: 'Input Text', type: 'text', default: 'Café & Restaurant: 100% Delicious!' },
      { key: 'separator', label: 'Separator', type: 'text', default: '-' },
      { key: 'lowercase', label: 'Lowercase output', type: 'boolean', default: true }
    ],
    execute: (inputs) => slugify(inputs.str, { separator: inputs.separator, lowercase: inputs.lowercase })
  },
  {
    id: 'strings-truncate',
    category: 'strings',
    name: 'truncate',
    signature: 'truncate(str, length, suffix?)',
    summary: 'Shortens string to exact maximum length appending a custom suffix indicator.',
    inputs: [
      { key: 'str', label: 'Input Text', type: 'text', default: 'The quick brown fox jumps over the lazy dog' },
      { key: 'length', label: 'Max Length', type: 'number', default: 25 },
      { key: 'suffix', label: 'Suffix', type: 'text', default: '...' }
    ],
    execute: (inputs) => truncate(inputs.str, Number(inputs.length), inputs.suffix)
  },
  {
    id: 'strings-countWords',
    category: 'strings',
    name: 'countWords',
    signature: 'countWords(str)',
    summary: 'Counts words in text accurately, filtering irregular whitespace, newlines, and tabs.',
    inputs: [
      { key: 'str', label: 'Input Text', type: 'textarea', default: 'Build modern, lightweight\nand reliable npm packages!' }
    ],
    execute: (inputs) => countWords(inputs.str)
  },
  {
    id: 'strings-isPalindrome',
    category: 'strings',
    name: 'isPalindrome',
    signature: 'isPalindrome(str, options?)',
    summary: 'Determines if a string reads identically forwards and backwards.',
    inputs: [
      { key: 'str', label: 'Candidate String', type: 'text', default: 'A man, a plan, a canal: Panama' },
      { key: 'caseSensitive', label: 'Case sensitive', type: 'boolean', default: false },
      { key: 'ignoreWhitespace', label: 'Ignore spaces', type: 'boolean', default: true },
      { key: 'ignorePunctuation', label: 'Ignore punctuation', type: 'boolean', default: true }
    ],
    execute: (inputs) => isPalindrome(inputs.str, {
      caseSensitive: inputs.caseSensitive,
      ignoreWhitespace: inputs.ignoreWhitespace,
      ignorePunctuation: inputs.ignorePunctuation
    })
  },

  // ==========================================
  // ARRAYS (6)
  // ==========================================
  {
    id: 'arrays-removeDuplicates',
    category: 'arrays',
    name: 'removeDuplicates',
    signature: 'removeDuplicates(arr, iteratee?)',
    summary: 'Removes duplicate values while preserving insertion order for primitives or objects.',
    inputs: [
      { key: 'arr', label: 'Array (JSON format)', type: 'textarea', default: '[1, 2, 2, 3, 4, 4, 5, 1, "test", "test"]' },
      { key: 'key', label: 'Key Selector (optional)', type: 'text', default: '' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      return removeDuplicates(parsed, inputs.key ? inputs.key : undefined);
    }
  },
  {
    id: 'arrays-chunkArray',
    category: 'arrays',
    name: 'chunkArray',
    signature: 'chunkArray(arr, size)',
    summary: 'Splits an array into smaller chunks of specified positive size.',
    inputs: [
      { key: 'arr', label: 'Array (JSON format)', type: 'textarea', default: '["React", "Vite", "Node", "NPM", "JavaScript", "DevUtils"]' },
      { key: 'size', label: 'Chunk Size', type: 'number', default: 2 }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      return chunkArray(parsed, Number(inputs.size));
    }
  },
  {
    id: 'arrays-flattenArray',
    category: 'arrays',
    name: 'flattenArray',
    signature: 'flattenArray(arr, depth?)',
    summary: 'Recursively flattens nested arrays up to the specified recursion depth.',
    inputs: [
      { key: 'arr', label: 'Nested Array (JSON format)', type: 'textarea', default: '[1, [2, [3, [4, [5]]]]]' },
      { key: 'depth', label: 'Depth (number or Infinity)', type: 'text', default: 'Infinity' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      const depth = inputs.depth === 'Infinity' ? Infinity : Number(inputs.depth);
      return flattenArray(parsed, depth);
    }
  },
  {
    id: 'arrays-findMax',
    category: 'arrays',
    name: 'findMax',
    signature: 'findMax(arr, key?)',
    summary: 'Finds maximum numeric value or object with highest value by property key.',
    inputs: [
      { key: 'arr', label: 'Array (JSON format)', type: 'textarea', default: '[{"item": "Laptop", "price": 999}, {"item": "Mouse", "price": 25}, {"item": "Monitor", "price": 350}]' },
      { key: 'key', label: 'Property Key (for objects)', type: 'text', default: 'price' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      return findMax(parsed, inputs.key ? inputs.key : undefined);
    }
  },
  {
    id: 'arrays-findMin',
    category: 'arrays',
    name: 'findMin',
    signature: 'findMin(arr, key?)',
    summary: 'Finds minimum numeric value or object with lowest value by property key.',
    inputs: [
      { key: 'arr', label: 'Array (JSON format)', type: 'textarea', default: '[{"item": "Laptop", "price": 999}, {"item": "Mouse", "price": 25}, {"item": "Monitor", "price": 350}]' },
      { key: 'key', label: 'Property Key (for objects)', type: 'text', default: 'price' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      return findMin(parsed, inputs.key ? inputs.key : undefined);
    }
  },
  {
    id: 'arrays-shuffleArray',
    category: 'arrays',
    name: 'shuffleArray',
    signature: 'shuffleArray(arr)',
    summary: 'Returns an unbiased randomized copy of the array using Fisher-Yates algorithm.',
    inputs: [
      { key: 'arr', label: 'Array (JSON format)', type: 'textarea', default: '["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.arr);
      return shuffleArray(parsed);
    }
  },

  // ==========================================
  // VALIDATION (5)
  // ==========================================
  {
    id: 'validation-isValidEmail',
    category: 'validation',
    name: 'isValidEmail',
    signature: 'isValidEmail(email)',
    summary: 'Validates RFC 5322 compliant email address formats with domain inspection.',
    inputs: [
      { key: 'email', label: 'Email Address', type: 'text', default: 'aradhya2072007@gmail.com' }
    ],
    execute: (inputs) => isValidEmail(inputs.email)
  },
  {
    id: 'validation-isValidPhone',
    category: 'validation',
    name: 'isValidPhone',
    signature: 'isValidPhone(phone)',
    summary: 'Validates international and common national phone formats (7-15 digits E.164).',
    inputs: [
      { key: 'phone', label: 'Phone Number', type: 'text', default: '+1 (555) 234-5678' }
    ],
    execute: (inputs) => isValidPhone(inputs.phone)
  },
  {
    id: 'validation-isStrongPassword',
    category: 'validation',
    name: 'isStrongPassword',
    signature: 'isStrongPassword(password, options?)',
    summary: 'Evaluates password complexity against length, case, number, and symbol rules.',
    inputs: [
      { key: 'password', label: 'Password', type: 'text', default: 'DevUtils#2026!Secure' },
      { key: 'minLength', label: 'Min Length', type: 'number', default: 8 },
      { key: 'requireUppercase', label: 'Require Uppercase', type: 'boolean', default: true },
      { key: 'requireLowercase', label: 'Require Lowercase', type: 'boolean', default: true },
      { key: 'requireNumbers', label: 'Require Digits', type: 'boolean', default: true },
      { key: 'requireSpecial', label: 'Require Special Character', type: 'boolean', default: true }
    ],
    execute: (inputs) => isStrongPassword(inputs.password, {
      minLength: Number(inputs.minLength),
      requireUppercase: inputs.requireUppercase,
      requireLowercase: inputs.requireLowercase,
      requireNumbers: inputs.requireNumbers,
      requireSpecial: inputs.requireSpecial
    })
  },
  {
    id: 'validation-isEmpty',
    category: 'validation',
    name: 'isEmpty',
    signature: 'isEmpty(val)',
    summary: 'Checks emptiness across strings, arrays, objects, sets, maps, null, and undefined.',
    inputs: [
      { key: 'val', label: 'Value (JSON or empty string)', type: 'text', default: '{}' }
    ],
    execute: (inputs) => {
      let val = inputs.val;
      try {
        val = JSON.parse(inputs.val);
      } catch {
        // Keep string if not json
      }
      return isEmpty(val);
    }
  },
  {
    id: 'validation-isValidURL',
    category: 'validation',
    name: 'isValidURL',
    signature: 'isValidURL(url, allowedProtocols?)',
    summary: 'Validates absolute URL structure with customizable allowed protocol schemes.',
    inputs: [
      { key: 'url', label: 'URL Address', type: 'text', default: 'https://github.com/aradhya2072007/devutils-demo' },
      { key: 'protocols', label: 'Allowed Protocols (comma-separated)', type: 'text', default: 'http, https' }
    ],
    execute: (inputs) => {
      const protocols = inputs.protocols.split(',').map(p => p.trim()).filter(Boolean);
      return isValidURL(inputs.url, protocols);
    }
  },

  // ==========================================
  // OBJECTS (5)
  // ==========================================
  {
    id: 'objects-deepClone',
    category: 'objects',
    name: 'deepClone',
    signature: 'deepClone(obj)',
    summary: 'Creates an independent deep copy of complex objects, arrays, and dates.',
    inputs: [
      { key: 'obj', label: 'Object (JSON format)', type: 'textarea', default: '{\n  "user": "Aradhya",\n  "settings": {\n    "theme": "dark",\n    "notifications": true\n  }\n}' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.obj);
      return deepClone(parsed);
    }
  },
  {
    id: 'objects-pick',
    category: 'objects',
    name: 'pick',
    signature: 'pick(obj, keys)',
    summary: 'Creates a new object composed only of the selected property keys.',
    inputs: [
      { key: 'obj', label: 'Object (JSON format)', type: 'textarea', default: '{\n  "name": "DevUtils",\n  "version": "1.0.0",\n  "license": "MIT",\n  "stars": 1500\n}' },
      { key: 'keys', label: 'Keys to Pick (comma-separated)', type: 'text', default: 'name, version, license' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.obj);
      const keys = inputs.keys.split(',').map(k => k.trim()).filter(Boolean);
      return pick(parsed, keys);
    }
  },
  {
    id: 'objects-omit',
    category: 'objects',
    name: 'omit',
    signature: 'omit(obj, keys)',
    summary: 'Creates a new object with all own properties excluding the specified keys.',
    inputs: [
      { key: 'obj', label: 'Object (JSON format)', type: 'textarea', default: '{\n  "id": "usr_991",\n  "passwordHash": "$2b$12$secret...",\n  "username": "aradhya2072007",\n  "role": "admin"\n}' },
      { key: 'keys', label: 'Keys to Omit (comma-separated)', type: 'text', default: 'passwordHash' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.obj);
      const keys = inputs.keys.split(',').map(k => k.trim()).filter(Boolean);
      return omit(parsed, keys);
    }
  },
  {
    id: 'objects-isEmptyObject',
    category: 'objects',
    name: 'isEmptyObject',
    signature: 'isEmptyObject(obj)',
    summary: 'Verifies if an object is an empty plain object with zero own properties.',
    inputs: [
      { key: 'obj', label: 'Object (JSON format)', type: 'textarea', default: '{}' }
    ],
    execute: (inputs) => {
      const parsed = JSON.parse(inputs.obj);
      return isEmptyObject(parsed);
    }
  },
  {
    id: 'objects-mergeObjects',
    category: 'objects',
    name: 'mergeObjects',
    signature: 'mergeObjects(...objects)',
    summary: 'Deeply merges multiple source objects into a new object without mutation.',
    inputs: [
      { key: 'obj1', label: 'First Object (JSON)', type: 'textarea', default: '{\n  "theme": "dark",\n  "layout": { "sidebar": true, "padding": 16 }\n}' },
      { key: 'obj2', label: 'Second Object (JSON)', type: 'textarea', default: '{\n  "version": "1.0.0",\n  "layout": { "padding": 24, "fluid": true }\n}' }
    ],
    execute: (inputs) => {
      const o1 = JSON.parse(inputs.obj1);
      const o2 = JSON.parse(inputs.obj2);
      return mergeObjects(o1, o2);
    }
  },

  // ==========================================
  // NUMBERS (5)
  // ==========================================
  {
    id: 'numbers-clamp',
    category: 'numbers',
    name: 'clamp',
    signature: 'clamp(num, min, max)',
    summary: 'Restricts a numeric value within inclusive lower and upper boundaries.',
    inputs: [
      { key: 'num', label: 'Target Value', type: 'number', default: 175 },
      { key: 'min', label: 'Minimum Bound', type: 'number', default: 0 },
      { key: 'max', label: 'Maximum Bound', type: 'number', default: 100 }
    ],
    execute: (inputs) => clamp(Number(inputs.num), Number(inputs.min), Number(inputs.max))
  },
  {
    id: 'numbers-roundTo',
    category: 'numbers',
    name: 'roundTo',
    signature: 'roundTo(num, decimals?)',
    summary: 'Accurately rounds numbers avoiding standard IEEE-754 floating point inaccuracies.',
    inputs: [
      { key: 'num', label: 'Float Number', type: 'number', default: 1.005 },
      { key: 'decimals', label: 'Decimal Places', type: 'number', default: 2 }
    ],
    execute: (inputs) => roundTo(Number(inputs.num), Number(inputs.decimals))
  },
  {
    id: 'numbers-randomNumber',
    category: 'numbers',
    name: 'randomNumber',
    signature: 'randomNumber(min?, max?, integer?)',
    summary: 'Generates pseudo-random integers or floating-point values within range.',
    inputs: [
      { key: 'min', label: 'Minimum', type: 'number', default: 1 },
      { key: 'max', label: 'Maximum', type: 'number', default: 100 },
      { key: 'integer', label: 'Return Integer', type: 'boolean', default: true }
    ],
    execute: (inputs) => randomNumber(Number(inputs.min), Number(inputs.max), inputs.integer)
  },
  {
    id: 'numbers-isEven',
    category: 'numbers',
    name: 'isEven',
    signature: 'isEven(num)',
    summary: 'Checks if a number is an even integer.',
    inputs: [
      { key: 'num', label: 'Number', type: 'number', default: 42 }
    ],
    execute: (inputs) => isEven(Number(inputs.num))
  },
  {
    id: 'numbers-isOdd',
    category: 'numbers',
    name: 'isOdd',
    signature: 'isOdd(num)',
    summary: 'Checks if a number is an odd integer.',
    inputs: [
      { key: 'num', label: 'Number', type: 'number', default: 99 }
    ],
    execute: (inputs) => isOdd(Number(inputs.num))
  },

  // ==========================================
  // DATES (4)
  // ==========================================
  {
    id: 'dates-isValidDate',
    category: 'dates',
    name: 'isValidDate',
    signature: 'isValidDate(date)',
    summary: 'Checks whether an input represents a valid Date instance or parseable timestamp.',
    inputs: [
      { key: 'date', label: 'Date String / Timestamp', type: 'text', default: '2026-11-21T03:00:00Z' }
    ],
    execute: (inputs) => isValidDate(inputs.date)
  },
  {
    id: 'dates-formatDate',
    category: 'dates',
    name: 'formatDate',
    signature: 'formatDate(date, formatStr?)',
    summary: 'Formats dates using pattern tokens (YYYY, MM, DD, HH, mm, ss, A, a).',
    inputs: [
      { key: 'date', label: 'Date', type: 'text', default: '2026-11-21T15:45:30' },
      { key: 'formatStr', label: 'Format Template', type: 'text', default: 'YYYY-MM-DD HH:mm:ss' }
    ],
    execute: (inputs) => formatDate(inputs.date, inputs.formatStr)
  },
  {
    id: 'dates-timeAgo',
    category: 'dates',
    name: 'timeAgo',
    signature: 'timeAgo(date, now?)',
    summary: 'Computes human-readable relative time string (e.g. "just now", "5 minutes ago").',
    inputs: [
      { key: 'date', label: 'Target Date', type: 'text', default: new Date(Date.now() - 15 * 60 * 1000).toISOString() }
    ],
    execute: (inputs) => timeAgo(inputs.date)
  },
  {
    id: 'dates-getDaysBetween',
    category: 'dates',
    name: 'getDaysBetween',
    signature: 'getDaysBetween(startDate, endDate)',
    summary: 'Calculates the whole calendar days between two dates.',
    inputs: [
      { key: 'startDate', label: 'Start Date', type: 'text', default: '2026-01-01' },
      { key: 'endDate', label: 'End Date', type: 'text', default: '2026-12-31' }
    ],
    execute: (inputs) => getDaysBetween(inputs.startDate, inputs.endDate)
  }
];
