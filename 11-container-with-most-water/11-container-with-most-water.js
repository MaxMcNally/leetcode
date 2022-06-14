/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2) return 0
    let p1 = 0;
    let p2 = height.length - 1;
    let maxVolume = 0;
    while(p1 < p2){
        let length = p2 - p1;
        let min = Math.min(height[p1], height[p2]);
        let volume = min * length;
        maxVolume = Math.max(maxVolume, volume);
        if(min === height[p1]){
            p1++
        }
        else {
            p2--
        }
    }
    return maxVolume
};