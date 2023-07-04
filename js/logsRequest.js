document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch user data from the server
  function fetchUsers() {
    fetch("http://localhost:5000/logs/logs")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => b.id - a.id);
        console.log(data);
        const tableBody = document.querySelector("#userTable tbody");

        tableBody.innerHTML = ""; // Clear existing rows

        data.forEach((logs) => {
          const row = document.createElement("tr");

          const timeCell = document.createElement("td");
          timeCell.textContent = logs.date;
          row.appendChild(timeCell);

          const actionCell = document.createElement("td");
          actionCell.textContent = logs.action;
          row.appendChild(actionCell);

          const userOneCell = document.createElement("td");

          if (logs.userTwo === "0") {
            userOneCell.textContent = "1)" + logs.userOne;
          } else {
            userOneCell.innerHTML =
              "1)" + logs.userOne + "<br>" + "2)" + logs.userTwo;
          }

          row.appendChild(userOneCell);

          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error retrieving logs data:", error);
      });
  }

  fetchUsers();
});
