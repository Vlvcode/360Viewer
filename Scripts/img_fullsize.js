document.querySelector("img").addEventListener("click", function() {
    const img = this;
    let overlay = document.getElementsByClassName('imgoverlay')[0]; // Получаем первый элемент с классом 'imgoverlay'
    overlay.style.display = "flex";
    overlay.style.backgroundimage = "url(https://static-00.iconduck.com/assets.00/image-not-found-01-icon-2048x2048-95wsi7vg.png), linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.5)) !important";
    // alert(img.src); // Выводим ссылку на изображение
    return img.src;
 });

 document.getElementsByClassName('imgoverlay')[0].addEventListener("click", function() {
    const overlay = this;
    overlay.style.display = "none"; // Устанавливаем стиль отображения в блок
    // alert(img.src); // Выводим ссылку на изображение
    return img.src;
 });