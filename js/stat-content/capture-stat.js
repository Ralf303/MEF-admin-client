function generateTopCaptchas(data) {
  // Сортируем данные по убыванию количества капч
  data.sort((a, b) => b.captureCounter - a.captureCounter);

  const table = document.querySelector(".table table");

  // Очищаем таблицу перед заполнением
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  const topCaptchasLimit = 10; // Ограничение на количество пользователей в топе

  for (let i = 0; i < topCaptchasLimit && i < data.length; i++) {
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const countCell = row.insertCell(1);

    nameCell.textContent = data[i].firstname;
    countCell.textContent = data[i].captureCounter;
  }
}
