function unionSort(sortedA, sortedB) {
    var result=[];
    var lastAdded; 

    // push disinct item into result
    // Assumes items are added in non-decreasing order
    function pushDistinct(item) {
        if (!lastAdded || lastAdded!==item) {
            result.push(item);
            lastAdded = item;
        }
    }
    
    var i=0;
    var j=0;
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

    const remainingA = sortedA.slice(i);
    remainingA.map(pushDistinct);

    const remainingB = sortedB.slice(j);
    remainingB.map(pushDistinct);

    return result;
}

 module.exports = unionSort;