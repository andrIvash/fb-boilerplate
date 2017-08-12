'use strict';

let a = 2;
console.log(a);

/**
 * @function truncate
 *
 * @param {any} str
 * @param {any} maxlength
 * @returns
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let arr = str.split('');
    let count = arr.length / maxlength | 0;
    let result = '';

    for (let i=1; i<= count; i++) {
      let part = '';
      if(arr[i * maxlength] !== ' ') {
        part = arr.splice(0, i * maxlength + 1);
      } else {
        part = arr.splice(0, i * maxlength);
      }
      result += part.join('').trim() + '\n';
    }
    return result;
  }
  return str;
}

console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) );
console.log( truncate('Всем привет!', 20) );

module.exports = truncate;
