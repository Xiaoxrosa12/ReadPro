# 项目结构说明

## 📁 目录结构

```
RE-Agent/
├── css/                    # CSS样式文件
│   ├── styles.css         # 主要样式文件
│   ├── details.css        # 详情页样式
│   ├── home.css          # 首页样式
│   ├── login.css         # 登录页样式
│   ├── number.css        # 数字页样式
│   ├── overlay.css       # 遮罩层样式
│   ├── reading.css       # 阅读页样式
│   └── shouye.css        # 首页样式
├── js/                    # JavaScript文件
│   ├── script.js         # 主要脚本文件
│   ├── bookNormal.js     # 书籍阅读页脚本
│   ├── details.js        # 详情页脚本
│   ├── home.js          # 首页脚本
│   ├── login.js         # 登录页脚本
│   ├── number.js        # 数字页脚本
│   ├── overlay.js       # 遮罩层脚本
│   ├── reading.js       # 阅读页脚本
│   └── shouye.js        # 首页脚本
├── images/               # 图片资源
│   ├── An Ebook Reading/ # 电子书阅读相关图片
│   ├── delete.png       # 删除图标
│   ├── light.svg        # 亮度图标
│   ├── notebook.svg     # 笔记本图标
│   ├── Oliver Twist.jpeg # 书籍封面
│   ├── processing.svg   # 处理图标
│   ├── shouye-image.png # 首页图片
│   ├── Vector-1.svg     # 矢量图标1
│   └── Vector.svg       # 矢量图标
├── html/                 # HTML文件
│   ├── bookNormal-clean.html  # 干净的书籍阅读页
│   ├── details.html     # 详情页
│   ├── home.html        # 首页
│   ├── login.html       # 登录页
│   ├── number.html      # 数字页
│   ├── overlay.html     # 遮罩层页
│   ├── reading.html     # 阅读页
│   └── shouye.html      # 首页
└── 其他文件...
```

## 🚀 部署说明

### 1. 服务器部署
将所有文件上传到Web服务器的根目录或子目录中。

### 2. 路径配置
- HTML文件中的CSS引用：`../css/styles.css`
- HTML文件中的JS引用：`../js/script.js`
- HTML文件中的图片引用：`../images/图片名`

### 3. 文件说明

#### CSS文件
- `styles.css`: 包含所有页面的主要样式
- 其他CSS文件: 特定页面的样式文件

#### JavaScript文件
- `script.js`: 包含所有页面的主要功能脚本
- 其他JS文件: 特定页面的功能脚本

#### 图片文件
- 所有图片资源都集中在`images/`文件夹中
- 支持PNG、JPG、SVG等格式

#### HTML文件
- 所有HTML文件都使用外部CSS和JS引用
- 图片路径已调整为相对路径

## 🔧 开发说明

### 修改样式
1. 编辑对应的CSS文件
2. 刷新浏览器查看效果

### 修改功能
1. 编辑对应的JavaScript文件
2. 刷新浏览器测试功能

### 添加图片
1. 将图片放入`images/`文件夹
2. 在HTML中引用：`../images/图片名`

## 📱 功能特性

- 响应式设计，适配移动端
- 电子书阅读功能
- 笔记和高亮功能
- 阅读进度跟踪
- 用户行为统计
- 数据导出功能

## 🌐 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 📝 注意事项

1. 确保所有文件路径正确
2. 图片文件大小控制在合理范围内
3. 定期备份重要数据
4. 测试不同浏览器的兼容性
