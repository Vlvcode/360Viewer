let backLogo = document.querySelector('.back_logo');
let movementRange = 50; // Задаем диапазон перемещения фона

moveBackground();

function moveBackground() {
  let newX = Math.floor(Math.random() * movementRange - movementRange/2) + '%';
  let newY = Math.floor(Math.random() * movementRange - movementRange/2) + '%';
  let rotation = Math.floor(Math.random() * 360) + 'deg'; // Генерируем случайный угол поворота от 0 до 360 градусов
  backLogo.style.backgroundPosition = newX + ' ' + newY;
  backLogo.style.transform = 'rotate(' + rotation + ')'; // Применяем поворот 
}

// Вызываем функцию каждые 3 секунды
setInterval(moveBackground, 5000);