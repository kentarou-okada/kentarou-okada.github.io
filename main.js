// スクロールアニメーション用
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションのスムーズスクロール
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // プロジェクトデータの動的表示などの機能を追加することも可能
});