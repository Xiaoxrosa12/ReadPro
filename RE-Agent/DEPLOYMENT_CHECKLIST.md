# 部署清单

## 项目结构
```
RE-Agent/
├── index.html              # 入口页面（自动跳转到首页）
├── html/                   # HTML页面文件
│   ├── shouye.html         # 首页
│   ├── login.html          # 登录页
│   ├── home.html           # 主页
│   ├── details.html        # 详情页
│   ├── bookNormal.html     # 主要阅读页面
│   ├── reading.html        # 阅读页面
│   ├── overlay.html        # 遮罩页面
│   └── number.html         # 数据页面
├── css/                    # 样式文件
│   ├── shouye.css
│   ├── login.css
│   ├── home.css
│   ├── details.css
│   ├── styles.css
│   ├── reading.css
│   ├── overlay.css
│   └── number.css
├── js/                     # JavaScript文件
│   ├── shouye.js
│   ├── login.js
│   ├── home.js
│   ├── details.js
│   ├── script.js
│   ├── reading.js
│   ├── overlay.js
│   └── number.js
├── images/                 # 图片资源
│   ├── shouye-image.png
│   ├── Oliver Twist.jpeg
│   ├── Vector.svg
│   ├── notebook.svg
│   ├── processing.svg
│   ├── light.svg
│   ├── delete.png
│   └── An Ebook Reading/
└── passwords.json          # 配置文件
```

## 部署前检查清单

### ✅ 已完成的检查项目：
- [x] 所有图片路径已修正为 `../images/`
- [x] 所有CSS背景图片路径已修正为 `../images/`
- [x] 所有JS文件中的图片路径已修正为 `../images/`
- [x] 创建了入口页面 `index.html`
- [x] 文件结构标准化（html/, css/, js/, images/）
- [x] 删除了重复文件
- [x] 修复了CSS兼容性问题（line-clamp）
- [x] 所有功能保持完整

### 📋 部署步骤：
1. 将整个项目文件夹上传到服务器
2. 确保服务器支持静态文件服务
3. 访问根目录会自动跳转到首页
4. 所有相对路径都已正确配置

### 🔗 访问地址：
- 首页：`/html/shouye.html`
- 主页：`/html/home.html`
- 详情页：`/html/details.html`
- 阅读页：`/html/bookNormal.html`

### ⚠️ 注意事项：
- 文件名 `bookNormal.html` 已标准化，无空格问题
- 所有图片资源都在 `images/` 目录中
- 配置文件 `passwords.json` 包含敏感信息，请确保服务器安全
- Google Fonts CDN链接需要网络连接

## 测试建议：
1. 上传后先测试首页加载
2. 检查所有图片是否正常显示
3. 测试完整的用户流程
4. 验证所有交互功能正常工作
