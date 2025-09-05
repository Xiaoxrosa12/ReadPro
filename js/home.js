        function goBack() {
            // 返回number页面
            window.location.href = 'number.html';
        }

        function setActiveCategory(element) {
            // 移除所有active类
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            // 添加active类到当前元素
            element.classList.add('active');
        }

        function setActiveTab(element, index) {
            // 移除所有active类
            document.querySelectorAll('.tab-item').forEach(item => {
                item.classList.remove('active');
            });
            // 添加active类到当前元素
            element.classList.add('active');
            
            // 这里可以添加页面切换逻辑
            console.log('切换到标签:', index);
        }

        function goToDetails() {
            // 跳转到Details页面
            console.log('准备跳转到Details页面...');
            window.location.href = 'details.html';
        }

        // 添加触摸滑动支持
        let startX = 0;
        let scrollLeft = 0;
        const booksSection = document.getElementById('booksSection');
        const categoriesSection = document.querySelector('.categories-section');

        // 书籍区域的触摸滑动
        booksSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - booksSection.offsetLeft;
            scrollLeft = booksSection.scrollLeft;
        });

        booksSection.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX - booksSection.offsetLeft;
            const walk = (x - startX) * 2;
            booksSection.scrollLeft = scrollLeft - walk;
        });

        booksSection.addEventListener('touchend', () => {
            startX = 0;
        });

        // 分类标签的触摸滑动
        let categoriesStartX = 0;
        let categoriesScrollLeft = 0;

        categoriesSection.addEventListener('touchstart', (e) => {
            categoriesStartX = e.touches[0].pageX - categoriesSection.offsetLeft;
            categoriesScrollLeft = categoriesSection.scrollLeft;
        });

        categoriesSection.addEventListener('touchmove', (e) => {
            if (!categoriesStartX) return;
            const x = e.touches[0].pageX - categoriesSection.offsetLeft;
            const walk = (x - categoriesStartX) * 2;
            categoriesSection.scrollLeft = categoriesScrollLeft - walk;
        });

        categoriesSection.addEventListener('touchend', () => {
            categoriesStartX = 0;
        });

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
