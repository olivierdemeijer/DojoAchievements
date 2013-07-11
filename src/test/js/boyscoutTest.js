describe("Boyscout achievements", function() {
    it("not computed when violations density data is null", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=null;
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list.length).toEqual(0);
        expect(achieved.cleansheet).toBeFalsy();
    });
});
describe("Boyscout achievements", function() {
    it("not computed when violations density data is undefined", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=undefined;
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list.length).toEqual(0);
        expect(achieved.cleansheet).toBeFalsy();
    });
});

describe("Boyscout achievements", function() {
    it("gives BOYSCOUT level 1 when violations density progress 1 time ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(1);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_1);
    });
});
describe("Boyscout achievements", function() {
    it("gives BOYSCOUT level 2 when violations density progress 5 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(5);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_2);
    });
});
describe("Boyscout achievements", function() {
    it("gives BOYSCOUT level 3 when violations density progress 10 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(10);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_3);
    });
});
describe("Boyscout achievements", function() {
    it("gives BOYSCOUT level 4 when violations density progress 25 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(25);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_4);
    });
});
describe("Boyscout achievements", function() {
    it("gives CARELESS level 1 when violations density regress 1 time ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(1);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_1);
    });
});
describe("Boyscout achievements", function() {
    it("gives CARELESS level 2 when violations density regress 2 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(5);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_2);
    });
});
describe("Boyscout achievements", function() {
    it("gives CARELESS level 3 when violations density regress 5 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(10);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_3);
    });
});
describe("Boyscout achievements", function() {
    it("gives CARELESS level 4 when violations density regress 10 times ", function() {
        var facts ={};
        facts[VIOLATIONS_DENSITY]=floatTimesIncreased(25);
      	var achieved = boyscoutAchievements(facts);
        expect(achieved.list).toContain(BOYSCOUT_4);
    });
});