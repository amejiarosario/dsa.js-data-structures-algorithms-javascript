function radixSort(arr) {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       // Create bucket arrays for each of 0-9
       let buckets = [...Array(10)].map(() => []);
       // For each number, get the current significant digit and put it in the respective bucket
       for (let num of arr) {
          buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
       }
       // Reconstruct the array by concatinating all sub arrays
       arr = [].concat.apply([], buckets);
       // Move to the next significant digit
       divisor *= 10;
    }
    return arr;
 }
//  unit test
console.log(radixSort([5,3,88,235,65,23,4632,234]))
// unit test 2
console.log(radixSort([802, 630, 20, 745, 52, 300, 612, 932, 78, 187]))
// unit test 3
console.log(radixSort([45, 2, 56, 2, 5, 6, 34, 1, 56, 89, 33]))