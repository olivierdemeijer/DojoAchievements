describe("Refactoring achievements", function() {
    it("gives no achievement when there is no facts", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=undefined;
        facts[VIOLATIONS_DENSITY]=undefined;
        var achieved = refactoringAchievements(facts);
        expect(achieved.list.length).toEqual(0);
        expect(achieved.cleansheet).toBeFalsy();
    });
});

describe("Refactoring achievements", function() {
    it("gives no achievement when there is less than 2 elements in facts", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[0];
        facts[VIOLATIONS_DENSITY]=[100.0];
        var achieved = refactoringAchievements(facts);
        expect(achieved.list.length).toEqual(0);
    });
});
describe("Refactoring achievements", function() {
    it("gives no cleansheet when there is less than 2 elements in facts", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[0];
        facts[VIOLATIONS_DENSITY]=[100.0];
        var achieved = refactoringAchievements(facts);
        expect(achieved.cleansheet).toBeFalsy();
    });
});

describe("Refactoring achievements", function() {
    it("gives violaton hunter achievements", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[2,1,0];
        var achieved = refactoringAchievements(facts);
        expect(achieved.list).toContain(VIOLATION_HUNTER_1);
    });
});
describe("Refactoring achievements", function() {
    it("gives boyscout achievements", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=[99.0,99.5,100.0];
        var achieved = refactoringAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_1);
    });
});
describe("Refactoring achievements", function() {
    it("gives cleansheet when boyscout and violaton hunter do", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[2,1,0];
        facts[VIOLATIONS_DENSITY]=[99.0,99.5,100.0];
        var achieved = refactoringAchievements(facts);
        expect(achieved.cleansheet).toBeTruthy();
    });
});