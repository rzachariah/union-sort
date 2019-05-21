function unionSort(sortedA, sortedB) {
    var result=[];
    var lastAdded; 
    function addNonDup(item) {
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
            addNonDup(a);
            i++;
        } else {
            addNonDup(b);
            j++;
        } 
    }
    for (;i<sortedA.length;i++) {
        const a=sortedA[i];
        addNonDup(a);
    }
    for (;j<sortedB.length;j++) {
        const b=sortedB[j];
        addNonDup(b);
    }
    return result;
}

 module.exports = unionSort;