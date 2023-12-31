document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch user data from the server
  function fetchLogs() {
    fetch("https://mefadmin.ru:5000/logs/getLogs")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => b.id - a.id);

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
        logFilter();
      })

      .catch((error) => {
        console.error("Error retrieving logs data:", error);
      });
  }

  fetchLogs();
});
