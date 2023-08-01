document.addEventListener("DOMContentLoaded", function () {
  // Функция для получения данных пользователей с сервера
  async function fetchUser() {
    try {
      const userId = getParameterByName("id");
      const response = await fetch(
        `http://localhost:5000/users/getOneUser/${userId}`
      );
      const user = await response.json();

      console.log("User:", user);
      console.log("Items:", user.items);
      console.log("Role:", user.role);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }

  fetchUser();
});
