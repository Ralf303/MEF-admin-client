function generateColumnName(name) {
  switch (name) {
    case "balance":
      return "меф";

    case "meflvl":
      return "LVL сбора";

    case "timelvl":
      return "LVL времени";

    case "minecraftCase":
      return "количество майн кейсов";

    case "brawlCase":
      return "количество бравл кейсов";

    case "hotlineCase":
      return "количество хотлайн кейсов";

    case "falloutCase":
      return "количество фоллаут кейсов";

    case "donateCase":
      return "количество донат кейсов";

    default:
      return "Что то пошло не так";
  }
}
//коммент чтобы так надо
function openDialog(chatId, column) {
  const signInDialog = document.getElementById("signInDialog");
  const amountInput = document.getElementById("amountInput");
  const cancelButton = document.getElementById("cancelButton");
  const confirmButton = document.getElementById("confirmButton");

  const modifineColumn = generateColumnName(column);

  if (localStorage.getItem("status") === "founder") {
    signInDialog.textContent = `Изменить ${modifineColumn} у ${chatId}`;
    amountInput.value = "";

    cancelButton.onclick = () => closeDialog();
    confirmButton.onclick = () => handleDialogConfirm(chatId, column);

    const changeAmountDialog = document.getElementById("changeAmountDialog");
    changeAmountDialog.showModal();
  } else {
    signInDialog.textContent = "Вам это не доступно";
    amountInput.style.display = "none";
    confirmButton.style.display = "none";
    cancelButton.onclick = () => closeDialog();

    const changeAmountDialog = document.getElementById("changeAmountDialog");
    changeAmountDialog.showModal();
  }
}

function closeDialog() {
  const changeAmountDialog = document.getElementById("changeAmountDialog");
  changeAmountDialog.close();
}

function handleDialogConfirm(chatId, column) {
  const amountInput = document.getElementById("amountInput");
  const amount = amountInput.value;

  const isValidValue =
    ((column === "meflvl" || column === "timelvl") &&
      amount >= 1 &&
      amount <= 4) ||
    (column !== "meflvl" && column !== "timelvl");
  if (isValidValue) {
    fetch(`https://mefadmin.ru:5000/users/changeValue/${chatId}/${column}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: parseInt(amount) }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedValue = data[column];
        const updatedCell = document.querySelector(
          `[data-id="${chatId}"][data-column="${column}"]`
        );
        updatedCell.textContent = updatedValue;
      })
      .catch((error) => {
        console.error(`Error updating ${column}:`, error);
      });
  } else {
    alert("Вы ввели некорректные данные");
  }

  closeDialog();
}
