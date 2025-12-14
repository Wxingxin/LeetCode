var merge = function (intervals) {
  if (intervals.length === 0) return [];

  // 1. 按区间起点排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. 结果数组，先放一个
  const res = [];
  res.push(intervals[0]); // 先把第一个区间放进去

  // 3. 遍历之后的区间
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i]; // 当前区间
    const last = res[res.length - 1]; // 结果里最后一个区间

    // 如果当前区间的起点 <= last 的终点，说明有重叠，需要合并
    if (current[0] <= last[1]) {
      // 更新 last 的终点为两者中较大的那个
      last[1] = Math.max(last[1], current[1]);
      // 注意：这里直接改 last 就相当于改了 res 里的最后一个区间
    } else {
      // 否则没有重叠，直接加入结果数组
      res.push(current);
    }
  }

  return res;
};

intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const result = merge(intervals)

console.log(result)