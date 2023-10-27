let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Скрываем все слайды
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // Показываем текущий слайд
  setTimeout(showSlides, 2000); // Меняем слайд каждые 2 секунды (настройте по желанию)
}
