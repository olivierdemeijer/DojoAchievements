describe("ViolationHunter achievements", function() {
    it("not computed when weighted violations data is null", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=null;
      	var achieved = violationHunterAchievements(facts);
        expect(achieved.list.length).toEqual(0);
        expect(achieved.cleansheet).toBeFalsy();
    });
});
describe("ViolationHunter achievements", function() {
    it("not computed when weighted violations data is undefined", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=undefined;
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list.length).toEqual(0);
        expect(achieved.cleansheet).toBeFalsy();
    });
});
function intTimesIncreased (times){
  var result = [];
  for (var i=0;i<=times;i++){
    result.push(i);
  }
  return result;
}

function intTimesReduced (times){
	var result = [];
	for (var i=times;i>=0;i--){
		result.push(i);
	}
	return result;
}
describe("ViolationHunter achievements", function() {
    it("gives VIOLATION_HUNTER level 1 when weighted violations reduced 2 times in a row", function() {
        var facts ={};
      	facts[WEIGHTED_VIOLATIONS]=intTimesReduced(2);
      	var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(VIOLATION_HUNTER_1);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives VIOLATION_HUNTER level 2 when weighted violations reduced 5 times in a row", function() {
        var facts ={};
      	facts[WEIGHTED_VIOLATIONS]=intTimesReduced(5);
      	var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(VIOLATION_HUNTER_2);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives VIOLATION_HUNTER level 3 when weighted violations reduced 10 times in a row", function() {
        var facts ={};
      	facts[WEIGHTED_VIOLATIONS]=intTimesReduced(10);
      	var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(VIOLATION_HUNTER_3);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives VIOLATION_HUNTER level 4 when weighted violations reduced 25 times in a row", function() {
        var facts ={};
      	facts[WEIGHTED_VIOLATIONS]=intTimesReduced(25);
      	var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(VIOLATION_HUNTER_4);
    });
});

describe("ViolationHunter achievements", function() {
    it("reset VIOLATION_HUNTER sequence when a no decrease occurs even once", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[2,1,1,0];;
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).not.toContain(VIOLATION_HUNTER_1);
    });
});
describe("ViolationHunter achievements", function() {
    it("get cleansheet when weighted violations never increase", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[0,0,0];
        var achieved = violationHunterAchievements(facts);
        expect(achieved.cleansheet).toBeTruthy();
    });
});
describe("ViolationHunter achievements", function() {
    it("miss cleansheet when weighted violations increased at least 1 time ", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[0,0,1,0];
        var achieved = violationHunterAchievements(facts);
        expect(achieved.cleansheet).toBeFalsy();
    });
});


describe("ViolationHunter achievements", function() {
    it("gives CLUMSY_HUNTER level 1 when weighted violations increased 1 time", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=intTimesIncreased(1);
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(CLUMSY_HUNTER_1);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives CLUMSY_HUNTER level 2 when weighted violations increased 2 times in row", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=intTimesIncreased(2);
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(CLUMSY_HUNTER_2);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives CLUMSY_HUNTER level 3 when weighted violations increased 5 times in row", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=intTimesIncreased(5);
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(CLUMSY_HUNTER_3);
    });
});
describe("ViolationHunter achievements", function() {
    it("gives CLUMSY_HUNTER level 4 when weighted violations increased 10 times in row", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=intTimesIncreased(10);
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).toContain(CLUMSY_HUNTER_4);
    });
});
describe("ViolationHunter achievements", function() {
    it("reset CLUMSY_HUNTER sequence when a no increase occurs even once", function() {
        var facts ={};
        facts[WEIGHTED_VIOLATIONS]=[0,1,1,2];;
        var achieved = violationHunterAchievements(facts);
        expect(achieved.list).not.toContain(VIOLATION_HUNTER_2);
    });
});