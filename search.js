const searchInput = document.getElementById("searchInput");
const userTable = document.getElementById("userTable");

searchInput.addEventListener("input", function (event) {
  const searchValue = event.target.value.toLowerCase();
  const rows = userTable.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let found = true;

    const keywords = searchValue.split(" ");

    // Проверяем каждое слово из введенного значения
    for (let k = 0; k < keywords.length; k++) {
      if (!found) {
        break;
      }

      // Проверяем каждую ячейку на наличие текущего слова
      let wordFound = false;
      for (let j = 0; j < cells.length; j++) {
        const cellValue = cells[j].textContent.toLowerCase();

        if (cellValue.includes(keywords[k])) {
          wordFound = true;
          break;
        }
      }

      // Если текущее слово не найдено в строке, считаем строку несоответствующей
      if (!wordFound) {
        found = false;
      }
    }

    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
