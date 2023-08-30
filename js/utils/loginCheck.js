function checkIdInLocalStorage() {
  // Получаем значение айди из локального хранилища
  const id = localStorage.getItem("id");

  // Определяем текущую страницу
  const currentPage = window.location.pathname;

  // Если айди есть в локальном хранилище и пользователь находится на странице index.html
  if (id && currentPage.includes("index.html")) {
    // Перенаправляем на users.html
    window.location.href = "users.html";
    return;
  }
  if (id) {
    fetch("http://45.132.18.157:5000/users/checkLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated && !currentPage.includes("index.html")) {
          localStorage.clear();
          window.location.href = "index.html";
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  }

  // Если айди отсутствует в локальном хранилище и пользователь находится на странице users.html
  if (!id && !currentPage.includes("index.html")) {
    // Перенаправляем на index.html
    window.location.href = "index.html";
    return;
  }
}

checkIdInLocalStorage();
