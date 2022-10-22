const GroupA = ["qatar", "ecuador", "senegal", "netherlands"];
const GroupB = ["england", "iran", "usa", "wales"];
const GroupC = ["argentina", "saudi-arabia", "mexico", "poland"];
const GroupD = ["france", "australia", "denmark", "tunisia"];
const GroupE = ["spain", "costa-rica", "germany", "japan"];
const GroupF = ["belgium", "canada", "morocco", "croatia"];
const GroupG = ["brazil", "serbia", "switzerland", "cameroon"];
const GroupH = ["portugal", "ghana", "uruguay", "south-korea"];


/**
 *
 * @param {integer} stage - Enter the number of the stage from {1:"Group", 2:"Round if 16", 3:"Quarter-finals", 4:"Semi-finals", 5:"Third place play-off", 6:"Final"}
 * @param {string} firstTeam - Enter the name of the first team in lowercases letters and put hyphen between the words if the team name has more than one word.
 * @param {string} secondTeam - write it like "firstTeam"
 * @param {integer} day
 * @param {integer} month - Enter the number of the stage from {11: "Nov", 12:"Dec"}
 * @param {integer} time - Enter the time in GMT and 24 hours format
 * @param {integer} stadium - Enter the number of the stage from {1:"Lusail Iconic", 2:"Al Bayt", 3:"Al Janoub", 4:"Ahmad Bin Ali", 5:"Khalifa International", 6:"Education City", 7:"974", 8:"Al Thumama"}
 */
function addMatchToSchedule(stage, firstTeam, secondTeam, day, month, time, stadium) {
    const STAGES = { 1: "Group", 2: "Round if 16", 3: "Quarter-finals", 4: "Semi-finals", 5: "Third place play-off", 6: "Final" };
    const STADIUMS = { 1: "Lusail Iconic", 2: "Al Bayt", 3: "Al Janoub", 4: "Ahmad Bin Ali", 5: "Khalifa International", 6: "Education City", 7: "974", 8: "Al Thumama" };
    const MONTHS = { 11: "Nov", 12: "Dec" };

    // let
}