# 🧩 Q3. Greatest Common Divisor of Strings

**Difficulty:** Easy  
**LeetCode Link:** [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

---

## 📝 Problem

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

---

### Example 1

```javascript
Input: (str1 = "ABCABC"), (str2 = "ABC");
Output: "ABC";
```

## Example 2:

```javascript
Input: (str1 = "ABABAB"), (str2 = "ABAB");
Output: "AB";
```

## Example 3:

```javascript
Input: (str1 = "LEET"), (str2 = "CODE");
Output: "";
```

**Constraints:**

- `1 <= str1.length, str2.length <= 1000`

- `str1 and str2 consist of English uppercase letters.`

## 💡 Solution

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const len = gcd(str1.length, str2.length);
  return str1.slice(0, len);
};
```

**🧮 Complexity**

- Time complexity : O(n).
- Space complexity : O(n).
