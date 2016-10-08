
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
  // var countAsString;

  // Loop through string
  for (var i = 0; i < string.length; i++) {
    // add current char to compressedString
    compressedString.push(string[i]);
    // if iterator is the same as iterater +1
    if (string[i] === string[i+1]) {
      // increment count
      count++;
    }
    // else if count is > 1
    else if (count > 1) {
      // replace repeated chars with number based on count
      compressedString.splice(i - count, count, count-1);
      // reset count to one
      count = 1;
    }
  }

  return compressedString.join('');
};

console.log('test stringCompression1: ', stringCompression('aabbbcddd')) // => 'a2b3c1d3'
console.log('test stringCompression1: ', stringCompression('c')) // => 'c'



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