当然可以！下面我用 **纯 JavaScript**（ES6+）来完整、详细地讲解 **LeetCode 239. 滑动窗口最大值**，结合一个真实例子，手把手带你看「单调队列」是怎么一步步工作的。

---

### 题目回顾
输入：`nums = [1,3,-1,-3,5,3,6,7]`, `k = 3`  
输出：`[3,3,5,5,6,7]`

我们要找每个长度为 3 的窗口的最大值。

---

### 核心思想：单调递减队列（Monotonic Decreasing Queue）

我们维护一个队列，里面存的是 **数组下标**，并且满足：

```js
nums[deque[0]] > nums[deque[1]] > nums[deque[2]] > ...
```

队头永远是当前窗口的最大值！

---

### 完整 JavaScript 代码（带详细注释）

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if (n === 0 || k === 0) return [];
    
    const deque = [];     // 存下标，单调递减队列
    const result = [];    // 存放答案

    for (let i = 0; i < n; i++) {
        // 步骤1：移除已经滑出窗口的元素（队头太老了）
        if (deque.length > 0 && deque[0] === i - k) {
            deque.shift();  // 移除队头
        }

        // 步骤2：移除队尾所有比当前元素小的（这些再也当不了最大了）
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();    // 扔掉没用的
        }

        // 步骤3：把当前元素的下标加入队列
        deque.push(i);

        // 步骤4：当窗口形成了（i >= k-1），队头就是最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
```

---


最终结果：`[3,3,5,5,6,7]` 完美正确！

---

### 为什么这么牛？关键点解释

1. **为什么存下标而不是值？**  
   因为要判断元素是否还在窗口内，只能通过下标算 `i - k`

2. **为什么要把比当前元素小的都删掉？**  
   举例：来了一个 5，前面有 3、-1、-3  
   → 只要 5 还在窗口里，这三个永远不可能是最大值 → 直接扔掉，永不后悔！

3. **为什么队头就是最大值？**  
   因为我们一直维护的是「从大到小」的顺序，队头最大！

---

### 常见变式（面试必考！）

```js
// 1. 求滑动窗口最小值 → 把 < 改成 > 就行了（单调递增队列）
while (deque.length && nums[deque[deque.length-1]] > nums[i]) {
    deque.pop();
}

// 2. 限制连续子数组的最大长度不超过 k
// LeetCode 1438 用这个思路

// 3. 设计一个支持 O(1) 查询窗口最大值的结构
// → 直接用这个单调队列封装成类
```

---

### 完整可运行测试代码

```js
function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const deque = [];
    const result = [];

    for (let i = 0; i < n; i++) {
        // 移除滑出窗口的
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }
        // 移除比当前小的
        while (deque.length && nums[deque[deque.length-1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

// 测试
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// 输出: [3, 3, 5, 5, 6, 7]

console.log(maxSlidingWindow([1, -1], 1));
// 输出: [1, -1]

console.log(maxSlidingWindow([9,11], 2));
// 输出: [11]
```

---

### 总结：一句话记住模板

```js
for (let i = 0; i < nums.length; i++) {
    // 1. 移除滑出窗口的
    if (deque[0] === i - k) deque.shift();
    
    // 2. 移除比当前元素小的（最大值问题）
    while (deque.length && nums[deque[deque.length-1]] < nums[i]) deque.pop();
    
    // 3. 加入当前元素
    deque.push(i);
    
    // 4. 窗口形成了，记录答案
    if (i >= k - 1) result.push(nums[deque[0]]);
}
```

**这个模板背下来，滑动窗口极值问题 100% 秒杀！**

需要我再给你出 3 道同类型题（含解析）练手吗？或者你想看「滑动窗口最小值」怎么改？随时说！