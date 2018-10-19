/**
 * 6.9 100 Lockers: There are 100 closed lockers in a hallway. A man begins by opening all 100 lockers. Next, he closes every second locker.Then, on his third pass, he toggles every third locker (closes it if it is open or opens it if it is closed). This process continues for 100 passes, such that on each pass i, the man toggles every i th locker. After his 100th pass in the hallway, in which he toggles only locker #100, how many lockers are open?
 *
 * @param num 100
 * @returns {*}
 */
function getOpenedLockers(num = 100) {
  const lockers = Array(num);

  for(let i = 0; i < num; i++) {
    for(let j = i; i < num; j += (i + 1)) {
      if(j >= num) break;
      lockers[j] = !lockers[j];
    }
    // console.log(i, JSON.stringify(lockers));
  }

  console.log(lockers.reduce((acc, val, i) => val ? acc.concat(i+1) : acc, []));
  return lockers.reduce((acc, val) => val ? acc + 1 : acc, 0);
}

console.log(getOpenedLockers());