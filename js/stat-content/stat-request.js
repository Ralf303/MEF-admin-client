document.addEventListener("DOMContentLoaded", () => {
  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://45.132.18.157:5000/users/getAllUsers"
      );
      const data = await response.json();

      const userCount = data.sort((a, b) => b.id - a.id)[0].id;

      let mefCount = 0;
      let activeUsers = 0;

      // Пройти по каждому объекту в массиве и сложить значения "balance"
      for (var i = 0; i < data.length; i++) {
        mefCount += data[i].balance;

        if (data[i].weekMessageCounter !== 0) {
          activeUsers++;
        }
      }

      createGlobalStat(userCount, mefCount, activeUsers);
      generateTopCaptchas(data);
      generateTopDay(data);
      generateTopWeek(data);
      generateTopMonth(data);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }
  fetchUsers();
});
