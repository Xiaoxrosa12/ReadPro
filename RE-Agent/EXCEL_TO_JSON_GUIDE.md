# Excel转JSON密码数据库指南

## ⚠️ 重要提醒
**直接将Excel文件后缀改为.json是无效的！** Excel文件是二进制格式，需要正确转换。

## 🔧 正确的转换方法

### 方法1：手动转换（推荐）
1. 打开Excel文件 `passwords.xlsx`
2. 查看数据内容，格式应该是：
   ```
   Number  | Password
   12345   | password123
   67890   | secret456
   ```
3. 手动复制数据到 `passwords.json` 文件：
   ```json
   {
       "12345": "password123",
       "67890": "secret456",
       "11111": "test789"
   }
   ```

### 方法2：使用在线转换工具
1. 访问 https://www.convertcsv.com/excel-to-json.htm
2. 上传您的 `passwords.xlsx` 文件
3. 选择转换选项
4. 下载生成的JSON文件
5. 将内容复制到 `passwords.json` 文件中

### 方法3：使用Python脚本（高级用户）
```python
import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('passwords.xlsx')

# 转换为字典格式
password_dict = {}
for index, row in df.iterrows():
    number = str(row['Number'])  # 假设列名为Number
    password = str(row['Password'])  # 假设列名为Password
    password_dict[number] = password

# 保存为JSON文件
with open('passwords.json', 'w', encoding='utf-8') as f:
    json.dump(password_dict, f, indent=4, ensure_ascii=False)

print("转换完成！")
```

## 📋 JSON文件格式要求

### 正确的格式：
```json
{
    "用户编号": "对应密码",
    "12345": "password123",
    "67890": "secret456"
}
```

### 错误的格式：
```json
// ❌ 不要这样写
{
    "用户编号": "对应密码",
    "12345": "password123",
    "67890": "secret456",  // 最后一项不要逗号
}

// ❌ 不要这样写
{
    '12345': 'password123',  // 使用双引号，不是单引号
    "67890": "secret456"
}
```

## 🚀 快速操作步骤

1. **打开Excel文件**：查看密码数据
2. **创建JSON文件**：按照正确格式编写
3. **测试验证**：在number页面输入账号密码测试
4. **保存文件**：确保文件名为 `passwords.json`

## 🔍 验证方法

转换完成后，您可以：
1. 在浏览器中打开 `passwords.json` 文件
2. 应该看到格式化的JSON数据
3. 在number页面测试登录功能

## 📞 需要帮助？

如果您需要我帮助转换特定的数据，请：
1. 告诉我Excel文件中的列名（如Number、Password等）
2. 提供几个示例数据行
3. 我会帮您生成正确的JSON格式

