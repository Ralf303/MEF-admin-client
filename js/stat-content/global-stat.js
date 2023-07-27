function createGlobalStat(userCount, mefCount, activeUsers) {
  document.getElementById("allUsers").textContent =
    "Всего юзеров: " + userCount;
  document.getElementById("allMef").textContent = "Всего мефа: " + mefCount;
  document.getElementById("activeUsers").textContent =
    "Активных юзеров: " + activeUsers;
}
