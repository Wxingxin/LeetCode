下面给你 **JavaScript 的选择排序（Selection Sort）**，并用经典案例 `[64, 25, 12, 22, 11]` 演示完整执行过程。

代码包含详细注释，面试可直接使用。

---

# ✅ JavaScript 选择排序（Selection Sort）

```js
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 假设当前 i 位置是最小值
    let minIndex = i;

    // 在剩余 unsorted 部分寻找更小的值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 若找到更小的值，交换
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
```

---

# 🧪 测试（经典案例）

```js
console.log(selectionSort([64, 25, 12, 22, 11]));
```

**运行输出：**

```
[11, 12, 22, 25, 64]
```

---

# 📌 Selection Sort 执行步骤演示（经典案例）

数组：

```
[64, 25, 12, 22, 11]
```

---

## 🔹 第 1 轮（i = 0）

从 index 0~4 找最小值：

- 初始 min = 64
- 25 < 64 → min = 25
- 12 < 25 → min = 12
- 22 > 12
- 11 < 12 → min = 11

找到最小值的索引：4
交换 index 0 和 index 4：

```
[11, 25, 12, 22, 64]
```

---

## 🔹 第 2 轮（i = 1）

从 index 1~4 找最小值：

- 初始 min = 25
- 12 < 25 → min = 12
- 22 > 12
- 64 > 12

交换 index 1 和 index 2：

```
[11, 12, 25, 22, 64]
```

---

## 🔹 第 3 轮（i = 2）

从 index 2~4 找最小值：

- 初始 min = 25
- 22 < 25 → min = 22
- 64 > 22

交换 index 2 和 index 3：

```
[11, 12, 22, 25, 64]
```

---

## 🔹 第 4 轮（i = 3）

从 index 3~4 找最小值：

- 25 vs 64（不变）

无需交换：

```
[11, 12, 22, 25, 64]
```

排序完成 ✔

---

# ⭐ Selection Sort 特点总结

| 特性         | 描述                          |
| ------------ | ----------------------------- |
| 时间复杂度   | O(n²)                         |
| 空间复杂度   | O(1)（原地排序）              |
| 稳定性       | ❌ 不稳定（交换可能跨越）     |
| 是否原地排序 | ✔ 是                          |
| 优点         | 简单、交换次数少（最多 n 次） |
| 缺点         | 比较次数很多，性能一般        |

---

如果你需要，我还可以继续提供：

🔸 插入排序（Insertion Sort）JS + 案例
🔸 快速排序（Quick Sort）JS + 经典案例
🔸 归并排序（Merge Sort）JS + 图解
🔸 堆排序（Heap Sort）JS + 完整步骤

你想看哪一个？
