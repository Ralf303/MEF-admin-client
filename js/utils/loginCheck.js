function checkIdInLocalStorage() {
  // Получаем значение айди из локального хранилища
  const id = localStorage.getItem("id");

  // Определяем текущую страницу
  const currentPage = window.location.pathname;

  // Если айди есть в локальном хранилище и пользователь находится на странице index.html
  if (id && currentPage.includes("index.html")) {
    // Перенаправляем на users.html
    window.location.href = "users.html";
  }

  // Если айди отсутствует в локальном хранилище и пользователь находится на странице users.html
  if (!id && currentPage.includes("users.html")) {
    // Перенаправляем на index.html
    window.location.href = "index.html";
  }
}

checkIdInLocalStorage();
