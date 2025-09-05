        function goBack() {
            // 返回Home页面
            window.location.href = 'home.html';
        }

        function startReading() {
            // 开始阅读功能
            console.log('开始阅读Oliver Twist...');
            // 跳转到Book Normal页面
            window.location.href = 'bookNormal.html';
        }

        function toggleFavorite() {
            const favoriteButton = document.querySelector('.favorite-button');
            const isFavorited = favoriteButton.classList.contains('favorited');
            
            if (isFavorited) {
                // 取消收藏
                favoriteButton.classList.remove('favorited');
                console.log('取消收藏Oliver Twist');
            } else {
                // 添加收藏
                favoriteButton.classList.add('favorited');
                console.log('收藏Oliver Twist');
            }
        }

        // 页面加载动画
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
