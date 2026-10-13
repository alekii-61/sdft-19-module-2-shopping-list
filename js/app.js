// document.addEventListener("DOMContentLoaded", () => {
    
// })

const form = document.querySelector(".frm-new-item")
const items = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // const item = {
    //     itemName: event.target.itemName.value,
    //     price: event.target.price.value,
    //     qty: event.target.qty.value
    // }

    items.push({
      itemName: event.target.itemName.value,
      price: event.target.price.value,
      qty: event.target.qty.value,
    });

    displayItem(items);

})

/* search funcionality*/
const  searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
        item.itemName.toLowerCase().includes(searchTerm)          
    
    );
    displayItem(filteredItems);
});

function removeItem(index) {
    items.splice(index, 1);
    displayItem(items);
}


function displayItem(items) {
    const tbody = document.querySelector("tbody.stock");
    tbody.innerHTML = "";
    items.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${item.itemName}</td>
            <td>${item.price}ksh</td>
            <td>${item.qty}</td>
            <td>
                <button onclick="removeItem(event)" class="btn btn-icon">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `;
    })
    
}