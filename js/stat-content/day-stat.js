function generateTopDay(data) {
  data.sort((a, b) => b.dayMessageCounter - a.dayMessageCounter);

  const table = document.querySelector("#day table");

  // Очищаем таблицу перед заполнением
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  const topLimit = 15; // Ограничение на количество пользователей в топе

  for (let i = 0; i < topLimit && i < data.length; i++) {
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const countCell = row.insertCell(1);

    nameCell.textContent = data[i].firstname;
    countCell.textContent = data[i].dayMessageCounter;
  }
}
