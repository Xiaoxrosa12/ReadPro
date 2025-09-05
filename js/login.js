
        function goBack() {
            // 返回首页
            window.location.href = 'shouye.html';
        }

        function goToNumber() {
            // 跳转到Number页面
            window.location.href = 'number.html';
        }

        // 添加页面加载动画
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                container.style.transition = 'all 0.6s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        });

        // 按钮点击效果
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    