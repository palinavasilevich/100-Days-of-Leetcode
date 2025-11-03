import fs from "fs";
import path from "path";

const [, , number, ...titleParts] = process.argv;

if (!number || titleParts.length === 0) {
  console.log("Usage: node scripts/new-problem.js <number> <title>");
  process.exit(1);
}

const title = titleParts.join(" ");
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const camelName = slug
  .split("-")
  .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
  .join("");

const folder = `${number}-${slug}`;
const folderPath = path.join(process.cwd(), folder);

if (fs.existsSync(folderPath)) {
  console.log(`⚠️ Folder "${folder}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(folderPath);

// README.md
fs.writeFileSync(
  path.join(folderPath, "README.md"),
  `# 🧩 ${number}. ${title}

**Difficulty:** Easy  
**LeetCode Link:** [${title}](https://leetcode.com/problems/${slug}/)

---

## 📝 Problem

Describe the problem here.

---

### Example 1

\`\`\`javascript

\`\`\`

**Constraints:**

- \`\`

- \`\`

## 💡 Solution

\`\`\`javascript
/**
 * @param {}
 * @return {}
 */
export const ${camelName} = () => {

};
\`\`\`

**🧮 Complexity**

- Time Complexity : O(n).
- Space Complexity : O(n).
`
);

// JS file
fs.writeFileSync(
  path.join(folderPath, `solution.js`),
  `/**
 * @param {}
 * @return {}
 */
export const ${camelName} = () => {

};
`
);

console.log(`✅ Created new problem folder: ${folder}`);
