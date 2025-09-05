
        // 切换图标激活状态
        function switchIcon(clickedIcon, iconType) {
            // 移除所有图标的激活状态
            document.querySelectorAll('.icon-item').forEach(icon => {
                icon.classList.remove('active');
            });
            
            // 激活被点击的图标
            clickedIcon.classList.add('active');
            
            console.log('切换到图标:', iconType);
            
            // 这里可以添加具体的功能逻辑
            switch(iconType) {
                case 'notebook':
                    console.log('显示笔记本功能');
                    break;
                case 'processing':
                    console.log('显示进度功能');
                    break;
                case 'light':
                    console.log('显示亮度调节功能');
                    break;
            }
        }

        // 关闭overlay
        function closeOverlay() {
            const container = document.getElementById('overlayContainer');
            container.classList.add('closing');
            
            setTimeout(() => {
                // 返回到bookNormal页面
                window.history.back();
            }, 300);
        }

        // 键盘ESC键关闭
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeOverlay();
            }
        });

        // 页面加载完成后的初始化
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Overlay页面加载完成');
            
            // 检查用户是否已登录
            const currentUserId = localStorage.getItem('currentUserId');
            if (!currentUserId) {
                console.warn('未找到用户ID，重定向到登录页面');
                window.location.href = 'number.html';
                return;
            }
            
            console.log('当前用户ID:', currentUserId);
        });
    