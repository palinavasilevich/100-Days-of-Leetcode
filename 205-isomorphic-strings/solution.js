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
