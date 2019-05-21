const _ = require('lodash');
const chai = require('chai');
var expect = chai.expect;
const unionSort = require('../lib/union-sort');
describe('unionSort', function() {
    it('should return first list when second list is empty', function() {
        expect(_.isEqual(unionSort([1,2,3],[]), [1,2,3])).to.be.true;
    });
    it('should return second list when first list is empty', function() {
        expect(_.isEqual(unionSort([],[1,2,3]), [1,2,3])).to.be.true;
    });
    it('should return first list when second list is identical', function() {
        expect(_.isEqual(unionSort([1,2,3],[1,2,3]), [1,2,3])).to.be.true;
    });
    it('should return sorted union when first list is strictly less than second list', function() {
        expect(_.isEqual(unionSort([1,2,3],[4,5,6]), [1,2,3,4,5,6])).to.be.true;
    });
    it('should return sorted union when second list is strictly less than first list', function() {
        expect(_.isEqual(unionSort([4,5,6],[1,2,3]), [1,2,3,4,5,6])).to.be.true;
    });
    it('should return sorted union of two nonempty sorted lists', function() {
        expect(_.isEqual(unionSort([1,3,5],[2,4,6]), [1,2,3,4,5,6])).to.be.true;
    });
    it('should return sorted union without duplicates', function() {
        expect(_.isEqual(unionSort([1,3,5],[1,2,3,4,5,6]), [1,2,3,4,5,6])).to.be.true;
    });
});