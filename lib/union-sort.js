/**
 * union-sort
 *
 * Produces sorted union of two sorted arrays without duplicates.
 *
 *
 * @param Array   sortedA        array in monotonically increasing order
 * @param Array   sortedB        array in monotonically increasing order         Description of optional variable.
 * 
 * @return Array  result         array in increasing order containing all the distinct elements in sortedA and sortedB
 */
function unionSort(sortedA, sortedB) {
    var result=[];
    var lastAdded; 

    // push disinct value into result
    // Assumes values are pushed in monotonically increasing order
    function pushDistinct(nextValue) {
        if (!lastAdded || lastAdded!==nextValue) {
            result.push(nextValue);
            lastAdded = nextValue;
        }
    }
    
    var i=0;
    var j=0;
    // loop invariant
    // result contains the distinct sorted union of sortedA[0..i] and sortedB[0..j]
    while (i<sortedA.length && j<sortedB.length) {
        const a=sortedA[i];
        const b=sortedB[j];
        if (a<b) {
            pushDistinct(a);
            i++;
        } else {
            pushDistinct(b);
            j++;
        } 
    }

    // We've reached the end of either sortedA or sortedB (possibly both)
    // We may have remaining elements in sortedA or sortedB (but not both)

    // Include remainder | sortedA[i..]
    sortedA
    .slice(i)
    .map(pushDistinct);

    // Include remainder | sortedB[j..]
    sortedB
    .slice(j)
    .map(pushDistinct);

    return result;
}

 module.exports = unionSort;