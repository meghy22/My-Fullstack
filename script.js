async function fetchItems() {
    const response = await fetch('http://localhost:5000/api/items');
    const items = await response.json();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        itemList.appendChild(li);
    });
}

async function addItem() {
    const itemName = document.getElementById('itemName').value;
    await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: itemName })
    });
    document.getElementById('itemName').value = '';
    fetchItems();
}

// Fetch items on load
fetchItems();