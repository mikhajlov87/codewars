'use strict';
/**
 * @author S.Mikhailov
 * @param s {string}
 * @return {string}
 **/
function accum(s) {
    var len = s.length,
        FIRST_LETTER = 0,
        LAST_LETTER,
        i, letter, result = '';

    for (i = 0; i < len; i++) {
        letter = s[i];
        result += createStr(letter, i);
    }

    function createStr (letter, i) {
        var result, j;

        if (i === 0) {
            return letter.toUpperCase() + '-';
        } else {
            result = letter.toUpperCase();
            for (j = 0; j < i; j++) {
                result += letter.toLowerCase();
            }
        }
        return result + '-'
    }

    LAST_LETTER = result.length - 1;
    return result.slice(FIRST_LETTER, LAST_LETTER);
}