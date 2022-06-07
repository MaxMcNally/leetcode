/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(A) {
	A.sort(function(a, b) { return b - a; });    
	for(let i=0;i<A.length-2;i++){
		let sum = A[i+1] + A[i+2];
		if (sum > A[i]) return sum + A[i];
	 }
	return 0;  
}