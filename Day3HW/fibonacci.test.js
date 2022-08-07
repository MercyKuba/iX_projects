const { fiboSeq } = require("./fibonacci");

describe('test of fibonacci sequence', function() {
    test('fiboSeq test for 10',function() {
        expect(fiboSeq()).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    })
})