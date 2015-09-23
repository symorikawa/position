/**
 * determine the location of the given number in a sorted array
 * Created by Sy on 9/22/2015.
 */

function position(list, num) {
  for(i=0; i<list.length ;i++){

    if(list[i]>=num &&i<list.length ) {

      return i;
    }
  }
  return list.length;
}

//position() with target value 5 should return 2.
console.log(position([1, 3, 5, 6], 5));
//position([1, 3, 5, 6]) with target value 2 should return 1.
console.log(position([1, 3, 5, 6], 2));
//position([1, 3, 5, 6]) with target value 7 should return 4.
console.log(position([1, 3, 5, 6], 7));
//position([1, 3, 5, 6]) with target value 0 should return 0.
console.log(position([1, 3, 5, 6], 0));