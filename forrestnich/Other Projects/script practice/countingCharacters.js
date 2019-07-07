/* Counting Characters 1
function countingCharacters(stringToCount) {
    console.log (stringToCount + " has " + stringToCount.length + " characters");
}

countingCharacters("cake");

var portalString = 'The cake is a lie';
countingCharacters(portalString);
*/

/* Counting Characters 2
function countingCharacters2(stringToCount, characterToFind) {
    var characterCount = 0;
    for (var characterPosition = 0;
            characterPosition < stringToCount.length;
            characterPosition++) {
        if (stringToCount[characterPosition] == characterToFind) {
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appeared: " + characterCount);
}
*/

countingCharacters3('xxaxxxbxx', 'xx');

function countingCharacters3(stringToCount, characterToFind){
    var characterCount = 0;     
    var numChars = characterToFind.length;  
    var lastCharacterPosition = stringToCount.length - numChars;      
    for (var characterPosition = 0; characterPosition <= lastCharacterPosition; characterPosition++){     
        var current = stringToCount.substring(characterPosition, characterPosition + numChars);
    if (current == characterToFind){                         
            characterCount++;         
        }     
    }
    
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}


