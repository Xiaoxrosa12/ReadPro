function goToLogin() {
    console.log('点击了shouye页面，准备跳转到login页面');
    
    // 添加点击动画效果
    const container = document.querySelector('.container');
    if (container) {
        container.style.transform = 'scale(0.98)';
    }
    
    setTimeout(() => {
        console.log('正在跳转到login.html');
        // 跳转到Login页面
        window.location.href = 'login.html';
    }, 200);
}