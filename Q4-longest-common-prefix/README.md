# 🧩 Q4. Longest Common Prefix

**Difficulty:** Easy  
**LeetCode Link:** [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

---

## 📝 Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

---

### Example 1

```javascript
Input: strs = ["flower", "flow", "flight"];
Output: "fl";
```

### Example 2

```javascript
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`

- `0 <= strs[i].length <= 200`

- `strs[i] consists of only lowercase English letters if it is non-empty.`

## 💡 Solution

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }

  return prefix;
};

const longestCommonPrefixV2 = function (strs) {
  if (strs.length === 0) return "";

  const firstStr = strs[0];
  for (let i = 0; i < firstStr.length; i++) {
    const currentStr = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentStr) {
        return firstStr.slice(0, i);
      }
    }
  }

  return firstStr;
};
```

**🧮 Complexity**

- Time Complexity : O(n \* m).
- Space Complexity : O(1).
