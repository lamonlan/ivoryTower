## 风格指南

遵循 [vue 官网的风格指南](https://v3.cn.vuejs.org/style-guide/#%E8%A7%84%E5%88%99%E7%B1%BB%E5%88%AB)

## CSS 指南

### css 统一使用 scoped、遵守 BEM 命名规范。

BEM 命名规范的示例如下：

```css
.block {
}

.block__element {
}

.block--modifier {
}
```

-   .block 代表了更高级别的抽象或组件。
-   .block\_\_element 代表 .block 的后代，用于形成一个完整的 .block 的整体。
-   .block--modifier 代表 .block 的不同状态或不同版本。

## Commit 指南

Commit messages 请遵循[conventional-changelog 标准](https://www.conventionalcommits.org/en/v1.0.0/)：

```bash
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

### Commit 类型

以下是 commit 类型列表:

-   feat: 新特性或功能
-   fix: 缺陷修复
-   docs: 文档更新
-   style: 代码风格或者组件样式更新
-   refactor: 代码重构，不引入新功能和缺陷修复
-   perf: 性能优化
-   revert: 回退
