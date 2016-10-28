


// stacking coins.  Each element is a total count of coins.  They stack like so:
/*
2:
#
#

5:
#
##
##

8:
#
##
##
###

3:
#
##

*/
// in [2, 5, 8, 3]
// out 1, 2, 3, 2

function arrangeCoins(coins) {
    var currentStackSize = 0;  // number to be returned
    var stackRowSize = 0;  // number of slots in current stack
    var currentCoin = 1;  // current coin
    // subroutine that prints number from current element
    function sub(n) {
        if (n === 0) {
            return 0;
        }
        for (var i = 1; i <= n; i++) {
            if (currentCoin >= stackRowSize + 1) {
                currentCoin = 1; // reset currentCoin
                currentStackSize += 1;
                stackRowSize += 1;
            } else {
                currentCoin += 1;
            }
        }
        stackRowSize = 0;
        currentCoin = 1;
        return currentStackSize;
    }
    
    // loop through coin array and call sub on each element
    for (var i = 0; i < coins.length; i++) {
        console.log(sub(coins[i]));
        currentStackSize = 0;
    }
}





//------------------

//Input:  abc

//Output: a, ab, abc, ac, b, bc, c

/*
 * Complete the function below.
 */
function buildSubsequences(s) {
    var resultsArray = [];
    var currentPerm = '';
    s = s.split('').sort();
   
    function sub(array) {
        //base case
        if (array.length === 0) {
            return;
        }
        resultsArray.push(array.join(''));
        
        sub()
    }
}





























