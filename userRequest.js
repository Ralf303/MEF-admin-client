document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch user data from the server
  function fetchUsers() {
    fetch("http://localhost:5000/users/users")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => b.balance - a.balance);

        const tableBody = document.querySelector("#userTable tbody");

        tableBody.innerHTML = ""; // Clear existing rows

        data.forEach((user) => {
          const row = document.createElement("tr");

          const idCell = document.createElement("td");
          idCell.textContent = user.chatId;
          row.appendChild(idCell);

          const usernameCell = document.createElement("td");
          const usernameLink = document.createElement("a");
          usernameLink.href = `https://t.me/${user.username}`;
          usernameLink.textContent = user.username;
          usernameLink.style.textDecoration = "none"; // Убираем подчеркивание
          usernameLink.style.color = "black"; // Устанавливаем цвет текста в черный
          usernameCell.appendChild(usernameLink);
          row.appendChild(usernameCell);

          const firstnameCell = document.createElement("td");
          firstnameCell.textContent = user.firstname;
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

          // Add click event listener to balanceCell
          balanceCell.addEventListener("click", () => {
            openDialog(user.chatId, "balance");
          });

          // Add click event listener to meflvlCell
          meflvlCell.addEventListener("click", () => {
            openDialog(user.chatId, "meflvl");
          });

          // Add click event listener to timelvlCell
          timelvlCell.addEventListener("click", () => {
            openDialog(user.chatId, "timelvl");
          });

          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  }

  fetchUsers();
});
