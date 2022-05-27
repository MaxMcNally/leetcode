/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;
        while(left <= right){
            const center = Math.floor((left + right)/2);
            if(isBadVersion(center)){
                right = center - 1;
            }
            else {
                left = center + 1
            }
        }
        return left
    };
};