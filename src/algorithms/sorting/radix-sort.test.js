const radixSort = require('./radix-sort');

describe('Testing Radix Sort Algorithm', () => {
    it('should sort with multiple digit elements #1', () => {
        expect(radixSort([5,3,88,235,65,23,4632,234])).toEqual([3,5,23,65,88,234,235,4632]);
    });

    it('should sort with multiple digit elements #2', () => {
        expect(radixSort([802,630,20,745,52,300,612,932,78,187])).toEqual([20,52,78,187,300,612,630,802,932]);
    });

    it('should sort with duplicated values', () => {
        expect(radixSort([45,2,56,2,5,6,34,1,56,89,33])).toEqual([1,2,2,5,6,33,34,45,56,56,89]);
    });

    it('should work with zero numbers', () => {
        expect(radixSort([])).toEqual([]);
    });

    it('should work with one number', () => {
        expect(radixSort([3])).toEqual([3]);
    });

    it('should sort numbers', () => {
        expect(radixSort([3, 5, 0])).toEqual([0, 3, 5]);
    });

    it('should sort with inverse array', () => {
        expect(radixSort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    it('should sort with already sorted array', () => {
        expect(radixSort([1, 2, 3])).toEqual([1, 2, 3]);
    });
});