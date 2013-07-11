describe("Achieved", function() {
    it("cleansheet false by default", function() {
        var achieved = new Achieved();
        expect(achieved.cleansheet).toBeFalsy();
    });
});
describe("Achieved", function() {
    it("list is empty by default", function() {
        var achieved = new Achieved();
        expect(achieved.list.length).toEqual(0);
    });
});
