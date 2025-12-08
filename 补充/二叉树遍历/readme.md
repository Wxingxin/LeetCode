二叉树常见的三种深度优先遍历方式是：

# **① 前序遍历（Preorder）**

顺序：
**根节点 → 左子树 → 右子树**

示例树：

```
      1
    /   \
   2     3
  / \
 4   5
```

前序遍历结果：
**1, 2, 4, 5, 3**

---

# **② 中序遍历（Inorder）**

顺序：
**左子树 → 根节点 → 右子树**

同样的示例树：

中序遍历结果：
**4, 2, 5, 1, 3**

> 对于 **二叉搜索树（BST）**，中序遍历结果是一个**从小到大排序的数组**。

---

# **③ 后序遍历（Postorder）**

顺序：
**左子树 → 右子树 → 根节点**

示例：

后序遍历结果：
**4, 5, 2, 3, 1**

---

# 📌 三种遍历对比总结表

| 遍历方式 | 顺序         | 访问根的时机 | 用途                     |
| -------- | ------------ | ------------ | ------------------------ |
| **前序** | 根 → 左 → 右 | 最早         | 用于序列化、复制树的结构 |
| **中序** | 左 → 根 → 右 | 中间         | **BST 中获得有序序列**   |
| **后序** | 左 → 右 → 根 | 最晚         | 适合删除树、后推导树结构 |

---

# 📦 JS 代码示例（递归）

二叉树节点定义：

```js
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}
```

---

## **前序遍历**：

```js
function preorder(root) {
  const res = [];
  function dfs(node) {
    if (!node) return;
    res.push(node.val); // ① 根
    dfs(node.left); // ② 左
    dfs(node.right); // ③ 右
  }
  dfs(root);
  return res;
}
```

---

## **中序遍历**：

```js
function inorder(root) {
  const res = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left); // ① 左
    res.push(node.val); // ② 根
    dfs(node.right); // ③ 右
  }
  dfs(root);
  return res;
}
```

---

## **后序遍历**：

```js
function postorder(root) {
  const res = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left); // ① 左
    dfs(node.right); // ② 右
    res.push(node.val); // ③ 根
  }
  dfs(root);
  return res;
}
```

---

# 📘 视觉理解三种遍历

假设树为：

```
      A
    /   \
   B     C
  / \
 D   E
```

对应结果：

| 遍历方式 | 顺序（根左右） | 输出      |
| -------- | -------------- | --------- |
| 前序     | 根 → 左 → 右   | A B D E C |
| 中序     | 左 → 根 → 右   | D B E A C |
| 后序     | 左 → 右 → 根   | D E B C A |

---

如果你需要，我还可以给你 **非递归写法（栈）**、**层序遍历（BFS）**、或者给你出一些练习题来加强理解。

#

二叉树的**层序遍历（Level Order Traversal）**
也叫 **广度优先搜索（BFS）**，是按层从上到下、从左到右访问节点。

---

# 📌 1. 层序遍历的核心思想（队列 BFS）

层序遍历使用 **队列（Queue）** 来实现：

1. 把根节点加入队列
2. 当队列不为空时：

   - 弹出队头节点（访问它）
   - 把它的左子节点加入队列（如果存在）
   - 把它的右子节点加入队列（如果存在）

因为队列是 **先进先出 (FIFO)**，所以保证一层一层访问。

---

# 📘 2. 示例图（帮助理解）

假设有这样一棵树：

```
      1
    /   \
   2     3
  / \     \
 4   5     6
```

层序遍历顺序为：

```
1 → 2 → 3 → 4 → 5 → 6
```

按层输出为：

```
[
  [1],
  [2, 3],
  [4, 5, 6]
]
```

---

# 📝 3. JS 代码（标准 BFS 层序遍历）

### 👉 输出平铺的一维数组（最常见）

```js
function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length) {
    const node = queue.shift(); // 出队
    res.push(node.val); // 访问节点

    if (node.left) queue.push(node.left); // 左子节点入队
    if (node.right) queue.push(node.right); // 右子节点入队
  }

  return res;
}
```

输出（示例树）：

```
[1, 2, 3, 4, 5, 6]
```

---

# 👉 4. 分层输出（常用于 LeetCode）

如果你想返回每一层分开：

```js
function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length) {
    const levelSize = queue.length; // 当前层的节点数
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level); // 保存一层
  }

  return res;
}
```

输出示例：

```
[
  [1],
  [2, 3],
  [4, 5, 6]
]
```

---

# 📚 5. 为什么 BFS 必须用队列？

因为 BFS 是按 "层级关系" 遍历，而队列保证：

- 最先进入队列的节点最先被访问
- 保证是 **一层一层访问**（父节点先于子节点）

---

# 🎯 6. 小总结

| Traversal           | 特点                             | 数据结构   |
| ------------------- | -------------------------------- | ---------- |
| DFS（前中后序）     | 深度优先、先走到底               | 栈（递归） |
| **BFS（层序遍历）** | **按层访问，从上到下、从左到右** | **队列**   |

---
