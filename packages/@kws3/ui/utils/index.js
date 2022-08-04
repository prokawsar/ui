/**
 * Truncate a string.
 * @param {string} [str=""] - String to truncate, Default: `""`
 * @param {number} [len=""] - The number of characters to extract, Default: `""`
 */
export function truncate(str, len) {
  return str && str.length >= len + 3 ? str.substr(0, len) + "..." : str;
}

/**
 * Insert line breaks where newlines (\n) occur in the string.
 * @param {string} [str=""] - String to be checked, Default: `""`
 */
export function nl2br(input) {
  if (!input) {
    return "";
  }
  let html = (input + ``).replace(/\n/g, "<br/>");
  return html;
}

/**
 * Clone an Object.
 * @param {object} [obj={}] - Object to be cloned, Default: `{}`
 */
export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Request an animation before the next repaint.
 * @param {function} [callback=()] - callback function
 */
export var rAF =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * `threshold` milliseconds.
 * @param {function} [fn=()] - The function that you want to execute after the debounce time
 * @param {number} [threshold=100] - The amount of time to wait, Default: `100`
 * @param {boolean} [isAsap=false] - flag to debounce early, Default: `false`
 *
 */
export function debounce(fn, threshold, isAsap) {
  var timeout, result;
  function debounced() {
    var args = arguments,
      context = this;
    function delayed() {
      if (!isAsap) {
        result = fn.apply(context, args);
      }
      timeout = null;
    }
    if (timeout) {
      clearTimeout(timeout);
    } else if (isAsap) {
      result = fn.apply(context, args);
    }
    timeout = setTimeout(delayed, threshold || 100);
    return result;
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return debounced;
}

/**
 * Capitalise First letter of string.
 * @param {string} [string=""] - A string whose first letter is to be capitalised, Default: `""`
 */
export function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

/**
 * Detect whether a user has pressed Enter.
 * @param {object} [e=[]] - Event object., Default: `[]`
 */
export function isEnterKey(e) {
  return e.keyCode && e.keyCode === 13;
}

/**
 * Detect whether a user has pressed Escape key.
 * @param {object} [e=[]] - Event object., Default: `[]`
 */
export function isEscKey(e) {
  return e.keyCode && e.keyCode === 27;
}

/**
 * Returns Date Object.
 * Makes mysql dates work in safari
 * @param {string} [strDate=""] - Date String., Default: `""`
 */
export function createDate(strDate) {
  // eslint-disable-next-line @kws3/svelte3/no-date-string-arg
  return strDate ? new Date(strDate.replace(/-/g, "/")) : null;
}

/**
 * Returns currency format.
 * @param {number} [n=''] - Number., Default: `""`
 */
export function currency(n) {
  var nn = Number(n);
  return (isNaN(nn) ? 0 : nn).toFixed(2);
}

/**
 * Converts date to ordinal.
 * @param {number} [n=''] - Number., Default: `""`
 */
export function DateToOrdinal(n) {
  return (
    n +
    (n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : "")
  );
}

/**
 * Returns random integer.
 * @param {number} [min] - Minimum Number.
 * @param {number} [max] - Maximum Number.
 */
export function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns random percentage.
 * @param {number} [min=1] - Minimum Number, Default: `1`
 * @param {number} [max=100] - Maximum Number, Default: `100`
 */
export function randomPercent(min = 1, max = 100) {
  return randomIntegerFromInterval(min, max) + "%";
}
