# kid: The Smallest Production-Grade Random ID Generator module/library.

kid is a highly optimized, cryptographically secure JavaScript library/module designed for generating unique random IDs with an incredibly small footprint. It provides flexible options for pure random strings, prefixed IDs, and IDs embedded with timestamps, making it suitable for a wide range of production environments where performance and byte size matter. 

At its core, kid leverages the browser's native crypto.getRandomValues() for top-tier randomness, ensuring your generated IDs are unpredictable and highly collision-resistant. 

### Features
- Bare Minimum Code: Engineered for extreme conciseness without sacrificing security.
- Cryptographically Secure: Utilizes crypto.getRandomValues() for robust randomness.
- Flexible ID Types: Generate pure random IDs, IDs with custom prefixes, or IDs with embedded timestamps.
- Customizable Alphabet: Use the default URL-safe alphabet or provide your own.
- Exact Length Control: Define the precise length of the random segment of your IDs.
- Module Ready: Easily import and use in modern JavaScript projects.

## Installation

Since kid is designed for extreme minimalism and often inlined or used directly, there's no traditional npm install needed for its core functions. You can simply copy the functions into your project or use them directly via a CDN.

## Usage
CDN (Content Delivery Network)
You can directly include kid in your HTML for browser-based projects. Assuming your main file is kid.js in the main branch of your repository:

<script type="module">
  import { kid } from 'https://cdn.jsdelivr.net/gh/ikdao/kid@main/kid.js';

  // Now you can use kid, hid, sid
  console.log("Pure Random ID:", kid());
  console.log("Prefixed ID:", hid());
  console.log("Timestamped ID:", sid());
</script>

(Note: The CDN URL assumes your library's entry point is kid.js in the main branch. Adjust kid.js if your file name is different, e.g., index.js.)

As a Module (ESM)
Save the code for each function into a file (e.g., kid-generator.js):// kid-generator.js

// Alphabet used across functions
const a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

// 1. Pure Random ID
export let kid=(l=11,a=a)=>{ // 'a' parameter defaults to the module-level 'a'
  let e=crypto.getRandomValues(new Uint8Array(l)),i="";
  for(let o=0;o<l;o++)i+=a[63&e[o]];
  return i
};

// 2. Random ID with Flexible Prefix
export let hid=(l=11,h="ID-",a=a)=>{ // 'a' parameter defaults to the module-level 'a'
  let e=crypto.getRandomValues(new Uint8Array(l)),i="";
  for(let o=0;o<l;o++)i+=a[63&e[o]];
  return h+i
};

// 3. Random ID with Flexible Prefix and Raw Numerical Timestamp
export let sid=(l=11,h="ID-",a=a)=>{ // 'a' parameter defaults to the module-level 'a'
  let e=crypto.getRandomValues(new Uint8Array(l)),i="";
  for(let o=0;o<l;o++)i+=a[63&e[o]];
  return h+Date.now().toString()+i;
};

Then, import and use in your application:// app.js
import { kid } from './kid.js'; // Adjust path as needed

console.log("--- Using kid ---");
console.log("Default (11 chars):", kid()); // e.g., "AbC1dEfgHjK"
console.log("Custom length (15 chars):", kid(15)); // e.g., "LmN2oPqrStUvWxY"
console.log("Custom alphabet (numeric, 8 chars):", kid(8, "0123456789")); // e.g., "12345678"

console.log("\n--- Using hid (Prefixed ID) ---");
console.log("Default (ID- prefix, 11 chars):", hid()); // e.g., "ID-AbC1dEfgHjK"
console.log("Custom prefix (USER- prefix, 10 chars):", hid(10, "USER-")); // e.g., "USER-LmN2oPqrSt"

console.log("\n--- Using sid (Timestamped ID) ---");
console.log("Default (ID- prefix, timestamp, 11 chars):", sid()); // e.g., "ID-1721835729000-AbC1dEfgHjK"
console.log("Custom prefix (LOG- prefix, timestamp, 8 chars):", sid(8, "LOG-")); // e.g., "LOG-1721835729456-LmN2oPqr"

// Generate multiple IDs
for (let i = 0; i < 3; i++) {
  console.log(`Order ${i + 1}:`, hid(12, "ORD-"));
}

## License

This project is licensed under the 01SL (Self-License). 
You can find the full license text at: https://legal.ikdao.org/license/01sl

Developer
kid is developed by:
Hemang Tewari
hemu.ikdao.org

## Organisation

This project is brought to you by:
IKDAO
https://ikdao.org/

## Contributing

We welcome contributions from the community! Whether it's bug reports, feature suggestions, or code contributions, your participation helps make kid even better. Please feel free to open issues or pull requests on the GitHub repository. Let's build the smallest and most robust ID generator together!
