function checkIdInLocalStorage() {
  // Получаем значение айди из локального хранилища
  const id = localStorage.getItem("id");

  // Если айди есть в локальном хранилище
  if (id) {
    // Остаемся на текущей странице
    return;
  }

  // Если айди отсутствует в локальном хранилище
  // Перенаправляем на index.html
  window.location.href = "index.html";
}

checkIdInLocalStorage();
