/* var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var max = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
    if (testArray[arrayPosition] > max) {
        max = testArray[arrayPosition];
    } else {
        max += 0;
    }
    
}

console.log("The max of " + testArray + " is: " + max); */

var table = "";
var rows = 2;
var cols = 3;
for(var r = 0; r < rows; r++) {
    table += '<tr>';
    for(var c = 0; c < cols; c++) {
        table += "<td>" + c + "<td>";
    }
    table += "<tr>";
}
document.write("<table" + table + "</table>")