//---------------------------------------------------------------------------------

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  cb => {
 *    setTimeout(() => {
 *      cb('one');
 *    }, 200);
 *  },
 *  cb => {
 *    setTimeout(() => {
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  results => {
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


function asyncMap(array, cb) {
  // make a results array [ ]

  // Loop through array

    // make a local var "i" and assign it to 'i'

    // call cb on each function in the array

      // once it returns, directly assign it to the correct element using "i"

  // return the results array

};

//---------------------------------------------------------------

/*
Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below; it has two fields:
A string, .
An integer, .
Given an array of  Player objects, write a comparator that sorts them in order of decreasing score; if 2 or more players have the same score, sort those players alphabetically by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method.
Input Format
Locked stub code in the Solution class handles the following input from stdin: 
The first line contains an integer, , denoting the number of players. 
Each of the  subsequent lines contains a player's respective  and .
Constraints
Two or more players can have the same name.
Player names consist of lowercase English alphabetic letters.
Sample Input
5
amy 100
david 100
heraldo 50
aakansha 75
aleksa 150
Sample Output
aleksa 150
amy 100
david 100
aakansha 75
heraldo 50
Explanation
As you can see, the players are first sorted by decreasing score and then sorted alphabetically by name.
*/

// player = {name: '', score: n}
// input [ {name: '', score: n}, {name: '', score: n}, {name: '', score: n}, {name: '', score: n} ];

// bubble sort checks score and name with series of ifs
// Feel free to add helper functions if needed.

var sortPalyers = function(arrayOfPlayers) {
  var i;
  var temp;

  // Returns true if player1 should sort before player2
  var compare2Players = function (player1, player2) {
    // first compare 


    return 
  };

  var bubbleSort = function(array) {
    //make a loop that goes through the array.
    for (i = 0; i < array.length; i++) {
      //compare i to i+
      //if i is bigger, save it to a temp position
      if (compare2Players(array[i], array[i+1])) {
      //then copy i+1 over i.
        temp = array[i];
      //now save i to i+1
        array[i] = array[i+1]
        array[i+1] = temp;
      }
    }
    return array;
  };
};



//---------------------------------------------------------------

/*
* A permutation is an arrangement of members of a set.
* https://en.wikipedia.org/wiki/Permutation
* 
* Implement stringPermutation so that it takes two string inputs, and outputs
* a boolean indicating if on is a permutation of the other. All letters must be included.
*
* For instance:
* stringPermutation('babel', 'lebab') // => true
* stringPermutation('what', 'wat') // false
*/
var stringPermutation = function(string1, string2) {
  return string1.split('').sort().join('') === string2.split('').sort().join('');
}

// console.log('stringPermutation: ', stringPermutation('babel', 'lebab'));





//---------------------------------------------------------------


/*
You are given the dimensions and location on the x-y coordinate of two rectangles. You need to return: out of the total area of both rectangles, what percentage do the rectangles overlap.
Ex:
The first rectangle starts (bottom left corner) at [1,2] on the x-y coordinate. It has width 3 and height 2.
The second rectangle starts (bottom left corner) at [3,3], has width 2 and height 4.
The overall area of both rectangles is 14 (2*3 + 2*4). They overlap just for 1 square, so the percentage overlap is 7.1% (1/14), which is the number you would return.
*/

function totalAreaOfRectangles(rectangle1, rectangle2) {
  var rec1Area = rectangle1[1] * rectangle1[2];
  var rec2Area = rectangle2[1] * rectangle2[2];
  var totalArea = rec1Area + rec2Area;
  var rec1coordinates;
  var rec2coordinates;
  var overlapCount = 0;

  // subroutine that makes an array of coordinates based on inputs
  function makeRectangleCoodinates(arrStart) {
    coordinates = [];
    //loop with length set to x & y
    for (var i = arrStart[0][0] - (arrStart[2] - 1); i <= arrStart[0][0]; i++) {
      //push tuples into coordinates
      for (var j = arrStart[0][1]; j <= arrStart[0][1] + (arrStart[1] - 1); j++) {
        coordinates.push(i.toString() + j);
      }
    }
    return coordinates;
  }

  rec1coordinates = makeRectangleCoodinates(rectangle1);
  rec2coordinates = makeRectangleCoodinates(rectangle2);

  //loop over smallest rectangle
  if (rec1coordinates.length <= rec2coordinates.length) {
    // Loop over  coordinares
    for (var i = 0; i < rec1coordinates.length; i++) {
      //increment count at each matching coordinate
      if (rec2coordinates.indexOf(rec1coordinates[i]) !== -1) {
        overlapCount++;
      }
    }
  } else {
    for (var i = 0; i < rec2coordinates.length; i++) {
      //increment count at each matching coordinate
      if (rec1coordinates.indexOf(rec2coordinates[i]) !== -1) {
        overlapCount++;
      }
    }
  }

  return overlapCount / totalArea;
}

var rectangle1 = [[1, 2], 3, 2];
var rectangle2 = [[3, 3], 2, 4];
// console.log('overlap rectangles: ', totalAreaOfRectangles(rectangle1, rectangle2));


//---------------------------------------------------------------


/**
  * Implement a method to perform basic string compression using the counts of repeated characters.
  * If the ‘compressed’ string would not become smaller than the original string,
  * your method should return the original string. 
  *
  * For example:
  * stringCompression('aabbbcddd') // => 'a2b3c1d3'
  * stringCompression('c') // => 'c'
  */


function stringCompression(string) {
  var compressedString = [];
  var count = 1;
  var tempIndex = null;
  
  if (string.length === 1) {
    return string;
  }

  // Loop through string
  for (var i = 0; i < string.length; i++) {
    // add current char to compressedString
    compressedString.push(string[i]);
    // if iterator is the same as iterater +1
    if (string[i] === string[i+1]) {
      // increment count
      count++;
      // them if temp index is counting
      if (tempIndex === null) {
        tempIndex = compressedString.length;
      }
    }
    // else if count is > 1
    else if (count > 1) {
      // replace repeated chars with number based on count
      compressedString.splice(tempIndex, compressedString.length, count);
      // reset count to one
      count = 1;
      tempIndex = null;
    }
    else {
      // replace repeated chars with number based on count
      compressedString.push(1);
    }
  }

  return compressedString.join('');
};

// console.log('test stringCompression1: ', stringCompression('aabbbcddd')) // => 'a2b3c1d3'
// console.log('test stringCompression1: ', stringCompression('c')) // => 'c'



//---------------------------------------------------------------


/* "Given a string, find the longest substring without repeating characters.

For example, for string “abccdefgh”, the longest substring is “cdefgh”. */

function longestRun(string) {
  var longestSubstring = '';
  var tempSubstring = '';

  var compareTempToLong = function () {
    if (tempSubstring.length > longestSubstring.length) {
    longestSubstring = tempSubstring;
    }
  };

  // loop through string
  for (var i = 0; i < string.length; i++) {
    // check if i+1 is NOT the same as i
    if (string[i] !== string[i+1]) {
      // concat i to tempSubstring
      tempSubstring += string[i];
    }
    //else
    else {
      // see if tempSubstring > longestSubstring
      compareTempToLong();
      // reset tempSubstring
      tempSubstring = '';
    }
  }
  // run comare to check the last run of the string
  compareTempToLong();

  return longestSubstring;
};

// console.log('longestRun: ', longestRun('abccdefgh'));



//---------------------------------------------------------------

/*
 * Write a function that, given the head (i.e., first node) of two sorted linked lists with numerical values, 
 * merges the linked lists in a sorted way. The function should return the head of the new linked list.
 * 
 * Example:
 * Inputs: 1 --> 7 --> 10 --> 11 & 0 --> 2 --> 5 --> 13
 * sortedListMerge(1, 0);
 * Output: 0 --> 1 --> 2 --> 5 --> 7 --> 10 --> 11 --> 13
 *
 */


var nodeA = {
  value: 1,
  next: {
    value: 7,
    next: {
      value: 10,
      next: {
        value: 11,
        next: null
      }
    }
  }
}

var nodeB = {
  value: 0,
  next: {
    value: 2,
    next: {
      value: 5,
      next: {
        value: 13,
        next: null
      }
    }
  }
}


function sortedListMerge(node1, node2) {
  // TODO: your code here

  // Make an head object
  var mergedList = {
    value: null,
    next: null
  };

  // Make a recusive function that adds nodes
  function addNode(node, val) {
    return node.next = {
      value: val,
      next: null
    }; 
  };

  // Asign lowest input node to mergedList and shift that node
  if (node1.value < node2.value) {
    mergedList.value = node1.value
    node1 = node1.next;
  } else {
    mergedList.value = node2.value
    node2 = node2.next;
  }


  // Recursive check of input nodes
  function mergeNodes(newList, n1, n2) {
    // Compare node values
    if (n1.value < n2.value) {
      // Call addNode on head object n1
      addNode(newList, n1.value);
      if (n1.next !== null) {
        mergeNodes(newList.next, n1.next, n2);
      } else {
        return newList.next.next = n2;
      }
    }

    else if (n1.value > n2.value) {
      // Call addNode on head object n2
      addNode(newList, n2.value);
      if (n2.next !== null) {
        mergeNodes(newList.next, n1, n2.next);
      } else {
        return newList.next.next = n1
      }
    }
  }
  mergeNodes(mergedList, node1, node2)

  return mergedList;
};

// console.log('Merge: ', sortedListMerge(nodeA, nodeB));


//---------------------------------------------------------------

var testSetTimeout = function(n) {
  var counter = 1;
  while (counter <= n) {
    // setTimeout(function() { 
      console.log('i', counter); 
      counter++;
    // }, 500); 
  };
};

// testSetTimeout(3);




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



var each = function(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var key in collection) {
      callback(collection[key]);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

var reduce = function (collection, callback, startValue) {
  each(collection, function(item) {
    startValue = callback(startValue, item);
  });
  return startValue;
};


///////////////////////////////////////////////////////////////////////////////////////////


var arr = [8, 5, 9];


var arrMin = function (collection) {

  return reduce(collection, function(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }, collection[0]);

};

// console.log(arrMin(arr));


///////////////////////////////////////////////////////////////////////////////////////////

var shuffle = function(array) {
  var result = [];
  var cache = {};
  _.each(array, function (val, index) {
    while (result[index] === undefined) {
      var element = array[Math.floor(Math.random() * ((array.length ) ))];
      if (cache[element] !== true) {
        result[index] = element;
        cache[element] = true;
      } 
    }
  });
  return result;
};











///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


/*

// Here are example use cases of `filter` and the closely related function `reject`. 
// Use these examples as guidance for how implementations of `filter` or `reject` should behave.


var each = function(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for (var key in collection) {
			callback(collection[key]);
		}
	}
}

var reduce = function (collection, callback, startValue) {
  each(collection, function(item) {
    startValue = callback(startValue, item);
  });
  return startValue;
};


// Create a function called `every` that takes a collection and a predicate and returns `true` if every element 
// in the collection, when passed to `predicate`, returns `true`. Use `reduce` in your implementation of `every`.

// Here's an example use of `every`. Use this example as guidance for how an implementation of `every` should
// behave.

var arr = [8, 8, 8];

var isEight = function (num) {
  return num === 8;
};

// var isEveryItemInArrEight = every(arr, isEight);
// isEveryItemInArrEight === true; // true

// Write the body of the function below:

// var every = function (collection, predicate) {

// };

var isEveryItemInArrEight = function (collection, predicate) {
  var checker = true;
  reduce(collection, function(val1, val2){
    if (predicate(val2)) {
      return true;
    } else {
      checker = false;
    }
  }); // or  -->   }, true);
  return checker;
};

// console.log(isEveryItemInArrEight(arr, isEight));





// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  var temp;
  for (var i = 0; i < array.length; i++) {
    var swaps = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        swaps++;
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};

var bubbleSort2 = function(array) {
  var temp;
  do {
    var swapped = false;
    for(i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped === true);
  return array;
};

// console.log(bubbleSort([2, 1, 3, 4, 76, 6, 5, 200, 199])); // [1, 2, 3]





var arr = [8, 5, 9];

// var arrMax = getMax(arr);
// arrMax === 9; // true

// Write the body of the function below

var getMax = function (collection) {
  var max;
  return reduce(collection, function(startValue, current) {
    if (max === undefined || max < current) return current;
    return max;
  });
};

console.log(getMax(arr));





//---------------------------------------------------------------

// Write a function called `allCombos` that takes as its only argument an array and returns an array of arrays, each containing 
// one possible permutation of the elements in the passed in array. The returned array should not contain any elements whose content 
// is identical, even if in a different order. The result array should contain the permutation containing no elements, as well as the 
// permutation containing all elements.

// For example:
// ['a', 'b', 'c'] ----> [[], ['a'], ['b'], ['c'], ['a', 'b'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]

// var allCombos = function (arr) {
  // YOUR CODE HERE
// };

// var allCombos = function (arr) {
//   var results = [[]];
//   //subroutine that can be run recursivly
//   function permute(arr, memo) {
//     var cur; 
//     var memo = memo || [];
//     //loop through the array of letters
//     for (var i = 0; i < arr.length; i++) {
//     	//assign current letter to cur
//       cur = arr.splice(i, 1);
//       //base case
//       if (arr.length === 0) {
//         results.push(memo.concat(cur));
//       }
//       permute(arr.slice(), memo.concat(cur));
//       arr.splice(i, 0, cur[0]);
//     }

//     return results;
//   };
//   return permute(arr);	
// };

// console.log(allCombos(['a', 'b', 'c']));
*/




















//---------------------------------------------------------------


/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total){

};

var coins = {
  1: 1,
  2: 2,
  3: 5,
  4: 10,
  5: 20,
  6: 50,
  7: 100,
  8: 200
};


var makeChange1 = function(total){
  var counter = 0;
  var til = 0;
  var coin = 1;
// debugger
  //add coins starting with 1's
  for (; coin < 9; coin++) {
    til+=coins[coin];
    for (var i = 1; til <= total; i++) {
      til += coins[1];
      if (til === total) {
        counter++;
      }
    }

    coin++;
  }

  return counter;
};


//input = int of p,   output = int of ways to make change
// console.log(makeChange1(2))










//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

// Find a string supset inside a longer string.  Must be linear time complexity

// Below solution finds string, but is not truely linear.  

function gene_search(genome, search) {
  var count = 0;
  var state = '';

  // Loop through genome
  for (var i = 0; i < genome.length; i++) {
    //check if letter matches current count index of search
    if (genome[i] === search[count]) {
      //concat state and increment count
      state = state + genome[i];
      count++
      //if count = seach's length, return true
      if (state === search) {
        return true;
      }
    // if current 'i' does not match and we had a running count, reset
    } else if (count > 0) {
      // this skips seach over any false leads and keeps search linear
      // subtract state's length + 1 (to reset to next char)
      i = i - state.length + 1;
      count = 0;
      state = '';
    }
  }
  return false;
};

// var testTrue = gene_search("GGCACACATG", "CACAT") // => True
// var testFalse = gene_search("CAAAT", "CAT") // => False
// console.log('testTrue: ', testTrue);
// console.log('testFalse: ', testFalse);

//---------------------------------------------------------------

function gene_search(genome, search) {
  var count = 0;
  var state = '';

  // returns an int which will be used to change loop's 'i'
  function state_machine() {
    return state.length;
  };

  // Loop through genome
  for (var i = 0; i < genome.length; i++) {
    //check if letter matches current count index of search
    if (genome[i] === search[count]) {
      //concat state and increment count
      state = state + genome[i];
      count++
      //if count = seach's length, return true
      if (state === search) {
        return true;
      }
    // if current 'i' does not match and we had a running count, reset
    } else if (count > 0) {
      // this skips seach over any false leads and keeps search linear
      // implement state machine
      i = i - state_machine();
      count = 0;
      state = '';
    }
  }
  return false;
};

// var testTrue = gene_search("GGCACACATG", "CACAT") // => True
// var testFalse = gene_search("CAAAT", "CAT") // => False
// console.log('testTrue: ', testTrue);
// console.log('testFalse: ', testFalse);