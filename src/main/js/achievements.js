function Achieved (){
    this.list=[];
    this.cleansheet=false;
}

var VIOLATION_HUNTER_1 = 'VIOLATION_HUNTER_1';
var VIOLATION_HUNTER_2 = 'VIOLATION_HUNTER_2';
var VIOLATION_HUNTER_3 = 'VIOLATION_HUNTER_3';
var VIOLATION_HUNTER_4 = 'VIOLATION_HUNTER_4';
var VIOLATION_HUNTER_MAP = [[2,VIOLATION_HUNTER_1],[5,VIOLATION_HUNTER_2],[10,VIOLATION_HUNTER_3],[25,VIOLATION_HUNTER_4]];
var CLUMSY_HUNTER_1 = 'CLUMSY_HUNTER_1';
var CLUMSY_HUNTER_2 = 'CLUMSY_HUNTER_2';
var CLUMSY_HUNTER_3 = 'CLUMSY_HUNTER_3';
var CLUMSY_HUNTER_4 = 'CLUMSY_HUNTER_4';
var CLUMSY_HUNTER_MAP = [[1,CLUMSY_HUNTER_1], [2,CLUMSY_HUNTER_2], [5,CLUMSY_HUNTER_3], [10,CLUMSY_HUNTER_4]];
function violationHunterAchievements(facts){
    return facts[WEIGHTED_VIOLATIONS]===undefined || facts[WEIGHTED_VIOLATIONS]===null
        ? new Achieved()  
        : achieveConstantReduction(facts[WEIGHTED_VIOLATIONS],VIOLATION_HUNTER_MAP,CLUMSY_HUNTER_MAP);
}

function achieveConstantReduction(history, achievementsMap, misAchievementsMap){
    achievementsMap.push(-1,'');
    var result = new Achieved();
    var targetAchievement = 0;
    var targetMisAchievement = 0;
    var timesReduced = 0;
    var timesIncreased = 0;
    var clean = true;

    function decreasing(){
            timesIncreased=0;   
            if(++timesReduced === achievementsMap[targetAchievement][0]) {
                result.list.push(achievementsMap[targetAchievement++][1]);
            }
    }
    function increasing(){
            timesReduced=0;
            clean=false;
            if(++timesIncreased === misAchievementsMap[targetMisAchievement][0]) {
                result.list.push(misAchievementsMap[targetMisAchievement++][1]);
            }
    }
    for (var current=0;current<history.length;current++){
        if (history[current]>history[current+1]){
            decreasing();
        }
        else if (history[current]<history[current+1]){
            increasing();
        }
        else {
            timesReduced=0;
            timesIncreased=0;   
        }
    }
    result.cleansheet = clean;
    return result;
}

