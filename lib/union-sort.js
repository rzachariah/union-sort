/**
 * union-sort
 *
 * Produces sorted distinct union of two sorted arrays.
 *
 *
 * @param Array   sortedA        array in monotonically increasing order
 * @param Array   sortedB        array in monotonically increasing order         Description of optional variable.
 * 
 * @return Array  result         array in increasing order containing all the distinct elements in sortedA and sortedB
 */
function unionSort(sortedA, sortedB) {
    var result=[];
    var lastPushed; 

    // push disinct value into result as long as it is distinct from lastPushed
    function pushDistinctFromLast(nextValue) {
        if (!lastPushed || lastPushed!==nextValue) {
            result.push(nextValue);
            lastPushed = nextValue;
        }
    }
    
    // loop invariant
    // result contains the distinct sorted union of sortedA[0..i] and sortedB[0..j]
    var i=0;
    var j=0;
    while (i<sortedA.length && j<sortedB.length) {
        const a=sortedA[i];
        const b=sortedB[j];
        if (a<b) {
            pushDistinctFromLast(a);
            i++;
        } else {
            pushDistinctFromLast(b);
            j++;
        } 
    }

    // We've reached the end of either sortedA or sortedB (possibly both)
    // We may have remaining elements in sortedA or sortedB (but not both)

    // Include remainder
    const remainder = sortedA.slice(i).concat(sortedB.slice(j));
    remainder.map(pushDistinctFromLast);

    return result;
}

 module.exports = unionSort;
