document.addEventListener('DOMContentLoaded', () => {
    const barrel = document.querySelector('.honey-barrel');
    const beeInside = document.querySelector('.bee-inside');
    const beeFlying = document.querySelector('.bee-flying');
     document.addEventListener('DOMContentLoaded', () => {
    const bearContainer = document.querySelector('.bear-container');

    // Позиционируем летающую пчелу там же где бочонок
    function positionBeeNearBarrel() {
        const barrelRect = barrel.getBoundingClientRect();
        const wrapperRect = document.querySelector('#wrapper').getBoundingClientRect();
        
        beeFlying.style.left = (barrelRect.left - wrapperRect.left + 20) + 'px';
        beeFlying.style.top = (barrelRect.top - wrapperRect.top - 20) + 'px';
    }
    
    let isFlying = false;
    
    barrel.addEventListener('mouseenter', () => {
        if (isFlying) return;
        
        // Позиционируем летающую пчелу
        positionBeeNearBarrel();
        
        // Показываем и анимируем вылет пчелы из бочонка
        beeFlying.style.opacity = '1';
        beeFlying.style.animation = 'flyFromBarrel 1s ease-out forwards';
        
        isFlying = true;
        
        // Убираем пчелу через 1 секунду
        setTimeout(() => {
            beeFlying.style.animation = '';
            beeFlying.style.opacity = '0';
            
            // Сброс для следующего наведения
            setTimeout(() => {
                isFlying = false;
            }, 200);
        }, 1000);
    });
    
    // Начальное позиционирование
    positionBeeNearBarrel();
});

// Добавляем анимацию в CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes flyFromBarrel {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0.5) rotate(0deg);
        }
        20% {
            opacity: 1;
            transform: translate(-30px, -40px) scale(0.8) rotate(20deg);
        }
        50% {
            opacity: 1;
            transform: translate(-80px, -100px) scale(1) rotate(-10deg);
        }
        100% {
            opacity: 0;
            transform: translate(-150px, -180px) scale(1.2) rotate(30deg);
        }
    }
`;
document.head.appendChild(style);