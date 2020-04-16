function reorderLogFiles(logs) {
  logs.sort((log1, log2) => {
    const [id1, ...words1] = log1.split(' ');
    const [id2, ...words2] = log2.split(' ');
    const isNumber1 = !Number.isNaN(Number(words1[0]));
    const isNumber2 = !Number.isNaN(Number(words2[0]));

    // both letters
    if (!isNumber1 && !isNumber2) {
      const a = words1.join(' ');
      const b = words2.join(' ');
      if (a === b) return id1.localeCompare(id2);
      return a.localeCompare(b);
    }
    // if one is number or both
    if (isNumber1 && isNumber2) return 0;
    if (isNumber1) return 1;
    return -1;
  });

  return logs;
}

module.exports = reorderLogFiles;
