// ===============================================
// RUN THIS USING NODE
// ===============================================
// ================================================
// TEST CASES
// ================================================

// procedure insertionSort( A : array of items )
//    int holePosition
//    int valueToInsert
	
//    for i = 1 to length(A) inclusive do:
	
//       /* select value to be inserted */
//       valueToInsert = A[i]
//       holePosition = i
      
//       /*locate hole position for the element to be inserted */
		
//       while holePosition > 0 and A[holePosition-1] > valueToInsert do:
//          A[holePosition] = A[holePosition-1]
//          holePosition = holePosition -1
//       end while
		
//       /* insert the number at hole position */
//       A[holePosition] = valueToInsert
      
//    end for
	
// end procedure
// Case 1 - Small Set of Numbers
var arraySize = 40;
// // Case 2 - Large set of Numbers
// var arraySize = 400000;
var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);
  array.push(randomNumber);
}
// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items,holePosition, valueToInsert){
	var len = items.length;
	var temp;
	for(var i=0; i < len; i++){
      valueToInsert = items[i];
      holePosition =i;
	

	while(holePosition > 0 && items[holePosition-1] > valueToInsert){
		items[holePosition] = items[holePosition-1];
		holePosition = holePosition-1;

	}
	items[holePosition] = valueToInsert;
 }
}
// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));