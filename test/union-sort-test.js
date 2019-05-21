const chai = require('chai');
var expect = chai.expect;
const unionSort = require('../lib/union-sort');
describe('unionSort', function() {
    it('should return empty list when input lists are empty', function() {
        expect(unionSort([],[])).to.eql([]);
    });
    it('should return first list when second list is empty', function() {
        expect(unionSort([1,2,3],[])).to.eql([1,2,3]);
    });
    it('should return second list when first list is empty', function() {
        expect(unionSort([],[1,2,3])).to.eql([1,2,3]);
    });
    it('should return first list when second list is identical', function() {
        expect(unionSort([1,2,3],[1,2,3])).to.eql([1,2,3]);
    });
    it('should return sorted union when first list is strictly less than second list', function() {
        expect(unionSort([1,2,3],[4,5,6])).to.eql([1,2,3,4,5,6]);
    });
    it('should return sorted union when second list is strictly less than first list', function() {
        expect(unionSort([4,5,6],[1,2,3])).to.eql([1,2,3,4,5,6]);
    });
    it('should return sorted union of two nonempty distinct sorted lists', function() {
        expect(unionSort([1,3,5],[2,4,6])).to.eql([1,2,3,4,5,6]);
    });
    it('should return sorted union without duplicates when first input contains duplicates', function() {
        expect(unionSort([1,3,5,5,5],[2,4,6])).to.eql([1,2,3,4,5,6]);
    });
    it('should return sorted union without duplicates when second input contains duplicates', function() {
        expect(unionSort([1,3,5],[2,4,6,6,6])).to.eql([1,2,3,4,5,6]);
    });
    it('should return sorted union without duplicates on partially overlapping input', function() {
        expect(unionSort([1,3,5],[2,3,4,5,6,8,10])).to.eql([1,2,3,4,5,6,8,10]);
    });
});