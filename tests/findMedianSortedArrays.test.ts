
import { describe, it, expect } from 'vitest';
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

//  The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (numbers: number[], numbers2: number[]) => {
    const sorted = [...numbers, ...numbers2].sort((a, b) => a - b);
    const len = sorted.length;
    const isEven = len % 2 === 0;
    const lenDiv2 = len / 2;
    return isEven ? (sorted[lenDiv2 - 1]! + sorted[lenDiv2]!) / 2 : sorted[(len - 1) / 2];
};

describe('findMedianSortedArrays', () => {
    it('should [1,3] and [2] give median 2.0000', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2.000);
    });
    it('should [1,2] and [3,4] give median 2.5', () => {
        expect(findMedianSortedArrays([1, 2], [3,4])).toBe(2.5);
    });
});
