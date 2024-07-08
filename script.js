// script.js
  const changelocation = (e) => {

    e.preventDefault(); // Предотвращаем отправку формы
    const keyword = document.querySelector('.main-input').value.trim(); // Получаем значение из инпута

    // Создаем объект ключ которого - это ключевое слово, а значение - путь к html файлу
    const paths = {
      "новости": 'main.html',
      "Новости": 'main.html',
      "Новости ": 'main.html',
      "новости ": 'main.html',
      "Игорь Ангелевский": 'news.html',
      "Игорь Ангелевский ": 'news.html',
      "Игорь ангелевский": 'news.html',
      "Игорь ангелевский" : 'news.html',
      "игорь Ангелевский" : 'news.html',
      "игорь Ангелевский " : 'news.html',
      "игорь ингелевский" : 'news.html',
      "игорь ингелевский " : 'news.html',
    }
    // Проверяем существует ли такое ключевое слово
    if(paths[keyword]) {
      window.location.href = paths[keyword] // Переходим по ссылке
    }
  }