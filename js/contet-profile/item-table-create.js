function createItemTable(user) {
    const items = user.items;
    
    const tbody = document.querySelector('.right table tbody');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.itemName;
        row.appendChild(nameCell);

        tbody.appendChild(row);
    }
}