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

// const gcdOfStrings = (str1, str2) => {
//   let str = "";
//   let maxStr = "";

//   for (let i = 0; i < str2.length; i++) {
//     str += str2[i];
//     if (str1.replaceAll(str, "") === "" && str2.replaceAll(str, "") === "")
//       maxStr = str;
//   }

//   return maxStr;
// };

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABCDEF", "ABC"));
console.log(gcdOfStrings("ABABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
