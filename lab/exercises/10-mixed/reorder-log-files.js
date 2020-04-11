function reorderLogFiles(logs) {
  // console.log(logs.length);
  logs.sort((log1, log2) => {
    // console.log(logs);
    const res = customSort(log1, log2);
    // if (log1 === 's 1088746413789' ||
    //     log2 === 's 1088746413789' ||
    //     log1 ===  'apx 814023338 8' ||
    //     log2 ===  'apx 814023338 8') {
    //   console.log({log1, log2, res});
    // }
    return res;
  });
  // console.log(logs);
  // console.log(logs.length);

  return logs;
}

function customSort (log1, log2) {
  const [id1, ...words1] = log1.split(' ');
  const [id2, ...words2] = log2.split(' ');
  const isNumber1 = !isNaN(words1[0]);
  const isNumber2 = !isNaN(words2[0]);

  // both letters
  if (!isNumber1 && !isNumber2) {
    const a = words1.join(' ');
    const b = words2.join(' ');
    if (a === b) return id1.localeCompare(id2);
    return a.localeCompare(b);
  }
  // if one is number or both
  return isNumber1 ? (isNumber2 ? 0 : 1) : -1;
}

module.exports = reorderLogFiles;
