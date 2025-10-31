# 🧩 205. Isomorphic Strings

**Difficulty:** Easy  
**LeetCode Link:** [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)

---

## 📝 Problem

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.  
All occurrences of a character must be replaced with another character while preserving the order.  
No two characters may map to the same character, but a character may map to itself.

---

Example 1:

````
Input: s = "egg", t = "add"
Output: true
```Example 2:
````

Input: s = "foo", t = "bar"
Output: false

```Example 3:

```

Input: s = "paper", t = "title"
Output: true

````
 
**Constraints:**


- `1 <= s.length <= 5 * 104`

- `t.length == s.length`

- `s` and `t` consist of any valid ascii character.



## Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const a = s[i],
      b = t[i];

    if ((mapST[a] && mapST[a] !== b) || (mapTS[b] && mapTS[b] !== a)) {
      return false;
    }

    mapST[a] = b;
    mapTS[b] = a;
  }

  return true;
};
````

**Complexity:**

- Time complexity : O(n).
- Space complexity : O(n).
