var testArray = [0, 1, 1, "1", 3, "311"];

for (var arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPosition++) {
    var currentElement = testArray[arrayPosition];
    var nextElement = testArray[arrayPosition + 1];
    
    console.log(arrayPosition + "/" + (arrayPosition + 1) + ":" + "Testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));
    
    console.log(arrayPosition + "/" + (arrayPosition + 1) + ":" + "Testing " + currentElement + " and " + nextElement + "(less than): " + (currentElement < nextElement));
    
    if (currentElement == nextElement) {
        console.log(arrayPosition + "/" + (arrayPosition + 1) + ":" + "Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
        
        if (currentElement !== nextElement) {
            console.log("because " + currentElement + " is " + typeof(currentElement));
            console.log("and because " + nextElement + " is " + typeof(nextElement));
        }
    } else {
        console.log(arrayPosition + "/" + (arrayPosition + 1) + ":" + "Testing " + currentElement + " and " + nextElement + "(equal to):" + (currentElement == nextElement));
    }
    
}

