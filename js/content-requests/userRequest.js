document.addEventListener("DOMContentLoaded", function () {
  // Функция для получения данных пользователей с сервера
  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://45.132.18.157:5000/users/getAllUsers"
      );
      const data = await response.json();

      // Cортировка данных по балансу (от большего к меньшему)
      data.sort((a, b) => b.balance - a.balance);

      const tableBody = document.querySelector("#userTable tbody");
      tableBody.innerHTML = ""; // Очищаем существующие строки

      // Разделение пользователей по ролям
      const founders = data.filter(
        (user) => user.role && user.role.status === "founder"
      );
      const managers = data.filter(
        (user) => user.role && user.role.status === "manager"
      );
      const users = data.filter(
        (user) =>
          !user.role ||
          (user.role &&
            user.role.status !== "founder" &&
            user.role.status !== "manager")
      );

      // Создание строк для пользователей со статусом "founder"
      founders.forEach((user) => {
        const row = createTableRow(user);
        row.style.backgroundColor = "#ff4848"; // Устанавливаем цвет фона строки
        tableBody.appendChild(row);
      });

      // Создание строк для пользователей со статусом "manager"
      managers.forEach((user) => {
        const row = createTableRow(user);
        row.style.backgroundColor = "#a63bff"; // Устанавливаем цвет фона строки
        tableBody.appendChild(row);
      });

      // Создание строк для остальных пользователей
      users.forEach((user) => {
        const row = createTableRow(user);
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }
  fetchUsers();
});

// Функция для создания строки таблицы
function createTableRow(user) {
  const row = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.textContent = user.chatId;
  row.appendChild(idCell);

  const usernameCell = document.createElement("td");
  const usernameLink = document.createElement("a");
  usernameLink.href = `httpss://t.me/${user.username}`;
  usernameLink.textContent = user.username;
  usernameLink.style.textDecoration = "none"; // Убираем подчеркивание
  usernameLink.style.color = "black"; // Устанавливаем цвет текста в черный
  usernameCell.appendChild(usernameLink);
  row.appendChild(usernameCell);

  const firstnameCell = document.createElement("td");
  const firstnameLink = document.createElement("a");
  firstnameLink.href = `profile.html?id=${user.chatId}`;
  firstnameLink.textContent = user.firstname;

  if (user.firstname.length > 30) {
    firstnameLink.textContent = user.firstname.slice(0, 30) + "...";
  } else {
    firstnameLink.textContent = user.firstname;
  }

  firstnameLink.style.textDecoration = "none"; // Убираем подчеркивание
  firstnameLink.style.color = "black"; // Устанавливаем цвет текста в черный
  firstnameCell.appendChild(firstnameLink);
  row.appendChild(firstnameCell);

  const balanceCell = document.createElement("td");
  balanceCell.textContent = user.balance;
  balanceCell.setAttribute("data-id", user.chatId);
  balanceCell.setAttribute("data-column", "balance");
  row.appendChild(balanceCell);

  const meflvlCell = document.createElement("td");
  meflvlCell.textContent = user.meflvl;
  meflvlCell.setAttribute("data-id", user.chatId);
  meflvlCell.setAttribute("data-column", "meflvl");
  row.appendChild(meflvlCell);

  const timelvlCell = document.createElement("td");
  timelvlCell.textContent = user.timelvl;
  timelvlCell.setAttribute("data-id", user.chatId);
  timelvlCell.setAttribute("data-column", "timelvl");
  row.appendChild(timelvlCell);

  const gemsCell = document.createElement("td");
  gemsCell.textContent = user.gems;
  row.appendChild(gemsCell);

  // Добавляем обработчики событий клика на ячейки
  balanceCell.addEventListener("click", () => {
    openDialog(user.chatId, "balance");
  });

  meflvlCell.addEventListener("click", () => {
    openDialog(user.chatId, "meflvl");
  });

  timelvlCell.addEventListener("click", () => {
    openDialog(user.chatId, "timelvl");
  });

  return row;
}
