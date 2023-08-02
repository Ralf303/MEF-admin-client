document.addEventListener("DOMContentLoaded", function () {
  // Функция для получения данных пользователей с сервера
  async function fetchUser() {
    try {
      const userId = getParameterByName("id");
      const response = await fetch(
        `http://45.132.18.157:5000/users/getOneUser/${userId}`
      );
      const user = await response.json();

     
      createUserTable(user)
      createItemTable(user)
          } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }

  fetchUser();
});
