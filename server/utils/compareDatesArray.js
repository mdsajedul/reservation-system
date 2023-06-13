const areArraysDisjoint = (array1, array2) => {
    const set = new Set(array1);
    for (const item of array2) {
      if (set.has(item)) {
        return false; // Found a date match, arrays are not disjoint
      }
    }
    return true; // No date match found, arrays are disjoint
  };

const compareDateArrays = (dates1, dates2) => {
    if (dates1.length === 0 || dates2.length === 0) {
      return true; // Empty arrays are always disjoint
    }
  
    if (dates1.length <= dates2.length) {
      return areArraysDisjoint(dates1, dates2);
    } else {
      return areArraysDisjoint(dates2, dates1);
    }
  };

  module.exports = compareDateArrays