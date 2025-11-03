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

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
