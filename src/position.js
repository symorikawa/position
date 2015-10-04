/**
 * determine the location of the given number in a sorted array
 * Created by Sy on 9/22/2015.
 */
/* exported position */

/**
 * takes a list and a number and returns the index of the place to insert the number in the list
 * @param list the list of numbers sorted in increasing order
 * @param num the number to insert
 * @returns the index of the array where num should be put
 */
function position(list, num) {
  for(var i=0; i<list.length ;i++){

    if(list[i]>=num &&i<list.length ) {

      return i;
    }
  }
  return list.length;
}

