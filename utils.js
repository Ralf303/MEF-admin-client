function openDialog(chatId, column) {
  const amountInput = document.getElementById("amountInput");
  const cancelButton = document.getElementById("cancelButton");
  const confirmButton = document.getElementById("confirmButton");

  amountInput.value = "";

  cancelButton.onclick = () => closeDialog();
  confirmButton.onclick = () => handleDialogConfirm(chatId, column);

  const changeAmountDialog = document.getElementById("changeAmountDialog");
  changeAmountDialog.showModal();
}

function closeDialog() {
  const changeAmountDialog = document.getElementById("changeAmountDialog");
  changeAmountDialog.close();
}

function handleDialogConfirm(chatId, column) {
  const amountInput = document.getElementById("amountInput");
  const amount = amountInput.value;

  const isValidValue =
    (column !== "balance" && amount >= 1 && amount <= 4) ||
    column === "balance";

  if (isValidValue) {
    fetch(`http://localhost:5000/users/${chatId}/${column}`, {
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
