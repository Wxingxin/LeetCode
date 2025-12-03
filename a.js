var threeSum = function (nums) {
    nums.sort((a,b) => a -b)
    const n = nums.length
    const result = []

    for(let i = 0; i < n - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        if(nums[i] > 0) break

        let left = i + 1;
        let right = n - 1;

        while(left < right){
            
        }
    }

}