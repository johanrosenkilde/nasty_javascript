/** Clamp `i` between `min` and `max`. */
function clamp(i, min, max) {
  if (i < min) return min;
  if (i > max) return max;
  return i;
}

function empty() { }

/** Return the thumbs up emoji 👍. */
function thumbsUp() {
  return '\u{1F44D}';
}

/**
 * Reverse-polish naming of a function
 */
addThree = function (x) {
    return x+3;
}

/** This is function whose purpose is mysterious */
mystery = function (x) {
    return "a";
}

module.exports.clamp = clamp;
module.exports.thumbsUp = thumbsUp;
module.exports.addThree = addThree;
module.exports.mystery = mystery;
