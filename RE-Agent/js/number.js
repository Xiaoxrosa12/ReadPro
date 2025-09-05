
        // 从JSON文件加载密码数据库
        let passwordDatabase = {};
        
        // 页面加载时从JSON文件获取密码数据
        async function loadPasswordDatabase() {
            try {
                console.log('开始加载密码数据库...');
                
                // 首先尝试从文件加载
                try {
                    const response = await fetch('./passwords.json');
                    console.log('Fetch响应状态:', response.status, response.ok);
                    
                    if (response.ok) {
                        const data = await response.json();
                        console.log('JSON解析结果:', data);
                        
                        passwordDatabase = data;
                        console.log('Password database loaded successfully:', passwordDatabase);
                        console.log('Available numbers:', Object.keys(passwordDatabase));
                        console.log('数据库大小:', Object.keys(passwordDatabase).length);
                        
                        // 验证特定数据
                        console.log('编号1的密码:', passwordDatabase['1']);
                        console.log('编号2的密码:', passwordDatabase['2']);
                        
                        return true;
                    }
                } catch (fetchError) {
                    console.log('Fetch失败，使用内嵌数据:', fetchError.message);
                }
                
                // 如果fetch失败，使用内嵌的密码数据库
                passwordDatabase = {
                    "1": "84729",
                    "2": "15634",
                    "3": "39271",
                    "4": "64815",
                    "5": "93742",
                    "6": "28476",
                    "7": "51389",
                    "8": "76124",
                    "9": "49583",
                    "10": "82367",
                    "11": "14759",
                    "12": "63528",
                    "13": "91847",
                    "14": "25634",
                    "15": "78491",
                    "16": "34167",
                    "17": "59284",
                    "18": "87613",
                    "19": "42975",
                    "20": "16384",
                    "21": "75829",
                    "22": "39467",
                    "23": "68145",
                    "24": "52793",
                    "25": "94618",
                    "26": "37562",
                    "27": "81439",
                    "28": "56247",
                    "29": "19385",
                    "30": "74816",
                    "31": "32594",
                    "32": "67941",
                    "33": "18457",
                    "34": "93625",
                    "35": "47183",
                    "36": "25964",
                    "37": "68317",
                    "38": "41579",
                    "39": "76234",
                    "40": "59841",
                    "41": "23467",
                    "42": "87159",
                    "43": "45623",
                    "44": "91738",
                    "45": "36485",
                    "46": "72914",
                    "47": "58367",
                    "48": "14296"
                };
                
                console.log('使用内嵌密码数据库:', passwordDatabase);
                console.log('数据库大小:', Object.keys(passwordDatabase).length);
                console.log('编号1的密码:', passwordDatabase['1']);
                console.log('编号2的密码:', passwordDatabase['2']);
                
                return true;
                
            } catch (error) {
                console.error('Error loading password database:', error);
                // 如果加载失败，使用默认密码数据库
                passwordDatabase = {
                    '12345': 'password123',
                    '67890': 'secret456',
                    '11111': 'test789',
                    '22222': 'demo000',
                    '33333': 'admin123'
                };
                console.log('Using fallback password database:', passwordDatabase);
                return false;
            }
        }

        let isConsentChecked = false;

        function goBack() {
            // 返回Login页面
            window.location.href = 'login.html';
        }

        function toggleConsent() {
            const checkbox = document.getElementById('consentCheckbox');
            isConsentChecked = !isConsentChecked;
            checkbox.classList.toggle('checked', isConsentChecked);
            
            // 更新登录按钮状态
            updateLoginButtonState();
        }

        function updateLoginButtonState() {
            const loginBtn = document.getElementById('loginBtn');
            const numberInput = document.getElementById('numberInput');
            const passwordInput = document.getElementById('passwordInput');
            
            const hasNumber = numberInput.value.trim() !== '';
            const hasPassword = passwordInput.value.trim() !== '';
            
            loginBtn.disabled = !(hasNumber && hasPassword && isConsentChecked);
        }

        function handleLogin() {
            console.log('=== 开始登录流程 ===');
            
            const number = document.getElementById('numberInput').value.trim();
            const password = document.getElementById('passwordInput').value.trim();
            const errorMessage = document.getElementById('errorMessage');
            
            console.log('输入数据:', { number, password });
            console.log('密码数据库状态:', passwordDatabase);
            console.log('数据库类型:', typeof passwordDatabase);
            console.log('数据库键数量:', Object.keys(passwordDatabase).length);
            
            // 检查数据库是否已加载
            if (Object.keys(passwordDatabase).length === 0) {
                console.log('❌ 密码数据库未加载，尝试重新加载...');
                showError('Password database not loaded. Please try again.');
                
                // 尝试重新加载数据库
                forceReloadDatabase().then(() => {
                    console.log('数据库重载完成，请再次尝试登录');
                });
                return;
            }
            
            // 验证输入
            if (!number || !password) {
                console.log('❌ 输入验证失败: 缺少编号或密码');
                showError('Please enter both number and password');
                return;
            }
            
            if (!isConsentChecked) {
                console.log('❌ 同意条款验证失败');
                showError('Please agree to the consent form');
                return;
            }
            
            // 验证密码
            console.log('🔍 开始密码验证...');
            console.log('查询编号:', number);
            console.log('期望密码:', passwordDatabase[number]);
            console.log('输入密码:', password);
            console.log('数据类型比较:', typeof passwordDatabase[number], typeof password);
            console.log('密码匹配结果:', passwordDatabase[number] === password);
            
            if (passwordDatabase[number] === password) {
                // 登录成功，记录用户ID和登录时间
                console.log('✅ 登录验证成功！');
                console.log('📝 记录用户ID:', number);
                
                localStorage.setItem('currentUserId', number);
                localStorage.setItem('loginTime', Date.now().toString());
                localStorage.setItem('userSessionStart', Date.now().toString());
                
                hideError();
                showSuccess('Login successful!');
                console.log('🔄 准备跳转到home.html...');
                
                // 跳转到Home页面
                setTimeout(() => {
                    console.log('执行页面跳转...');
                    window.location.href = 'home.html';
                }, 1000);
            } else {
                // 登录失败
                console.log('❌ 登录验证失败');
                console.log('期望密码:', passwordDatabase[number]);
                console.log('实际密码:', password);
                showError('Invalid number or password');
            }
            
            console.log('=== 登录流程结束 ===');
        }

        function showError(message) {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
        }

        function hideError() {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.classList.remove('show');
        }

        function showSuccess(message) {
            // 可以添加成功提示的样式
            console.log(message);
        }

        // 添加输入框事件监听
        document.getElementById('numberInput').addEventListener('input', updateLoginButtonState);
        document.getElementById('passwordInput').addEventListener('input', updateLoginButtonState);

        // 添加回车键登录功能
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleLogin();
            }
        });

        // 测试函数
        function testPassword() {
            document.getElementById('numberInput').value = '1';
            document.getElementById('passwordInput').value = '84729';
            isConsentChecked = true;
            document.getElementById('consentCheckbox').classList.add('checked');
            updateLoginButtonState();
            console.log('测试数据已填入，编号: 1, 密码: 84729');
        }
        
        function testPassword2() {
            document.getElementById('numberInput').value = '2';
            document.getElementById('passwordInput').value = '15634';
            isConsentChecked = true;
            document.getElementById('consentCheckbox').classList.add('checked');
            updateLoginButtonState();
            console.log('测试数据已填入，编号: 2, 密码: 15634');
        }
        
        async function forceReloadDatabase() {
            console.log('强制重载密码数据库...');
            try {
                const response = await fetch('./passwords.json');
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                const data = await response.json();
                passwordDatabase = data;
                
                console.log('✅ 数据库重载成功:', passwordDatabase);
                console.log('数据库大小:', Object.keys(passwordDatabase).length);
                console.log('编号1的密码:', passwordDatabase['1']);
                console.log('编号2的密码:', passwordDatabase['2']);
                
                // 显示成功消息
                alert('密码数据库重载成功！\n编号1: ' + passwordDatabase['1'] + '\n编号2: ' + passwordDatabase['2']);
                
            } catch (error) {
                console.error('❌ 数据库重载失败:', error);
                alert('数据库重载失败: ' + error.message);
            }
        }
        
        // 页面加载动画和密码数据库加载
        document.addEventListener('DOMContentLoaded', async function() {
            console.log('DOM加载完成，开始初始化...');
            
            try {
                // 加载密码数据库
                const dbLoaded = await loadPasswordDatabase();
                console.log('密码数据库加载状态:', dbLoaded);
                
                if (dbLoaded) {
                    console.log('✅ 密码数据库加载成功，可以进行登录验证');
                } else {
                    console.log('⚠️ 使用备用密码数据库');
                }
                
                // 页面加载动画
                const container = document.querySelector('.container');
                container.style.opacity = '0';
                container.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    container.style.transition = 'all 0.6s ease';
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                }, 100);
                
            } catch (error) {
                console.error('页面初始化失败:', error);
            }
        });
    